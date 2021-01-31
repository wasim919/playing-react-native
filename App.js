import React from "react"
import { View, Text, StyleSheet } from "react-native"

import Header from "./components/Header"

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
