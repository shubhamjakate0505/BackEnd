# Node.js and Express Overview

## Node.js: Runtime Environment
Node.js is a runtime environment that allows JavaScript to be executed outside the browser.

### Process
The `process` object provides information about, and control over, the current Node.js process.

### process.argv
`process.argv` returns an array containing the command-line arguments passed when the Node.js process was launched.

### module.exports
- `require()`: A built-in function used to include external modules that exist in separate files.
- `module.exports`: A special object used to export functions, objects, or values from a module.

### npm (Node Package Manager)
- [npm](https://www.npmjs.com/) is the standard package manager for Node.js.
  1. **Library of packages:** A vast collection of libraries available for installation.
  2. **Command line tool:** Used to install packages and manage dependencies via the command line.



**Framework** is a set of pre-written code that provides a structure for developing software applications. It helps streamline the development process by providing common functionality, thus allowing developers to focus on building the core features of their applications.

# Express

**Express** is a Node.js web application framework that simplifies the process of building web applications. It is particularly useful for server-side programming. Express is commonly used for tasks such as:

**Listening to Incoming Requests**: Express can listen for and handle incoming HTTP requests from clients.
**Parsing Requests**: Express can parse incoming requests, including the body, headers, and URL parameters.
**Matching Routes**: Express helps in matching incoming requests to the appropriate route handler based on the URL and HTTP method.
**Sending Responses**: Express allows developers to send responses back to the client, including HTML, JSON, and other data formats.

### Common Express Patterns

 **Using Middleware:**
   ```javascript
   app.use((req, res) => {
       console.log("Middleware is running");
   });
Defining Routes:
app.get(path, (req, res) => {
    // Handle GET request to the specified path
});
Sending Responses:
res.send("Response content");
4. Handling Path Parameters:
Express makes it easy to capture and work with parameters in the URL path.

5. Working with Query Strings:
Express simplifies the process of accessing query string parameters in the URL.




### package.json
The `package.json` file contains descriptive and functional metadata about the project, such as name, version, and dependencies.

To initialize a new `package.json` file, use:
```bash
npm init















# Framework:
A Framework is a set of pre-written code that Provides a Structure for developing software application
# Express
 A Node.js web application framework that helps us to make we appliation 
 it is used for server side Programmig 
 Commanonly Express working on Following 
 1.Listening incomeing Req
 2.parse
 3.match response with Routes
 4.Response

 1. app.use((req,res)=>{console.log("")});
 2.app.get(path,(req,res)=>{})
 3.Sending Response(parse)
 res..send("")
4.path parameter
5.Query String

# EJS
EJS(Embedded javaScript templete)
Ejs is a simple templating lang. that lets you generate HTML markup with plain javaScript






