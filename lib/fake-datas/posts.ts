export const POSTS_DATA: Array<{
  id: string;
  userId: string;
  imageUrl: string;
  likes: number;
  comments: string[];
  shares: number;
}> = [
  {
    id: '3453451',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '23412345345',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '33452134235',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '13451234245',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '3523534623342642',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '3456586797893',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '789678781',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '25675845964',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '36783546',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '12345457',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '2568456',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '369856348',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '14563433468',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '25634668567',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '35684564585368',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '567834561',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '26578456458',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '358545637',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
  {
    id: '657843646861',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/400x300',
    likes: 20,
    comments: ['Great picture!', 'Love it!', 'Amazing shot!'],
    shares: 5,
  },
  {
    id: '24563452635758',
    userId: '2',
    imageUrl: 'https://source.unsplash.com/random/400x301',
    likes: 15,
    comments: ['Beautiful!', 'Awesome!', 'Incredible!'],
    shares: 3,
  },
  {
    id: '3124334512334645623446',
    userId: '3',
    imageUrl: 'https://source.unsplash.com/random/400x302',
    likes: 25,
    comments: ['Fantastic!', 'Stunning!', 'Impressive!'],
    shares: 7,
  },
];

export type PostProps = (typeof POSTS_DATA)[0];
