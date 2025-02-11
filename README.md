```markdown
# Info's CRUD Application

This is a simple Node.js CRUD application built with Express, SQLite, and Mocha for testing.

## Prerequisites
Running on Docker

```bash
   docker build -t crud-info-be . 
```
```bash
   docker run -p 4000:4000 crud-info-be 
```

Ensure you have **Node.js version 22.13.1** installed on your machine.

### Using nvm (Node Version Manager)

If you're using `nvm` to manage your Node.js versions, follow these steps:

1. **Install Node.js version 22.13.1**:
   ```bash
   nvm install 22.13.1
   ```

2. **Switch to Node.js version 22.13.1**:
   ```bash
   nvm use 22.13.1
   ```

You can verify the installed version with:
```bash
node -v
```

## Installing Dependencies

After ensuring you're on the correct Node.js version, install the project dependencies:

```bash
npm install
```

This will install all the necessary packages required to run the application.

## Running the Application

To start the server, run the following command:

```bash
npm start
```

The application will start and listen on **port 3000** (or any other port configured in your project).

## Running Unit Tests

To execute the unit tests, use the following command:

```bash
npm test
```

This will run the tests using Mocha and Chai. Make sure you have SQLite set up as the database (in-memory, by default).

## Developed by

This project is developed by [juscilan.com](https://juscilan.com).
