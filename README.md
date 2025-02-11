Aqui está o README melhorado, com algumas melhorias na formatação e clareza:

```markdown
# Info's CRUD Application

This is a simple **Node.js CRUD** application built with **Express**, **SQLite**, and **Mocha** for testing.

## Table of Contents

- [Running on Docker](#running-on-docker)
- [Prerequisites](#prerequisites)
- [Installing Dependencies](#installing-dependencies)
- [Running the Application](#running-the-application)
- [Running Unit Tests](#running-unit-tests)
- [Developed by](#developed-by)

---

## Running on Docker

To run the application using Docker, follow these steps:

1. **Build the Docker image:**

   ```bash
   docker build -t crud-info-be .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 4000:4000 crud-info-be
   ```

This will build the Docker image and start the application on port **4000**.

---

## Running local (Prerequisites)

Ensure you have **Node.js version 22.13.1** installed on your machine. 

### Using `nvm` (Node Version Manager)

If you're using `nvm` to manage your Node.js versions, follow these steps:

1. **Install Node.js version 22.13.1:**

   ```bash
   nvm install 22.13.1
   ```

2. **Switch to Node.js version 22.13.1:**

   ```bash
   nvm use 22.13.1
   ```

You can verify the installed version with:

```bash
node -v
```

This ensures you're using the correct version of Node.js for the project.

---

## Installing Dependencies

After ensuring you're on the correct Node.js version, install the project dependencies by running:

```bash
npm install
```

This will install all the necessary packages required to run the application.

---

## Running the Application

To start the server, run the following command:

```bash
npm start
```

The application will start and listen on **port 4000** (or any other port configured in your project).

---

## Running Unit Tests

To execute the unit tests, use the following command:

```bash
npm test
```

This will run the tests using **Mocha** and **Chai**. By default, the tests will use SQLite as the database (in-memory SQLite for testing purposes).

---

## Developed by

[juscilan.com](https://juscilan.com).
```
