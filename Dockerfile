# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Update npm and install dependencies
RUN npm update -g npm && \
    npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S -G appgroup appuser

# Copy only the necessary files from the build stage
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev && \
    chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NODE_OPTIONS="--no-warnings"

# Start the application
CMD ["node", ".output/server/index.mjs"]