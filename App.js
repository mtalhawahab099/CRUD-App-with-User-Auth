import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Signup, Welcome } from './screens'
import HomePage from './screens/HomePage'
import AddWaste from './screens/AddWaste'
import WasteList from './components/WasteList'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Welcome'>
				<Stack.Screen
					name='Welcome'
					component={Welcome}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Signup'
					component={Signup}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='HomePage'
					component={HomePage}
					options={{
						title: 'HomePage',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='AddWaste'
					component={AddWaste}
					options={{
						title: 'Create Waste Record',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='WasteList'
					component={WasteList}
					options={{
						title: 'Show Waste Record',
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
