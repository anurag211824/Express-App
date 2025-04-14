import express from "express";
// import {userLogin,userSignUp     } from "./controller.js"
import router from "./route.js";
const app = express();

const PORT = 3000;

//..............................................................................
// 1.These are the diff routes in express js
app.get("/", (req, res) => {
  res.send("Hello expres js");
});

app.get("/about", (req, res) => {
  res.send("Hello about page");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact page");
});

//Dynamic route in express js
// app.get('/user/:username',(req,res)=>{
//     const username = req.params.username
//     res.send(`Hello ${username}`)
// })

// //dynamic route with query string
// app.get('/search/',(req,res)=>{
//     const keyword = req.query.keyword
//     res.send(`Hello ${keyword  }`)
// })

// app.delete("/users/:id", (req, res) => {
//     const userId = req.params.id;
//     res.json({
//       message: `user with id ${userId} deleted sucessfully`,
//     });
//   });
//..............................................................................




//..................................................
// 2.Dynamic route
// app.get('/user/:username',usernameController)
//dynamic route with query string
// app.get('/search',searchController)
//..................................................


//..................................................
// 3.EXAMPLE OF  SERVER->>>ROUTER->>>CONTROLLER
app.use("/user", router);
//..................................................



app.use(express.json()); // 4. to parse JSON bodies
//................................................................................
// 5.Route with query string and uses express.json() as a middleware
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `Hello ${name} ${email}`,
  });
});
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `Hello ${name} ${email}`,
    id: userId,
  });
});
//..................................................................................

//.................................................................................
// 6.Route with regex and multiple params
// app.get("/things/:name/:id", (req, res) => {
//   const { name, id } = req.params;

//   if (!/^\d{5}$/.test(id)) {
//     return res.status(400).send("ID must be exactly 5 digits.");
//   }

//   res.json({
//     message: `Hello ${name} ${id}`,
//   });
// });
//...................................................................................

//.................................................................................
// 7. Creating a basic middelware in express js
// app.use((req,res,next)=>{
//     console.log("middleware is running")
//     next()
// })
// app.get("/", (req, res) => {
//     res.send("Hello expres js");
//   });
//.................................................................................. 

//..................................................................................  
// 8. Adding a middleware to a single route
// app.use("/welcome", (req, res, next) => {
//   console.log("middleware is running on welcome route "+Date.now());
//   next();
// });
// app.get ("/welcome",(req,res,next)=>{
//     res.send("Hello welcome page")
// })
//..................................................................................

//..................................................................................  
// 9. Showing the flow of a middleware 
// app.use("/anurag",(req,res,next)=>{
//   console.log("Starting middleware");
//   res.on("finish",()=>{
//     console.log("Ending middleware")
//   })
//   next()
// })
// app.get("/anurag",(req,res)=>{
//     console.log("Middle of middleware");
//     res.send("Hello anurag")
// })
//.................................................................................. 


//...................................................................................
// 10.Handling error in express js using a middleware
// app.get('/error',()=>{
//     throw new Error("This is an error")
// })
// app.use((err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send("Something broke!")
// })
//...................................................................................

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
