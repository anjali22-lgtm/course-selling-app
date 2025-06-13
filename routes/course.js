const express = require("express");
const Router = express.Router;
const courseRouter = Router();

    courseRouter.post("/purchase", function(req,res){
    res.json({
        message: "course purchased"
    });
});


courseRouter.get("/preview", function(req,res){
    res.json({
        message: "course preview"
    });
});

module.exports = {
    courseRouter
}
