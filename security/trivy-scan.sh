#!/usr/bin/env bash
set -e

IMAGE="$1"
if [ -z "$IMAGE" ]; then
  echo "Usage: $0 <image>"
  exit 1
fi

# run trivy; fail on CRITICAL/HIGH
trivy image --severity CRITICAL,HIGH --exit-code 1 "${IMAGE}" || {
  echo "Trivy found HIGH/CRITICAL vulnerabilities in ${IMAGE}"
  exit 1
}
