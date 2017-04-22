const express = require('express')

module.exports = function(server){

    //api router
    const router = express.Router()
    server.use('/api', router)



    const BillingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}
