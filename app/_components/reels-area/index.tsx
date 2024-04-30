import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icons } from '~/components/icon.ionicons';
import ReelsActivityList from './components/reels-activity-list';

export default function ReelsArea() {
  return (
    <View className="flex-row p-5">
      <TouchableOpacity className="relative h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-primary p-3">
        <Icons name="pulse-sharp" size={20} color="white" />
      </TouchableOpacity>
      <ReelsActivityList />
    </View>
  );
}
