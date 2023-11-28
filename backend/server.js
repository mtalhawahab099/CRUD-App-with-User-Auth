import express from 'express'
import User from './Schema/userSchema.js'
import Connection from './conn.js'
import cors from 'cors'
import bcryptFunctions from './bcryption/hashpassword.js'
import Waste from './Schema/addWaste.js'
// const { check_password, hash_password } = bcryptFunctions

// const corsOptions = {
// 	origin: 'exp://1`92.168.43.171:19000', // Replace with your frontend's URL
// 	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// 	credentials: true, // Include cookies and authentication headers
// }
const app = express()
app.use(cors())
// app.options('*', cors(corsOptions))

app.use(express.json())
Connection()

app.post('/registration', async (req, res) => {
	console.log(req.body)
	try {
		const { email, number, password } = req.body
		if (!email || !number || !password) {
			return res.status(400).send({
				success: false,
				message: 'Please fill in all required fields',
			})
		}
		console.log('Data is Coming')
		let existingUser = await User.findOne({ email })

		if (existingUser) {
			return res.status(200).send({
				success: true,
				message: 'Email already exists',
			})
		}

		// const hashedPassword = await hash_password(password)
		let user = await new User({
			email,
			number,
			// password: hashedPassword,
			password,
		}).save()

		res.status(200).send({
			success: true,
			message: 'Registered successfully',
		})
	} catch (error) {
		console.log(error)
		res.status(500).send({
			success: false,
			message: 'Error in Registration',
			error,
		})
	}
})

// Login code
app.post('/login', async (req, res) => {
	const { email, password } = req.body

	// Find the user in the database
	const user = await User.findOne({ email })

	// If the user is not found, return an error message
	if (!user) {
		return res.status(404).json({ message: 'User not found' })
	}

	// If the password is incorrect, return an error message
	// const match = await check_password(password, user.password)
	if (password !== user.password) {
		return res.status(401).json({ message: 'Incorrect password' })
	}

	// Return a success message
	return res.status(200).json({ message: 'Login successful' })
})

// Define a route to create a new waste record
app.post('/addWaste', async (req, res) => {
	try {
		const { ID, wasteType, weight, location, collectorName, cost } = req.body

		const waste = new Waste({
			ID,
			wasteType,
			weight,
			location,
			collectorName,
			cost,
		})
		console.log('Data is Coming')
		await waste.save()
		res.status(201).send({
			success: true,
			message: 'Record registered successfully',
		})
		// const hashedPassword = await hash_password(password)
	} catch (error) {
		console.log(error)
		res.status(500).send({
			success: false,
			message: 'Error in Registration',
			error,
		})
	}
})

// Define a route to get all waste records
app.get('/getWaste', async (req, res) => {
	const wastes = await Waste.find()

	res.json(wastes)
	console.log('data is fetched from the database.')
})

// Deleting data
app.delete('/delete/:id', async (req, res) => {
	const id = req.params.id
	// console.log(id)
	await Waste.deleteOne({ _id: id })

	// res.send('Data deleted successfully')
	res.json({ message: 'Data deleted successfully' })
})

//fetching users data from database
app.get('/users', async (req, res) => {
	try {
		let users = await User.find()
		res.send(users)
	} catch (error) {
		console.log(error)
		res.status(500).send({
			success: false,
			message: 'Error in fetching users',
			error,
		})
	}
})

app.listen(5000, () => {
	console.log('Server is Started')
})
