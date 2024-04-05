
# Use official Node.js image as the base image for building
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /student-fe

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Use lightweight Nginx image as the base image for the production environment
FROM nginx:alpine

# Copy the build output from the builder stage to the production image
COPY --from=builder /student-fe/build /usr/share/nginx/html

# # Copy nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world (nginx default)
EXPOSE 80

# No need for CMD as the Nginx image already has default CMD to start Nginx
