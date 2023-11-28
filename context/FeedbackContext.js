import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [apiForgetWaste, setApiForGetWaste] = useState(
		'http://192.168.0.104:5000/getWaste'
	)
	// console.log(apiForgetWaste)
	return (
		<FeedbackContext.Provider
			value={{
				apiForgetWaste,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
