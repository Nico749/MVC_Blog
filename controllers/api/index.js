const router = require('express').Router();
const userRoutes = require('./userRoute');
const notesRoutes = require('./noteRoute');

router.use('/users', userRoutes);
router.use('/notes', notesRoutes);

module.exports = router;
