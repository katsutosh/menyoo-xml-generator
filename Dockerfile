# 1. Use the official Node.js image from the Docker Hub
FROM node:20

ENV TZ="Europe/Berlin"
# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# 4. Install the dependencies
RUN npm install

# 5. Copy the rest of the application code into the container
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Command to run the application
CMD ["npm", "start"]