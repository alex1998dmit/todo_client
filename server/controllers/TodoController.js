const TodoList = require('../models').TodoList

const Todo = require('../models').Todo
const List = require('../models').List
const to = require('await-to-js').default

module.exports = {
//   getById: async (req, res) => {
//     const [err, list] = await to(List.findByPk(req.params.id))
//     if (err) return res.status(500).send(err)
//     if (!list) return res.status(404).send({ message: 'List not found' })
//     return res.status(200).send(list)
//   },
  create: async (req, res) => {
    const [err, todo] = await to(Todo.findByPk(req.body.id))
    if (err) return res.status(500).send(err)
    // TODO возравщать ошибку
    if (todo) return res.status(200).send(todo)
    const [errCreate, newTodo] = await to(Todo.create({
      title: req.body.title || '',
      checked: false
    }))
    if (errCreate)  return res.status(500).send(errCreate) 
    return res.status(201).send({ todo: newTodo })
  },
  attachToList: async (req, res) => {
    console.log(req.params.listId, req.params.todoId)
    const [err0, todo] = await to(Todo.findByPk(1));
    const [err1, list] = await to(List.findByPk(1));
    await todo.addLists(list);
    // const result = await Todo.findByPk(1, { include: List });
    // return res.status(201).send({ todo: result })
  }
//   patch: async (req, res) => {
//     const [err, list] = await to(List.findByPk(req.params.id))   
//     if (err) return res.status(500).send(err)
//     if (!list) return res.status(404).send({ message: 'List Not Found' })
//     const [errPatch] = await to(list.update({
//       title: req.body.title,
//     }))
//     if (errPatch) return res.status(400).send(err)
//     return res.status(202).send(list)
//   }
}