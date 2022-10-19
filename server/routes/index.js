let express = require('express')
let router = express.Router()

const { ListController, AuthController } = require('../controllers');
const TodoController = require('../controllers/TodoController');
const { authMiddleware, validate } = require('../middleware');

router.post("/api/auth/signup", AuthController.signup);
router.post("/api/auth/signin", AuthController.signin);

router.get('/lists/:id', verifyToken, validate, ListController.getById)

router.post(
  '/lists',
  // verifyToken,
  // validate,
  ListController.create
)
router.patch(
  '/lists/:id',
  verifyToken,
  validate,
  ListController.patch
)


router.post(
  '/todos',
  // verifyToken,
  // validate,
  TodoController.create
);

router.post(
  '/todos/:todoId/lists/:listId/attach',
  // verifyToken,
  // validate,
  TodoController.attachToList
)

module.exports = router