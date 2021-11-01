const router = require('express').Router();
const furnitureService = require('../services/furnitureService');

router.get('/', async(req, res) => {
    let furniture = await furnitureService.getAll();
    res.json(furniture);
});
router.post('/', async(req, res) => {
    await furnitureService.create(req.body);

    res.json({ ok: true });
});
router.get('/:furnitureId', async(req, res) => {
    let furniture = await furnitureService.getOne(req.params.furnitureId);

    res.json(furniture);
});
module.exports = router;