import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import Button from '../components/Button'
import { StatusBar } from 'expo-status-bar'
import { Api } from '../api'

// import HomePage from './HomePage'

const Signup = ({ navigation }) => {
	// const apiURL = 'http://192.168.0.104:5000/registration'
	const apiURL = `http://${Api}:5000/registration`
	const [isPasswordShown, setIsPasswordShown] = useState(true)
	const [isChecked, setIsChecked] = useState(false)
	const [userData, setUserData] = useState([
		{
			email: '',
			number: '',
			password: '',
		},
	])
	const handleData = (field, value) => {
		setUserData({ ...userData, [field]: value })
	}
	// const handleSubmit = () => {
	// 	console.log(userData)
	// 	setUserData([
	// 		{
	// 			email: '',
	// 			number: '',
	// 			password: '',
	// 		},
	// 	])
	// }

	const handleSubmit = async () => {
		console.log(userData)
		try {
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})

			console.log('Response status:', response.status)

			if (response.ok) {
				const result = await response.json()
				console.log('Registration successful:', result)
				// navigate to the next screen or display a success message.
				navigation.navigate('HomePage')
			} else {
				console.error('Failed to register user')
				console.log(await response.text()) // Log the response text for further details.
				Alert.alert(
					'Registration Failed',
					'Please check your data and try again.'
				)
			}
		} catch (error) {
			console.error('Error while registering user:', error)
			Alert.alert('Network Error', 'Please check your network connection.')
		}
		setUserData([
			{
				email: '',
				number: '',
				password: '',
			},
		])
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<StatusBar style='auto' />
			<View style={{ flex: 1, marginHorizontal: 22 }}>
				<View style={{ marginVertical: 22 }}>
					<Text
						style={{
							fontSize: 22,
							fontWeight: 'bold',
							marginVertical: 12,
							color: COLORS.black,
						}}>
						Create Account
					</Text>

					<Text
						style={{
							fontSize: 16,
							color: COLORS.black,
						}}>
						Connect with your friend today!
					</Text>
				</View>

				<View style={{ marginBottom: 12 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 400,
							marginVertical: 8,
						}}>
						Email address
					</Text>

					<View
						style={{
							width: '100%',
							height: 48,
							borderColor: COLORS.black,
							borderWidth: 1,
							borderRadius: 8,
							alignItems: 'center',
							justifyContent: 'center',
							paddingLeft: 22,
						}}>
						<TextInput
							placeholder='Enter your email address'
							placeholderTextColor={COLORS.black}
							keyboardType='email-address'
							value={userData.email}
							onChangeText={(text) => handleData('email', text)}
							style={{
								width: '100%',
							}}
						/>
					</View>
				</View>

				<View style={{ marginBottom: 12 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 400,
							marginVertical: 8,
						}}>
						Mobile Number
					</Text>

					<View
						style={{
							width: '100%',
							height: 48,
							borderColor: COLORS.black,
							borderWidth: 1,
							borderRadius: 8,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingLeft: 22,
						}}>
						<TextInput
							placeholder='+92'
							placeholderTextColor={COLORS.black}
							keyboardType='numeric'
							style={{
								width: '12%',
								borderRightWidth: 1,
								borderLeftColor: COLORS.grey,
								height: '100%',
							}}
						/>

						<TextInput
							placeholder='Enter your phone number'
							placeholderTextColor={COLORS.black}
							keyboardType='numeric'
							value={userData.number}
							onChangeText={(text) => handleData('number', text)}
							style={{
								width: '80%',
							}}
						/>
					</View>
				</View>

				<View style={{ marginBottom: 12 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 400,
							marginVertical: 8,
						}}>
						Password
					</Text>

					<View
						style={{
							width: '100%',
							height: 48,
							borderColor: COLORS.black,
							borderWidth: 1,
							borderRadius: 8,
							alignItems: 'center',
							justifyContent: 'center',
							paddingLeft: 22,
						}}>
						<TextInput
							placeholder='Enter your password'
							placeholderTextColor={COLORS.black}
							secureTextEntry={isPasswordShown}
							autoCorrect={false}
							value={userData.password}
							onChangeText={(text) => handleData('password', text)}
							style={{
								width: '100%',
							}}
						/>

						<TouchableOpacity
							onPress={() => setIsPasswordShown(!isPasswordShown)}
							style={{
								position: 'absolute',
								right: 12,
							}}>
							{isPasswordShown == true ? (
								<Ionicons name='eye-off' size={24} color={COLORS.black} />
							) : (
								<Ionicons name='eye' size={24} color={COLORS.black} />
							)}
						</TouchableOpacity>
					</View>
				</View>

				<Button
					title='Sign Up'
					filled
					onPress={() => {
						handleSubmit()
						// navigation.navigate('HomePage')
					}}
					style={{
						marginTop: 18,
						marginBottom: 4,
					}}
				/>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: 22,
					}}>
					<Text style={{ fontSize: 16, color: COLORS.black }}>
						Already have an account
					</Text>
					<Pressable onPress={() => navigation.navigate('Login')}>
						<Text
							style={{
								fontSize: 16,
								color: COLORS.primary,
								fontWeight: 'bold',
								marginLeft: 6,
							}}>
							Login
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Signup
