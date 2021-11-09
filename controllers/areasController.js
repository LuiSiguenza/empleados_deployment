const Areas = require('../models/Areas');

exports.mostrarAreas = async (req, res, next) => {
    try {
        const areas = await Areas.find();
        res.json(areas);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarSubarea = async (req, res, next) => {
    const area = await Areas.find({"area" : req.params.area},{"subarea":1});

    if(!area) {
        res.json({mensaje : 'Esa area no existe'});
        next()
    }
    res.json(area);
}

exports.nuevaArea = async (req, res, next) => {
    const area = new Areas(req.body);

    try { 
        await area.save();
        res.json({ mensaje : 'Se agrego una nueva area' });
    } catch (error) {
        res.send(error);
        next();
    }
}

