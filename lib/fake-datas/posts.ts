export const POSTS_DATA: Array<{
  id: string;
  userId: string;
  imageUrl: string;
  likes: number;
  comments: string[];
  shares: number;
}> = [
  {
    id: '1',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '2',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '3',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
];

export type PostProps = (typeof POSTS_DATA)[0];
