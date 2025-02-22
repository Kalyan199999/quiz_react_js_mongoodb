const express = require('express');
const userRoute = express()

const {getQuation, postQuation} = require('../controlers/controler');

userRoute.post('/', postQuation)

userRoute.get('/', getQuation)

module.exports = userRoute;
