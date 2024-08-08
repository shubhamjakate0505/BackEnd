--------Node.js---------
# Node.js: Run time Envirment
Which is help to run JavaScript outside the Browser.

# Process  
This object Provide Information about , and Control Over, the Current Node.js Process.
# process-argv
return the aray containg the cmd-line argument passed    when the node.js process was lunched

# module.export
require() :a built in function to include external modules that is exit in separate file
module.exports - A special Object   

# npm(Node package Manager):( https://www.npmjs.com/ ) -
npm is the standared package manager for the node.js

1. library of package
2. command line tool(we can install packages using npm cmdline) 


# package.json
The package.json file contaning descriptive and functional metadat about the project, 
such as a name, version, and dependancies

npm init

# require v/s import

 import {sum} from "./math.js"

 we can't selectively load only the pieces we need with require but with import , we can selectively load only the pieces we need , which can save memory

loading is synchronous for require but can be asychronous for import.


--------Node.Express---------

# Express
A Node.js Web application framework that helps us to make web application
it is used for the server side programming

works of Express

1. listing for incoming Req
2. parse
3. mathch req with Routes
4. response

# Routing
it is process of selecting  a path for traffic in a network or between or across multiple networks

# response 
app.use((req,res)=>{

})


--------Node.EJS---------
# Templating :
EJS(Emmbedded javascript temp)
ejs is simple templating lang. that lets you generate HTMl markup with plain javascript

res.render()