# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 4040

# Run the app using nodemon
CMD ["nodemon", "server.js"]
