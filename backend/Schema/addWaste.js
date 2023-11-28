import mongoose from 'mongoose'
// import validator from 'validator'
// Creating a schema for the waste model
const wasteSchema = new mongoose.Schema(
	{
		ID: Number,
		wasteType: String,
		weight: Number,
		location: String,
		collectorName: String,
		cost: Number,
	},
	{ timestamps: true }
)

// Create a model for the waste data
const Waste = mongoose.model('Waste', wasteSchema)
export default Waste
