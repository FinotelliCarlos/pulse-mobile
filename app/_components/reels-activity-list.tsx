import React from 'react';
import { FlatList } from 'react-native';
import { REELS_DATA } from '~/lib/fake-datas/reels';
import ReelItem from './reel-item';

export default function ReelsActivityList() {
  return (
    <FlatList
      data={REELS_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReelItem reel={item} />}
      horizontal
      contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
