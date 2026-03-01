const express =  require ("express");

const { users } = require("./data/users.json");

const app = express();

const port = 8081;

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message :"Welcome to home page :-)"
    })
})
/**
 * Route : /users
 * Method : GET
 * Description : Get all users
 * Access : Public
 * Parameters : none
 */

app.get("/users",(req,res)=>{
    res.status(200).json({
        success : true,
        data : users
    })
})

/**
 * Route : /users/:id
 * Method : GET
 * Description : Get a specific user by ID
 * Access : Public
 * Parameters : none
 */

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id === id);
    if(!user){
        return res.status(404).json({
            success : false,
            message : `User with ID ${id} not found`
        })
    }
    res.status(200).json({
        success : true,
        data : user
    })
})  

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
    
})
