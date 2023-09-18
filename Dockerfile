# write dockerfile for nodejs
FROM node:18.17.0-alpine

# set working directory
WORKDIR /usr/src/app

# copy package.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# expose port 8080
EXPOSE 3000

# run app
CMD ["node", "app.js"]