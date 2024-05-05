# My Awesome Store Management API 🛍️

Welcome to the documentation for the My Awesome Store Management API! This API allows you to manage products, images, and more for your online store.



## Features

- 📦 **Product Management**: Create, read, update, and delete products.
- 🖼️ **Image Management**: Upload, retrieve, and serve images for your products.
- 📹 **Video Management**: upload videos for your shop .
- 🔨 **Text Management**: write text and messages for your products .
- 🔙 **Auto BackUp**: auto back of your database every 1 h .
- ⚙️ **Customizable**: Easily customize and extend the API to suit your store's needs.
- 🔒 **Security**: Includes built-in security features to protect your data.
- 🆕 **More** : Soon...
## Installation

To install and run the API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Itzhep/Store-Management-API.git`
2. Install dependencies: `npm install`
3. Configure environment variables (if necessary).
4. Start the server: `npm start`

## API Endpoints

### Products

- **GET ```/products```**: Retrieve a list of all products.
- **GET ```/products/:id```**: Retrieve details for a specific product.
- **POST ```/products```**: Create a new product.
- **PUT ```/products/:id```**: Update an existing product.
- **DELETE ```/products/:id```**: Delete a product.
- **GET ```/video/:id```**: Get video by id from database .
- **GET ```/backup/```**: Get backup from database .
- **GET ```/text/:id```**: Get Text or Message from Database by id .

## Usage

# Here's a quick example of how to use the API:


## Retrieve all products
```bash
http://localhost:3000/products
```
## Retrieve a specific product
```bash
http://localhost:3000/products/1234
```
## Retrieve a specific Image
```bash
http://localhost:3000/image/:id
```
## get a video by id
```bash
http://localhost:3000/video/:id
```
## get a message ot text from database
```bash
http://localhost:3000/text/:id
```
# get manual backup from database
```bash
http://localhost:3000/backup/
```
