import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { ReelProps } from '~/lib/fake-datas/reels';

export default function ReelItem({ reel }: { reel: ReelProps }) {
  const userName = reel.name.split(' ')[0] + ' ' + reel.name.split(' ')[1];

  return (
    <TouchableOpacity activeOpacity={0.7} className="items-center">
      <Image
        className="h-20 w-20 rounded-3xl border border-solid border-primary"
        source={{
          uri: reel.avatar,
        }}
      />
      <Text className="w-full max-w-[80px] truncate text-center text-slate-200">{userName}</Text>
    </TouchableOpacity>
  );
}
