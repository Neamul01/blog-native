import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

type Props = {
  onSubmit: any;
  initialValues?: {
    title?: '' | string;
    content?: '' | string;
  };
};
const BlogPostForm = ({onSubmit, initialValues}: Props) => {
  const [title, setTitle] = useState(initialValues?.title);
  const [content, setContent] = useState(initialValues?.content);
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
      <Button onPress={() => onSubmit(title, content)} title="Save Blog Post" />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default BlogPostForm;

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
