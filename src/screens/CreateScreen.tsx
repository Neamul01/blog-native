import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}: {navigation: any}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        onPress={() => {
          addBlogPost(title, content, () => navigation.navigate('Home'));
        }}
        title="Add Blog Post"
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 13,
    borderColor: 'black',
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
