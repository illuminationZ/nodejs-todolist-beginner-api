# write dockerfile for nodejs
FROM node:18.17.0-alpine

# set working directory to /usr/src/app
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm ci

# copy source code to working directory
COPY . .

# expose port 3000 for the app
EXPOSE 3000

# run app in development mode
CMD ["npm", "run", "dev"]