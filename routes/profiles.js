const router = require('express').Router()
const profilesCtrl = require('../controllers/profiles.js')

router.post('/', profilesCtrl.create)
router.post('/:id/listings', profilesCtrl.addListing)
router.post('/:profileId/listings/:listingId', profilesCtrl.associateListing)
router.get('/', profilesCtrl.index)
router.put('/:id', profilesCtrl.update)
router.delete('/:id', profilesCtrl.delete)

module.exports = router