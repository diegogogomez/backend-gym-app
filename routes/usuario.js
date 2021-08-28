const { Router } = require('express');

const router = Router();

router.get('/verificar', (req, res) => {
    console.log('recibido v2');
    res.json('Recibido');
});


module.exports = router;