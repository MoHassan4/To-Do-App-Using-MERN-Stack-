const Todo = require("../models/Todo");
const moment = require("moment");

const homeController = async(req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt : -1});

        res.locals.moment = moment;

        res.render('index.ejs',{title:"List todo" , todos});
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
};

const addtodoController = (req,res,next)=>{
    try{
        res.render('newtodo.ejs',{title:"New todo"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const updateTodoController = async(req,res,next)=>{
    try{
        const {id} = req.query;
        const todo = await Todo.findById(id);
        res.render('updatetodo.ejs',{title:"Update todo" ,todo})

    }catch(error){
        res.status(500).json({message : error.message});
    }
};

const deleteTodoController = (req,res,next)=>{
    try{
        const {id} = req.query;

        res.render('deletetodo.ejs',{title:"Delete todo",id})
    }catch(error){
        res.status(500).json({messsge : error.message});
    }
};

const addTodoController = async(req,res,next)=>{
    try{
        const {title , desc} = req.body;

        console.log(req.body);

        const newTodo = new Todo({title , desc});

        await newTodo.save();

        res.redirect('/');
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const updatetodoController = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const {title,desc} = req.body;

        const todo = await Todo.findById(id);

        if(!todo){
            res.status(404).json({message : error.message})
        }

        todo.title = title;
        todo.desc = desc;

        await todo.save();

        res.redirect('/');
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

const deletetodoController = async(req,res,next)=>{
    try{
        const {id,confirm} = req.query;

        if (confirm === 'yes'){
            await Todo.findByIdAndDelete(id);
        }

        res.redirect('/');
    }catch(error){
        res.status(500).json({message : error.message});
    }

}

module.exports = {homeController,addtodoController,updateTodoController,deleteTodoController,addTodoController,updatetodoController,deletetodoController}
