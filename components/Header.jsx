import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>Todo App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "coral"
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#fff"
	}
})

export default Header
