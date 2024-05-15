import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '~/components/icon.ionicons';
import { PostProps } from '~/lib/fake-datas/posts';

export function Post({ post }: { post: PostProps }) {
  return (
    <View className="pb-2">
      <Image
        className="h-80 rounded-md"
        source={{
          uri: post.imageUrl,
        }}
      />

      <View className="flex-row items-start gap-1">
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center gap-1 rounded-xl px-3 py-2">
          <Icons name="heart" size={14} color="white" />
          <Text className="font-semibold italic text-slate-200">{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center gap-1 rounded-xl px-3 py-2">
          <Icons name="chatbox" size={14} color="white" />
          <Text className="font-semibold italic text-slate-200">{post.comments.length ?? 0}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center gap-1 rounded-xl px-3 py-2">
          <Icons name="share-social" size={14} color="white" />
          <Text className="font-semibold italic text-slate-200">{post.comments.length ?? 0}</Text>
        </TouchableOpacity>
      </View>
      <View className=" px-2">
        {post.comments.length > 0 && (
          <View className="rounded-md bg-slate-500 p-2">
            <Text>{post.comments[0]}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
