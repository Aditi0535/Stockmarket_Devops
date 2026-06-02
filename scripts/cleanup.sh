#!/usr/bin/env bash
set -e

echo "Cleaning Azure Container Apps resources..."

RESOURCE_GROUP="$1"
CONTAINER_APP="$2"

if [ -z "$RESOURCE_GROUP" ] || [ -z "$CONTAINER_APP" ]; then
  echo "Usage: $0 <RESOURCE_GROUP> <CONTAINER_APP>"
  exit 1
fi

echo "Stopping container app..."
az containerapp stop --name "$CONTAINER_APP" --resource-group "$RESOURCE_GROUP"

echo "Deleting container app..."
az containerapp delete --name "$CONTAINER_APP" --resource-group "$RESOURCE_GROUP" --yes

echo "Pruning ACR images..."
ACR_NAME=$(az acr list --query "[0].name" -o tsv)
az acr repository list --name "$ACR_NAME" -o tsv | xargs -I {} az acr repository delete --name "$ACR_NAME" --repository {} --yes

echo "Cleanup done ✅"
