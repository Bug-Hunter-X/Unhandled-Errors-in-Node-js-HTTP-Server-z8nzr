# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js:  unhandled exceptions in an HTTP server. The `bug.js` file shows a basic server that lacks error handling. This can lead to server crashes without informative error messages.

The `bugSolution.js` file provides a corrected version with robust error handling.  It includes error listeners for the server and demonstrates how to gracefully handle various potential errors.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the server's behavior (it might crash without any error messages if a port is already in use).

## How to fix the bug

Refer to the `bugSolution.js` file for a solution that implements proper error handling and logging. It adds error listeners for the server's 'error' and 'listening' events, ensuring that any problems are caught and logged.