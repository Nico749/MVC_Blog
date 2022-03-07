const router = require('express').Router();
const userRoutes = require('./userRoutes');
const notesRoutes = require('./noteRoutes');

router.use('/users', userRoutes);
router.use('/notes', notesRoutes);

module.exports = router;
