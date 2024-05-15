import { ActivityIndicator, FlatList } from 'react-native';

import { Post } from './components/post';

import colors from 'tailwindcss/colors';
import { POSTS_DATA } from '~/lib/fake-datas/posts';

export function PostsList() {
  return (
    <FlatList
      data={POSTS_DATA}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
      renderItem={({ item }) => <Post post={item} />}
      ListFooterComponent={<ActivityIndicator color={colors.violet[300]} />}
    />
  );
}
