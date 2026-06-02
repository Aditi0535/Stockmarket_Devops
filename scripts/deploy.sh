#!/usr/bin/env bash
set -e

# Usage:
# ./deploy.sh <RESOURCE_GROUP> <CONTAINER_APP_NAME> <ACR_NAME>

RESOURCE_GROUP="$1"
CONTAINER_APP="$2"
ACR_NAME="$3"

if [ -z "$RESOURCE_GROUP" ] || [ -z "$CONTAINER_APP" ] || [ -z "$ACR_NAME" ]; then
  echo "Usage: $0 <RESOURCE_GROUP> <CONTAINER_APP_NAME> <ACR_NAME>"
  exit 1
fi

echo "Logging into ACR..."
az acr login --name "$ACR_NAME"

echo "Pushing updated Docker images..."
docker push "$ACR_NAME.azurecr.io/stock-frontend:latest"
docker push "$ACR_NAME.azurecr.io/stock-backend:latest"

echo "Deploying to Azure Container Apps..."

az containerapp update \
  --name "$CONTAINER_APP" \
  --resource-group "$RESOURCE_GROUP" \
  --image "$ACR_NAME.azurecr.io/stock-frontend:latest"

az containerapp update \
  --name "${CONTAINER_APP}-backend" \
  --resource-group "$RESOURCE_GROUP" \
  --image "$ACR_NAME.azurecr.io/stock-backend:latest"

echo "✅ Deployment complete!"
