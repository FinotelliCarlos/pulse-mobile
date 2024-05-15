import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icons } from '~/components/icon.ionicons';
import { ReelsActivityList } from './components/reels-activity-list';

export function ReelsArea() {
  return (
    <View className="flex-row gap-2 pb-2 pl-2">
      <TouchableOpacity className="relative size-16 items-center justify-center rounded-full border-2 border-dashed border-primary p-3">
        <Icons name="pulse-sharp" size={20} color="white" />
      </TouchableOpacity>

      <ReelsActivityList />
    </View>
  );
}
