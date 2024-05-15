import { ScrollView } from 'react-native';

import { PostsList } from './_components/posts-list';
import { ReelsArea } from './_components/reels-area';
import { HomeHeader } from './_components/template/header';

export default function Home() {
  return (
    <ScrollView>
      <HomeHeader />
      <ReelsArea />
      <PostsList />
    </ScrollView>
  );
}
