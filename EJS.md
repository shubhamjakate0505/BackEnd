MDN :https://ejs.co/

# EJS : 
- it's a simple templeting lang. that help you generate markup lang.with the plan javaScript
# rendering file
- app.set("view engine","ejs")
- res.render("filename")

# We can Access Data outside the current floder
- app.set("view engine","ejs")
- app.set("views",path.join(__dirname,"/views")) 

# Iterpolation Syntax**
Interpolation refer to embedding expression into markup text.
read- Tags
https://ejs.co/ 

# Serving Static Files**
for the serving the static file than we should have public folder which contains statics file like js,css

- app.use(express.static(folder_name));
- eg -app.use(express.static(path.join(__dirname,"public")));

# includes
# get Request
Data Comes in req.quary;
# Post Request
Data Comes in req.body;

- app.use(express.urlencoded({extended:true}))
- app.use(express.json())//for the json type data
