import mongoose from 'mongoose'
import validator from 'validator'

const schema = mongoose.Schema(
	{
		email: {
			type: String,
			// required: true,
			validate: [validator.isEmail, 'Invalid email address'],
			lowercase: true,
		},
		number: {
			type: String,
			// required: true
		},
		password: {
			type: String,
			// required: true,
			minlength: 2,
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('stdetail', schema)
export default User
