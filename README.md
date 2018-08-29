# nwjs-react-boilerplate
  A [Nwjs(node-webkit)](https://github.com/nwjs/nw.js) development starter using Webpack.

* Heavily commented webpack configuration with reasonable defaults
* ES6, and ES7 support with babel
* Development server using express with hot reload
* No gulp and no grunt, just npm scripts.

> Warning: Make sure you're using Node.js and NPM

## Quick start
> Clone/Download the repo then edit `index.js` inside `/src`

## Table of Contents
* [Getting Started](#getting-started)
  * [Dependencies](#dependencies)
  * [Installing](#installing)
  * [Running the app](#running-the-app)
  * [Pack the app](#pack-the-app)
* [License](#license)

## Getting Started
### Dependencies
What you need to run this app:
* `node` and `nw` (Use NVM)
* this last version is recommended

### Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

### Running the app
After you have installed all dependencies you can now run the app with:
```
 npm start
```
It will start a local server using `express` with `webpack-dev-middleware` which will watch,rebuild,reload for you.The port will be displayed to you in terminal.As the same time, the nwjs client will auto start.

### Pack the app
After you've developed app, you can build build a distribution package with nw-builder-phoenix with:
```
  npm run dist
```
then the bundle files are placed on the output dir `e.g. /build/dist`

How to package your app by dist file?

see [http://docs.nwjs.io/package-your-app](http://docs.nwjs.io/en/latest/For%20Users/Package%20and%20Distribute/#package-your-app)

## License
MIT
