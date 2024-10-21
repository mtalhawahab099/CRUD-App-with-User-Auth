import React, { useState } from 'react'
import { Button, Icon } from '@rneui/themed'
import {
	View,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'

const HomePage = ({ navigation }) => {
	let addWaste = () => {
		navigation.navigate('AddWaste')
	}

	return (
		<KeyboardAvoidingView
			style={{
				flex: 1,
			}}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<ImageBackground
				source={require('../assets/home-background.png')}
				style={styles.container}
				imageStyle={{ width: 274, height: 368 }}>
				<View style={styles.main}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}>
						<Image
							source={require('../assets/log.jpg')}
							style={{ width: 100, height: 100, borderRadius: 100 }}
						/>
						<Text
							style={{
								color: '#006400',
								fontSize: 38,
								fontWeight: 600,
								marginTop: 25,
							}}>
							Collection
						</Text>
					</View>
					<View>
						<Text style={styles.title}>Your waste collection marketplace</Text>
						<Text style={styles.description}>
							We help people to get info about waste collection
						</Text>
					</View>
				</View>

				<View>
					<Button
						title='Add Waste Info'
						onPress={() => {
							addWaste()
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
					<Button
						title='Show Waste Info'
						onPress={() => {
							navigation.navigate('WasteList')
						}}
						icon={{
							name: 'eye',
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
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
	},

	main: {
		flex: 1,
		justifyContent: 'center',
	},

	title: {
		color: '#322153',
		fontSize: 32,
		// fontFamily: 'Ubuntu_700Bold',
		maxWidth: 260,
		marginTop: 64,
	},

	description: {
		color: '#6C6C80',
		fontSize: 16,
		marginTop: 16,
		// fontFamily: 'Roboto_400Regular',
		maxWidth: 260,
		lineHeight: 24,
	},

	footer: {},

	select: {},

	input: {
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 10,
		marginBottom: 8,
		paddingHorizontal: 24,
		fontSize: 16,
	},

	button: {
		backgroundColor: '#34CB79',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 8,
	},

	buttonIcon: {
		height: 60,
		width: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		// fontFamily: 'Roboto_500Medium',
		fontSize: 16,
	},
})

export default HomePage
