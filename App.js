import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function FormScreen({ navigation }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    isbn: '',
    published_date: '',
    genre: '',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Book Record Form</Text>
      <TextInput style={styles.input} placeholder="Title" value={form.title} onChangeText={text => setForm({ ...form, title: text })} />
      <TextInput style={styles.input} placeholder="Author" value={form.author} onChangeText={text => setForm({ ...form, author: text })} />
      <TextInput style={styles.input} placeholder="ISBN" value={form.isbn} onChangeText={text => setForm({ ...form, isbn: text })} keyboardType="numeric" maxLength={13} />
      <TextInput style={styles.input} placeholder="Published Date (YYYY-MM-DD)" value={form.published_date} onChangeText={text => setForm({ ...form, published_date: text })} />
      <TextInput style={styles.input} placeholder="Genre" value={form.genre} onChangeText={text => setForm({ ...form, genre: text })} />
      <Button title="Submit" onPress={() => navigation.navigate('Confirmation', { ...form })} />
    </ScrollView>
  );
}

function ConfirmationScreen({ route, navigation }) {
  const { title, author, isbn, published_date, genre } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Confirmation</Text>
      <Text>Title: {title}</Text>
      <Text>Author: {author}</Text>
      <Text>ISBN: {isbn}</Text>
      <Text>Published Date: {published_date}</Text>
      <Text>Genre: {genre}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} style={{ marginTop: 20 }} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Book Form">
        <Stack.Screen name="Book Form" component={FormScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 15,
  },
});