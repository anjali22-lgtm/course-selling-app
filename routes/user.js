
    const express=require("express");//Router
   const Router = express.Router;

    const userRouter= Router();


    userRouter.post("/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    });
});



userRouter.post("/signin", function(req,res){
    res.json({
        message: "signin endpoint"
    });
});


userRouter.get("/purchases", function(req,res){
    res.json({
        message: "purchase endpoint"
    });
});

module.exports={
    userRouter
}

