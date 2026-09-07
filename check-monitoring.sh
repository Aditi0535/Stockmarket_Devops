#!/bin/bash

echo "========================================"
echo " StockMarket Monitoring Health Check"
echo "========================================"

PROM="http://localhost:9090"

check_query() {
    local name="$1"
    local query="$2"

    echo
    echo "----------------------------------------"
    echo "$name"
    echo "----------------------------------------"

    result=$(curl -s -G "$PROM/api/v1/query" \
        --data-urlencode "query=$query")

    status=$(echo "$result" | jq -r '.status')

    if [ "$status" != "success" ]; then
        echo "ERROR"
        echo "$result" | jq
        return
    fi

    count=$(echo "$result" | jq '.data.result | length')

    echo "Series found: $count"

    if [ "$count" -eq 0 ]; then
        echo "NO DATA"
    else
        echo "$result" | jq '.data.result[] | .metric'
    fi
}

echo
echo "### 1. Prometheus ###"

check_query \
"Prometheus Status" \
'up{job="prometheus"}'

echo
echo "### 2. Backend ###"

check_query \
"Backend Status" \
'up{job="backend"}'

check_query \
"HTTP Requests/sec" \
'sum(rate(http_requests_total[5m]))'

check_query \
"Backend Errors" \
'sum(backend_errors_total)'

check_query \
"HTTP P95 Response Time" \
'histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))'

check_query \
"HTTP Requests In Progress" \
'http_requests_in_progress'

echo
echo "### 3. cAdvisor / Containers ###"

check_query \
"Container CPU" \
'sum(rate(container_cpu_usage_seconds_total{name!="",cpu="total"}[5m])) by (name) * 100'

check_query \
"Container Memory" \
'container_memory_usage_bytes{name!=""}'

check_query \
"Container Network RX" \
'sum(rate(container_network_receive_bytes_total{name!="",interface!="lo"}[5m])) by (name)'

check_query \
"Container Network TX" \
'sum(rate(container_network_transmit_bytes_total{name!="",interface!="lo"}[5m])) by (name)'

echo
echo "### 4. Node Exporter ###"

check_query \
"Node CPU" \
'100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)'

check_query \
"Node Memory" \
'(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100'

check_query \
"Node Disk" \
'100 - ((node_filesystem_avail_bytes{fstype!="tmpfs",mountpoint="/"} / node_filesystem_size_bytes{fstype!="tmpfs",mountpoint="/"}) * 100)'

echo
echo "### 5. Scrape Targets ###"

check_query \
"All UP targets" \
'up'

echo
echo "### 6. Container Names ###"

curl -s -G "$PROM/api/v1/query" \
    --data-urlencode 'query=container_cpu_usage_seconds_total{name!="",cpu="total"}' \
    | jq -r '.data.result[].metric.name' \
    | sort -u

echo
echo "========================================"
echo " Health Check Complete"
echo "========================================"
