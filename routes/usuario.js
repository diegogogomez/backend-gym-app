const { Router } = require('express');

const router = Router();

router.get('/verificar', (req, res) => {
    console.log('recibido v2');
    res.json('Recibido v2');
});


module.exports = router;