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

const Login = ({ navigation }) => {
	// const apiURL = 'http://192.168.0.104:5000/login'
	const apiURL = 'http://192.168.43.171:5000/login'
	const [isPasswordShown, setIsPasswordShown] = useState(true)
	const [isChecked, setIsChecked] = useState(false)
	const [userData, setUserData] = useState([
		{
			email: '',
			password: '',
		},
	])

	const handleData = (field, value) => {
		setUserData({ ...userData, [field]: value })
	}
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
				console.log('Login successful:', result)
				// navigate to the next screen or display a success message.
				navigation.navigate('HomePage')
			} else {
				console.error('Failed to Login user')
				console.log(await response.text()) // Log the response text for further details.
				Alert.alert('Login Failed', 'Please check your data and try again.')
			}
		} catch (error) {
			console.error('Error while logging user:', error)
			Alert.alert('Network Error', 'Please check your network connection.')
		}
		setUserData([
			{
				email: '',
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
						Hi Welcome Back ! 👋
					</Text>

					<Text
						style={{
							fontSize: 16,
							color: COLORS.black,
						}}>
						Hello again you have been missed!
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

				<View
					style={{
						flexDirection: 'row',
						marginVertical: 6,
					}}>
					<Checkbox
						style={{ marginRight: 8 }}
						value={isChecked}
						onValueChange={setIsChecked}
						color={isChecked ? COLORS.primary : undefined}
					/>

					<Text>Remenber Me</Text>
				</View>

				<Button
					title='Login'
					filled
					onPress={() => {
						handleSubmit()
					}}
					style={{
						marginTop: 18,
						marginBottom: 4,
					}}
				/>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 20,
					}}>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: COLORS.grey,
							marginHorizontal: 10,
						}}
					/>
					<Text style={{ fontSize: 14 }}>Or Login with</Text>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: COLORS.grey,
							marginHorizontal: 10,
						}}
					/>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
					}}>
					<TouchableOpacity
						onPress={() => console.log('Pressed')}
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'row',
							height: 52,
							borderWidth: 1,
							borderColor: COLORS.grey,
							marginRight: 4,
							borderRadius: 10,
						}}>
						<Image
							source={require('../assets/facebook.png')}
							style={{
								height: 36,
								width: 36,
								marginRight: 8,
							}}
							resizeMode='contain'
						/>

						<Text>Facebook</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log('Pressed')}
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'row',
							height: 52,
							borderWidth: 1,
							borderColor: COLORS.grey,
							marginRight: 4,
							borderRadius: 10,
						}}>
						<Image
							source={require('../assets/google.png')}
							style={{
								height: 36,
								width: 36,
								marginRight: 8,
							}}
							resizeMode='contain'
						/>

						<Text>Google</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: 22,
					}}>
					<Text style={{ fontSize: 16, color: COLORS.black }}>
						Don't have an account ?{' '}
					</Text>
					<Pressable onPress={() => navigation.navigate('Signup')}>
						<Text
							style={{
								fontSize: 16,
								color: COLORS.primary,
								fontWeight: 'bold',
								marginLeft: 6,
							}}>
							Register
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Login
