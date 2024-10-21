import React, { useState } from 'react'
import { Button, Icon } from '@rneui/themed'
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'
import { Api } from '../api'

const AddWaste = ({ navigation }) => {
	const [ID, setID] = useState('')
	const [wasteType, setWasteType] = useState('')
	const [weight, setWeight] = useState('')
	const [location, setLocation] = useState('')
	const [collectorName, setCollectorName] = useState('')
	const [cost, setCost] = useState('')

	const createWasteRecord = async () => {
		// const apiURL = 'http://192.168.43.171:5000/addWaste'
		const apiURL = `http://${Api}:5000/addWaste`
		try {
			const wasteRecord = {
				ID,
				wasteType,
				weight,
				location,
				collectorName,
				cost,
			}
			console.log(wasteRecord)

			const response = await fetch(apiURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(wasteRecord),
			})

			if (response.status === 201) {
				console.log('The waste record was created successfully')
				// The waste record was created successfully
				navigation.goBack()
			} else {
				// There was an error creating the waste record
				alert('Error creating waste record')
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.header}>Create Waste Record</Text>

				<TextInput
					style={styles.input}
					placeholder='ID'
					keyboardType='numeric'
					onChangeText={(text) => setID(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder='Waste Type'
					onChangeText={(text) => setWasteType(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder='Weight'
					keyboardType='numeric'
					onChangeText={(text) => setWeight(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder='Location'
					onChangeText={(text) => setLocation(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder='Collector Name'
					onChangeText={(text) => setCollectorName(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder='Cost'
					keyboardType='numeric'
					onChangeText={(text) => setCost(text)}
				/>

				<Button
					title='Create Waste Record'
					onPress={() => {
						createWasteRecord()
					}}
					icon={{
						name: 'plus',
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
						borderRadius: 10,
						height: 50,
						width: 320,
					}}
					containerStyle={{
						width: 350,
						marginHorizontal: 9,
						marginVertical: 10,
					}}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		marginTop: 50,
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		margin: 10,
		borderWidth: 1,
		padding: 10,
	},
})

export default AddWaste
