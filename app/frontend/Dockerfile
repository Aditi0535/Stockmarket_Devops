# Stage 1: Build React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:1.27-alpine

# Copy React build files
COPY --from=builder /app/build /usr/share/nginx/html

# Expose Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]