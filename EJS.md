MDN :https://ejs.co/

# EJS : 
it's a simple templeting lang. that help you generate markup lang.with the plan javaScript
**rendering file**
app.set("view engine","ejs")
res.render("filename")

**We can Access Data outside the current floder**
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views")) 

**Iterpolation Syntax**
Interpolation refer to embedding expression into markup text.

