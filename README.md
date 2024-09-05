# Express App with Node.js (MVC Architecture)

This is Express application built with Node.js following the MVC (Model-View-Controller) architecture. The application supports user authentication, registration, and basic CRUD operations. It uses JWT for authentication and bcrypt for password hashing.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Creating a Branch](#creating-a-branch)
- [Environment Variables](#environment-variables)
- [Endpoint Test](#endpoint-test)

## Installation

To get started with the project, follow these steps :

1. Install the dependencies:

    ```bash
    npm install
    ```
## Project Structure

This project follows a simple MVC (Model-View-Controller) architecture:

├─── controller

├─── middleware

├─── models

├─── routes

## Creating a Branch

1. Use your name
    - **Examples:**
        - anuda
        - dasun

## Environment Variables
1. Make .env file as env_example
   use following tutorials to config the envirounmental variables
   - EMAIL = "https://www.youtube.com/watch?v=cqdAS49RthQ&t=177s"
   - PASSWORD = "https://www.youtube.com/watch?v=cqdAS49RthQ&t=177s"
   - SECRET_KEY = Any String (eg:-"sdadasda")


## Running the App

To run the application, use the following command:

```bash
nodemon server.js
```

## Endpoint Test

Import postman collection "WanderLK.postman_collection" to 'postman'
