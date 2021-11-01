const router = require('express').Router();

const furnitureService = require('../services/furnitureService');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async(req, res, next) => {
    try {

        if (req.query.where) {

            let furniture = await furnitureService.getOwn(req.user._id);
            res.json(furniture);

        } else {
            let furniture = await furnitureService.getAll();
            res.json(furniture);
        }
    } catch (error) {
        next(error);
    }
});
router.post('/', isAuth, async(req, res, next) => {
    try {

        await furnitureService.create({...req.body, _ownerId: req.user._id });

        res.json({ ok: true });
    } catch (error) {
        next(error);
    }
});

router.get('/:furnitureId', async(req, res, next) => {
    try {

        let furniture = await furnitureService.getOne(req.params.furnitureId);

        res.json(furniture);
    } catch (error) {
        next(error);
    }
});

router.put('/:furnitureId', async(req, res, next) => {
    try {

        await furnitureService.update(req.params.furnitureId, req.body);

        res.json({ ok: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/:furnitureId', async(req, res, next) => {
    try {

        await furnitureService.delete(req.params.furnitureId);

        res.json({ ok: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;