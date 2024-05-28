# Use a Node.js base image
FROM node:21-alpine3.19 as build

# Set the working directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Copy the rest of the application code
# COPY . .

# # Expose the port
# EXPOSE 3000

# # Start the nginx server
# CMD ["npm", "run", "start"]