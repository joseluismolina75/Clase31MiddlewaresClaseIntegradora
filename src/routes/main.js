const express = require('express');     /*El código const express = require('express') significa que estamos utilizando el módulo express en nuestra
                                        aplicación de Node.js. Express es un marco de aplicación web de Node.js que proporciona una serie de funciones
                                        y utilidades para crear aplicaciones web.
                                        Al utilizar require('express'), estamos importando el módulo express en nuestro archivo de código para poder 
                                        utilizar sus funciones y características en nuestra aplicación.*/

const route = express.Router();           /*En JavaScript, cuando se utiliza Express, se puede crear un enrutador utilizando la función express.Router().
                                        Esto permite organizar las rutas de manera modular y reutilizable en una aplicación Express.
                                        Al utilizar const route = express.Router(), se crea un nuevo enrutador que se puede utilizar para definir y manejar 
                                        rutas específicas en la aplicación.*/

route.get('/', (req, res)=>{      
    res.send('Hola, Es la Raíz')
})                                      /*Se utiliza para definir una ruta en un servidor utilizando Express. En este caso, cuando el servidor recibe
                                        una solicitud GET a la ruta raíz ('/'), se ejecutará la función de callback que enviará una respuesta utilizando 
                                        res.send().
                                        El método router.get() toma dos parámetros: la ruta a la que se está respondiendo y la función que se ejecutará 
                                        cuando se reciba la solicitud.*/
route.get('/Usuario', (req, res)=>{      
    res.send('Hola soy Usuario')
})   

route.get('/producto', (req, res)=>{      
    res.send('Hola soy Producto')
})

module.exports = route