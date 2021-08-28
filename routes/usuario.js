const { Router } = require('express');

const router = Router();

router.get('/verificar', (req, res) => {
    console.log('recibido');
    res.json('Recibido');
});


module.exports = router;