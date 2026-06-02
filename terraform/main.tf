# -----------------------
# Resource Group
# -----------------------
resource "azurerm_resource_group" "this" {
  name     = var.resource_group_name
  location = var.location
}

# -----------------------
# Virtual Network
# -----------------------
resource "azurerm_virtual_network" "vnet" {
  name                = "${var.resource_group_name}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
}

# -----------------------
# Subnets
# -----------------------

# Container App Environment Subnet (dedicated)
resource "azurerm_subnet" "environment_subnet" {
  name                 = "${var.resource_group_name}-env-subnet"
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.0.0/23"]

  # Required since CAE handles its own delegation
  enforce_private_link_endpoint_network_policies = true
}

# Workload Subnet (Backend future apps)
resource "azurerm_subnet" "workload_subnet" {
  name                 = "${var.resource_group_name}-work-subnet"
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.2.0/23"]
}

# -----------------------
# Log Analytics
# -----------------------
resource "azurerm_log_analytics_workspace" "law" {
  name                = "${var.resource_group_name}-law"
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# -----------------------
# Container App Environment
# -----------------------
resource "azurerm_container_app_environment" "cae" {
  name                       = "${var.resource_group_name}-cae"
  location                   = azurerm_resource_group.this.location
  resource_group_name        = azurerm_resource_group.this.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.law.id

  infrastructure_subnet_id   = azurerm_subnet.environment_subnet.id
}
