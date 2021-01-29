const router = require('express').Router();

const apiUserRouter = require('./api/usersApi')
const colorRouter = require('./api/colorApi')
const materialRouter = require('./api/materialApi')
const capacityRouter = require('./api/capacityApi')
const sizeRouter = require('./api/sizeApi')
const typeRouter = require('./api/typeApi')
const modelRouter =require('./api/modelApi')
const incomeRouter = require('./api/incomeApi')
const stockRouter = require('./api/stockApi')
const expenseRouter = require('./api/expenseApi')
const offerRouter = require('./api/offerApi')

router.use('/user', apiUserRouter)
router.use('/color', colorRouter)
router.use('/material', materialRouter)
router.use('/capacity', capacityRouter)
router.use('/size', sizeRouter)
router.use('/type', typeRouter)
router.use('/model', modelRouter)
router.use('/income', incomeRouter)
router.use('/stock', stockRouter)
router.use('/expense', expenseRouter)
router.use('/offer', offerRouter)

module.exports = router;