import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TodoItem({ item, handleItemDelete }) {
	return (
		<TouchableOpacity onPress={() => handleItemDelete(item.key)}>
			<View style={styles.items}>
				<MaterialIcons name="delete" size={24} color="#bbb" />
				<Text style={styles.itemText}>{item.value}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	items: {
		flexDirection: "row",
		marginTop: 16,
		padding: 16,
		borderWidth: 1,
		borderRadius: 10,
		borderStyle: "dashed",
		borderColor: "#bbb"
	},
	itemText: {
		marginLeft: 16,
		fontSize: 16
	}
})
