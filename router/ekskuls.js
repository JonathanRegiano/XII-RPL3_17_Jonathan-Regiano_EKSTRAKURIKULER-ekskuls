const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/ekskul')
  
  router.get('/ekskuls', usercontroller.index, )
  router.post('/ekskuls/create', usercontroller.create) 
  router.get('/ekskuls', usercontroller.show);
  router.get('/ekskulss/:id', usercontroller.showid);
  router.get('/ekskuls/:id',usercontroller.update)
  router.delete('/ekskuls/:id', usercontroller.delete)
    
 

    module.exports = router
  