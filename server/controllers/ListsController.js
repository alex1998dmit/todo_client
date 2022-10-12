const List = require('../models').List
const to = require('await-to-js').default

module.exports = {
  getById: async (req, res) => {
    const [err, list] = await to(List.findByPk(req.params.id))
    if (err) return res.status(500).send(err)
    if (!list) return res.status(404).send({ message: 'List not found' })
    return res.status(200).send(list)
  },
  create: async (req, res) => {
    const [err, list] = await to(List.findByPk(req.body.id))
    if (err) return res.status(500).send(err)
    // TODO возравщать ошибку
    if (list) return res.status(200).send(list)
    const [errCreate, newList] = await to(List.create({
      id: req.body.id,
      title: req.body.title || '',
    }))
    if (errCreate)  return res.status(500).send(errCreate) 
    return res.status(201).send({ list: newList })
  },
  patch: async (req, res) => {
    const [err, list] = await to(List.findByPk(req.params.id))
    if (err) return res.status(500).send(err)
    if (!list) return res.status(404).send({ message: 'List Not Found' })
    const [errPatch] = await to(list.update({
      title: req.body.title,
    }))
    if (errPatch) return res.status(400).send(err)
    return res.status(202).send(list)
  }
}