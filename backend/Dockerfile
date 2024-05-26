# Use a Node.js base image
FROM node:21-alpine3.19 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Use a lightweight Node.js image for the production stage
FROM node:21-alpine3.19

# Set the working directory
WORKDIR /app

# Copy the built NestJS app from the previous stage
COPY --from=build /app/dist ./dist

# Copy the package.json and package-lock.json files again
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port
EXPOSE 3001

# Start the NestJS server
CMD ["npm", "run", "start:prod"]
