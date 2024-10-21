import { React, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios from 'axios'
import WasteCard from './WasteCard'
import { Api } from '../api'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const WasteList = ({ navigation }) => {
	const [data, setData] = useState([])
	// const apiURL = 'http://192.168.0.104:5000/getWaste'
	const apiURL = `http://${Api}:5000/getWaste`
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
		<GestureHandlerRootView>
		<ScrollView style={styles.container}>
			{data.map((data1) => (
				<WasteCard
					key={data1._id}
					navigation={navigation}
					waste={data1}
					key1={data1._id}
				/>
			))}
		</ScrollView>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8ff',
		marginTop: 40,
		// alignItems: 'flex-start',
		// justifyContent: 'flex-start',
	},
})
export default WasteList
