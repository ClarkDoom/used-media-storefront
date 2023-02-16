const { Profile, Listing, Order } = require("../models")

const create = async(req,res) => {
  try {
    const profile = await Profile.create(req.body)
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

//! why is Order showing up under Listing?
const index = async(req,res) => {
  try {
    const profiles = await Profile.findAll(
      { 
        include: [
          { all: true, nested: true },
        ]
      }
    )
    res.status(200).json(profiles)
  } catch (error) {
    res.status(500).json(error)
  }
}
const update = async(req,res) => {
  try {
    const profile = await Profile.findByPk(req.params.id)
    profile.set(req.body)
    await profile.save()
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}
// const deleteProfile = async(req,res) => {
//   try {
//     const numberOfRowsRemoved = await Profile.destroy(
//       { where: {id: req.params.id } }
//     )
//     res.status(200).json(numberOfRowsRemoved)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// refactor
const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id)
    await profile.destroy()
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}
const addListing = async (req, res) => {
  try {
    req.body.profileId = req.params.id
    const listing = await Listing.create(req.body)
    res.status(200).json(listing)

  } catch (error) {
    res.status(500).json(error)
  }
}
const associateListing = async (req, res) => {
  try {
    const { profileId, listingId } = req.params
    const association = await Order.create({
      profileId: profileId, listingId: listingId
    })
    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteProfile,
  addListing,
  associateListing
}