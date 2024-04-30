import React from 'react';
import { FlatList } from 'react-native';
import { POSTS_DATA } from '~/lib/fake-datas/posts';
import Post from './components/post';

export default function PostsList() {
  return (
    <FlatList
      data={POSTS_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Post post={item} />}
      contentContainerStyle={{ gap: 12, paddingVertical: 20 }}
      showsVerticalScrollIndicator={false}
      className="h-auto"
    />
  );
}
