const router = require('express').Router();

const furnitureService = require('../services/furnitureService');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async(req, res) => {
    let furniture = await furnitureService.getAll();
    res.json(furniture);
});
router.post('/', isAuth, async(req, res) => {
    await furnitureService.create({...req.body, ownerId: req.user._id });

    res.json({ ok: true });
});

router.get('/:furnitureId', async(req, res) => {
    let furniture = await furnitureService.getOne(req.params.furnitureId);

    res.json(furniture);
});
router.put('/:furnitureId', async(req, res) => {
    await furnitureService.update(req.params.furnitureId, req.body);

    res.json({ ok: true });
});
module.exports = router;