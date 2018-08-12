FROM node:9

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build-client

FROM nginx:alpine
COPY --from=0 /usr/src/app/bin /usr/share/nginx/html