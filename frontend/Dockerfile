# Use a Node.js base image
FROM node:21-alpine3.19 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight nginx image for the production stage
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 3000

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]