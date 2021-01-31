import React, { useState } from "react"
import { TextInput, Button, StyleSheet, View, Alert } from "react-native"

export default function TodoFrom({ addTodo }) {
	const [text, setText] = useState("")
	const handleChange = (value) => {
		setText(value)
	}
	const handlePress = () => {
		if (text.length > 3) {
			addTodo(text)
		} else {
			Alert.alert("Oops!", "Text must be greater than 3 chars", [
				{
					text: "Understood",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				}
			])
		}
	}
	return (
		<View style={styles.mainContainer}>
			<TextInput style={styles.input} onChangeText={handleChange} />
			<View style={styles.buttonStyle}>
				<Button title="Add Todo" onPress={handlePress} color="coral" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		margin: 16
	},
	input: {
		paddingHorizontal: 5,
		paddingVertical: 16,
		borderBottomColor: "#bbb",
		borderBottomWidth: 1
	},
	buttonStyle: {
		marginVertical: 16
	}
})
