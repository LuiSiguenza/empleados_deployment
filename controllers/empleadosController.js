const Empleados = require('../models/Empleados');


exports.nuevoEmpleado = async (req, res, next) => {
    const empleado = new Empleados(req.body);

    try {
        await empleado.save();
        res.json({ mensaje : 'Se agrego un nuevo empleado' });
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.mostrarEmpleados = async (req, res, next) => {
    try {
        const empleados = await Empleados.find({});
        res.json(empleados);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarEmpleado = async (req, res, next) => {
    const empleado = await Empleados.findById(req.params.idEmpleado);

    if(!empleado) {
        res.json({mensaje : 'Ese empleado no existe'});
        next()
    }

    res.json(empleado);
}


exports.actualizarEmpleado = async (req, res, next) => {
    try {
        const empleado = await Empleados.findOneAndUpdate({ _id : req.params.idEmpleado }, req.body, {
            new : true
        });
        res.json(empleado);
    } catch (error) {
        res.send(error);
        next();
    }
}


exports.eliminarEmpleado = async (req, res, next) => {
    try {
        await Empleados.findOneAndDelete({_id : req.params.idEmpleado});
        res.json({mensaje : 'El empleado se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}