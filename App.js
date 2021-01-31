import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm"

export default function App() {
	const [todos, setTodos] = useState([
		{ value: "hello there", key: "1" },
		{ value: "2nd one", key: "2" },
		{ value: "what up", key: "3" }
	])
	const handleItemDelete = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key !== key)
		})
	}
	const addTodo = (text) => {
		setTodos((prevTodos) => {
			return [...prevTodos, { value: text, key: JSON.stringify(prevTodos.length) + 1 }]
		})
	}
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.todoForm}>
				<TodoForm addTodo={addTodo} />
			</View>
			<View style={styles.todoItems}>
				<FlatList
					data={todos}
					keyExtractor={(item) => item.key}
					renderItem={({ item }) => <TodoItem item={item} handleItemDelete={handleItemDelete} />}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	todoItems: {
		flex: 1,
		marginHorizontal: 16
	},
	todoForm: {
		marginVertical: 16,
		marginHorizontal: 16
	}
})
