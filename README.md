# Webpack configuration for TypeScript

This repository is a very simple example for TypeScript project with webpack.\
The compiled TypeScript codes are supposed to be executed in client side,\
so all of the codes are compiled into one JavaScript file as a bundle.

## Create Config Files

####\* if typescript is not installed globally

`yarn global add typescript`

### execute these commands in the root directory

`yarn init -yp`

`tsc --init`

`touch webpack.config.js`

`touch .env`

## Install Dependency

### add these as dev dependencies

`yarn add -D typescript webpack webpack-cli ts-loader dotenv @types/node`
