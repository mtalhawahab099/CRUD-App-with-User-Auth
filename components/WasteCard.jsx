import { React, useState } from 'react'
import axios from 'axios'
import { Button, Icon } from '@rneui/themed'
import { View, Text, StyleSheet } from 'react-native'

const WasteCard = ({ navigation, waste, key1 }) => {
	const [data, setData] = useState([])
	const handleDelete = async (id) => {
		// await axios.delete(`http://192.168.0.104:5000/delete/:${id}`)
		let message = await axios.delete(`http://192.168.43.171:5000/delete/${id}`)
		console.log(message.data.message)
		navigation.goBack()
		const newData = data.filter((item) => item._id !== id)
		setData(newData)
	}

	return (
		<View style={styles.card}>
			<View style={styles.content}>
				<Text style={styles.title}>ID: {waste.ID}</Text>
				<Text style={styles.title}>Waste_type: {waste.wasteType}</Text>
				<Text style={styles.subtitle}>Weight: {waste.weight} kg</Text>
				<Text style={styles.subtitle}>Location: {waste.location}</Text>
				<Text style={styles.subtitle}>
					Collector Name: {waste.collectorName}
				</Text>
				<Text style={styles.subtitle}>Cost: ${waste.cost}</Text>
			</View>
			<Button
				title='Delete data'
				onPress={() => {
					handleDelete(key1)
				}}
				icon={{
					name: 'minus',
					type: 'font-awesome',
					size: 25,
					color: 'white',
				}}
				iconContainerStyle={{
					marginRight: 10,
				}}
				titleStyle={{
					fontWeight: '700',
					fontSize: 21,
				}}
				buttonStyle={{
					backgroundColor: 'rgba(127, 220, 103, 1)',
					borderColor: 'transparent',
					borderWidth: 0,
					borderRadius: 30,
					height: 50,
					width: 250,
				}}
				containerStyle={{
					width: 300,
					marginHorizontal: 26,
					marginVertical: 10,
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: '96%',
		height: 200,
		borderRadius: 10,
		borderColor: '#228b22',
		borderWidth: 3,
		backgroundColor: '#fff',
		padding: 10,
		marginLeft: 7,
		marginBottom: 10,
	},
	image: {
		width: '100%',
		height: 100,
		borderRadius: 10,
	},
	content: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 16,
	},
})

export default WasteCard
