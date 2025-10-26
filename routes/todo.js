const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo")

router.get('/' , todo.homeController)

//add todo
router.get('/add-todo' , todo.addtodoController)

//update todo
router.get('/update-todo' , todo.updateTodoController)

//delete todo
router.get('/delete-todo' , todo.deleteTodoController)

router.post('/add-todo' , todo.addTodoController );

router.post('/update-todo/:id',todo.updatetodoController);

router.get('/confirm-delete',todo.deletetodoController)

module.exports = router;
