# Phones Application


## Usage
### Development

1. Clone this repository
2. Run `npm install`
3. Start the server with `npm run start-server`
4. Start the client with `npm run start-client` (also runs watcher)

### Production

* Create and launch docker images by running `docker-composer up -d`
* Move docker images to server for easy deploy


## Stack
### Client
* Typescript
* React
* Redux
* Axio
* Redux-Observable
* RxJs
* Less
* (Docker container serves files within an Nginx instance)

### Server
* ExpressJS
* Typescript-Rest

### Deploy
* Webpack
* Docker with docker-compose

## To-Do
* Create tests on client (unit, render), server (unit, system) and e2e
* Split repo into three projects: model, client and server
* Extract config files with common data (e.g. API URL, ports, etc.)