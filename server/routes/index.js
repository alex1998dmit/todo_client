let express = require('express')
let router = express.Router()

const { ListController, AuthController } = require('../controllers');
const { authMiddleware, validate } = require('../middleware');

router.post("/api/auth/signup", AuthController.signup);
router.post("/api/auth/signin", AuthController.signin);

router.get('/lists/:id', verifyToken, validate, ListController.getById)

router.post(
  '/lists',
  verifyToken,
  validate,
  ListController.create
)
router.patch(
  '/lists/:id',
  verifyToken,
  validate,
  ListController.patch
)

module.exports = router