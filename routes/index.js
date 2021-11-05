const express = require('express');
const router = express.Router();


const empleadosController = require('../controllers/empleadosController');
const usuariosController = require('../controllers/usuariosController');

// middle para proteger las rutas
const auth = require('../middleware/auth');

module.exports = function() {
    
   
    //Empleados

     // Agrega nuevos empleados via POST
     router.post('/empleados',
     auth,
     empleadosController.nuevoEmpleado 
 );

 // Obtener todos los empleados
 router.get('/empleados', 
    auth,
    empleadosController.mostrarEmpleados
 );

 // Muestra un empleado en especifico (ID)
 router.get('/empleados/:idEmpleado', 
    auth,
    empleadosController.mostrarEmpleado );

 // Actualizar Empleado
 router.put('/empleados/:idEmpleado',
    auth, 
     empleadosController.actualizarEmpleado);

 // Eliminar Empleado
 router.delete('/empleados/:idEmpleado',
    auth, 
     empleadosController.eliminarEmpleado);


    // Usuarios
    router.post('/crear-cuenta', 
        auth,
        usuariosController.registrarUsuario
    );

    router.post('/iniciar-sesion',
        usuariosController.autenticarUsuario
    );

    return router;
}
