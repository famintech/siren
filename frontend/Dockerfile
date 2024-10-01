# Use Node.js as the base image
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:20-alpine as production-stage

WORKDIR /app

# Install serve
RUN yarn global add serve

# Copy built assets from build stage
COPY --from=build-stage /app/dist ./dist

# Expose port 5000 (default for serve)
EXPOSE 5000

# Start serve
CMD ["serve", "-s", "dist", "-l", "5000"]