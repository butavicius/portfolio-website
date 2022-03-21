// dayjs
import dayjs from 'dayjs';
// type
import { BlogPost } from 'types/blogPostType';

const blogPosts: BlogPost[] = [
  {
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'How to shoot beautiful photos in sunlight?',
  },
  {
    date: dayjs().subtract(3, 'week'),
    id: 'how-to-be-creative-in-design',
    image: {
      alt: 'person holding light bulb',
      height: 2400,
      src: '/posts/person holding light bulb.jpg',
      width: 1920,
    },
    filename: 'how-to-be-creative-in-design',
    title: 'How to be creative in design?',
  },
  {
    date: dayjs().subtract(6, 'day'),
    id: '21-tips-that-every-desinger-must-know',
    image: {
      alt: 'person holding ballpoint pen writing on white paper',
      height: 2396,
      src: '/posts/person holding ballpoint pen writing on white paper.jpg',
      width: 1920,
    },
    filename: '21-tips-that-every-desinger-must-know',
    title: '21 tips that every desinger must know',
  },
  {
    date: dayjs().subtract(2, 'week'),
    id: 'tips-for-photographers-when-it-is-raining',
    image: {
      alt: 'water droplets on glass window',
      height: 2880,
      src: '/posts/water droplets on glass window.jpg',
      width: 1920,
    },
    filename: 'tips-for-photographers-when-it-is-raining',
    title: `Tips for photographers when it's raining`,
  },
];

export default blogPosts;
