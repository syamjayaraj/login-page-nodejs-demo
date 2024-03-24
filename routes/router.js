const express = require('express');
const { post_login } = require('../controllers/authController');
const router = express.Router()



router.get('/',(req,res)=> res.render('login'))
router.post('/login',post_login)
router.get('/home',(req,res)=> res.render('home'))


module.exports = router 