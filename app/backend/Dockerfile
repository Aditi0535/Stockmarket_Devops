FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application code
COPY . .

# Production environment
ENV NODE_ENV=production

# Backend API port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
