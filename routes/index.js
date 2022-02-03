const express = require('express');
const router = express.Router();

function configRoute(dbConnectionPromise) {
  router.use (function (req,res,next) {
    console.log('/' + req.method);
    next();
  });

  router.get('/',function(req,res){
    res.send('Data from db:');
  });

  return router;
}

module.exports = configRoute;
