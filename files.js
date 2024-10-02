//to us a module, we import/require the module
const fsmod = require("fs")
//to use a function from a module, we call the function with the module name
fsmod.writeFileSync("style.css","hello this is css content","utf-8")
//to use a variable from a module, we use the module name