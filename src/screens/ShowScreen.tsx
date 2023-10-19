import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}: {route: any}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find((post: any) => post.id === id);

  return (
    <View>
      <Text>ShowScreen: {blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

// const styles = StyleSheet.create({});
