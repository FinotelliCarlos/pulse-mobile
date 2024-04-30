export const REELS_DATA: Array<{
  id: string;
  avatar: string;
  nickname: string;
  name: string;
}> = [
  {
    id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickname: 'user123',
    name: 'John Doe',
  },
  {
    id: '2',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickname: 'cool_dude',
    name: 'Alice Smith',
  },
  {
    id: '3',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickname: 'awesome_girl',
    name: 'Eva Brown',
  },
];

export type ReelProps = (typeof REELS_DATA)[0];
