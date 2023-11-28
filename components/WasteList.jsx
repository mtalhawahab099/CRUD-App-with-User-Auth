import { React, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios from 'axios'
import WasteCard from './WasteCard'

const WasteList = ({ navigation }) => {
	const [data, setData] = useState([])
	// const apiURL = 'http://192.168.0.104:5000/getWaste'
	const apiURL = 'http://192.168.43.171:5000/getWaste'
	useEffect(() => {
		// Make a request to the server endpoint
		axios
			.get(apiURL)
			.then((response) => {
				// Set the users state to the data returned by the server
				// console.log(response.data)
				setData(response.data)
			})
			.catch((error) => {
				// Handle the error
				console.error(error)
			})
	}, [])
	// Render the component with the data state
	return (
		<View style={styles.container}>
			{data.map((data1) => (
				<WasteCard
					key={data1._id}
					navigation={navigation}
					waste={data1}
					key1={data1._id}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8ff',
		marginTop: 40,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
})
export default WasteList
