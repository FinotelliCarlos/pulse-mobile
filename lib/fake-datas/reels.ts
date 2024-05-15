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
  {
    id: '11',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickname: 'user123',
    name: 'John Doe',
  },
  {
    id: '22',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickname: 'cool_dude',
    name: 'Alice Smith',
  },
  {
    id: '34',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickname: 'awesome_girl',
    name: 'Eva Brown',
  },
  {
    id: '51',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickname: 'user123',
    name: 'John Doe',
  },
  {
    id: '62',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickname: 'cool_dude',
    name: 'Alice Smith',
  },
  {
    id: '73',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickname: 'awesome_girl',
    name: 'Eva Brown',
  },
  {
    id: '143',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickname: 'user123',
    name: 'John Doe',
  },
  {
    id: '1232',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickname: 'cool_dude',
    name: 'Alice Smith',
  },
  {
    id: '343',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickname: 'awesome_girl',
    name: 'Eva Brown',
  },
  {
    id: '12345',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickname: 'user123',
    name: 'John Doe',
  },
  {
    id: '465542',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickname: 'cool_dude',
    name: 'Alice Smith',
  },
  {
    id: '36',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickname: 'awesome_girl',
    name: 'Eva Brown',
  },
];

export type ReelProps = (typeof REELS_DATA)[0];
