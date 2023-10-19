import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find((post: any) => post.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
          <Text style={styles.headerPlus}>edit</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, id]);

  return (
    <View>
      <Text>ShowScreen: {blogPost.title}</Text>
      <Text>ShowScreen: {blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  headerPlus: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
});
