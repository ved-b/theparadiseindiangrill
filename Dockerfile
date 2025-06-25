# Use an official Node.js image as the base.
# Alpine versions are lightweight and great for development.
FROM node:22-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's layer caching.
# This way, 'npm install' only re-runs if these files change.
COPY package*.json ./

# Install project dependencies inside the container.
RUN npm install

# Copy the rest of your application's source code into the container.
COPY . .

# Expose the port that the Vite dev server runs on.
EXPOSE 5173

# The command to run when the container starts.
CMD ["npm", "run", "dev"]
