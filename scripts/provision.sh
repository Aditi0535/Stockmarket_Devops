#!/usr/bin/env bash
set -e

echo "Provisioning Azure infrastructure with Terraform..."

cd "$(dirname "$0")/../terraform" || exit 1
terraform init
terraform plan -out=tfplan
terraform apply -auto-approve tfplan

echo "✅ Terraform complete — resources ready"
echo "Run 'terraform output' to get ACA endpoints"
