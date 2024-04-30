import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export default function HomeHeader() {
  return (
    <View className="mt-12 flex-row items-center justify-between p-5 pt-0">
      <Image source={require('assets/logo.png')} />

      <TouchableOpacity
        activeOpacity={0.7}
        className="rounded-full border-2 border-solid border-primary bg-slate-300 p-2">
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
