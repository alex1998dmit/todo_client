let express = require('express')
let router = express.Router()

const { ListController } = require('../controllers')
// const { validate, useEmailValidation } = require('../middleware/validate')

router.get('/lists/:id', ListController.getById)
router.post(
  '/lists',
  ListController.create
)
router.patch(
  '/lists/:id',
  ListController.patch
)

module.exports = router