// type
import { Dayjs } from 'dayjs';

import { ImageProps } from 'types/imageType';

export interface BlogPost {
  date: Dayjs;
  id: string;
  image: ImageProps;
  filename: string;
  title: string;
}


