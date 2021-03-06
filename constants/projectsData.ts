// type
import { ImageProps } from "types/imageType";

export interface Project {
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
  technologies?: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: "bridephotoshoot",
    postFileName: "bridephotoshoot",
    title: "Bride photoshoot",
    images: [
      {
        alt: "woman in white tank top wearing silver necklace",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-j0p4xYW2IVw-unsplash.jpg",
      },
      {
        alt: "woman in white wedding dress standing on stairs",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-0wIWcXIh24M-unsplash.jpg",
      },
      {
        alt: "woman in white sleeveless top wearing silver necklace",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-ST2AcGYQ090-unsplash.jpg",
      },
      {
        alt: "woman in white wedding dress",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee--vPL7Ds6wiI-unsplash.jpg",
      },
      {
        alt: "woman in white tank top holding her hair",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-_Ie8ckXb3WI-unsplash.jpg",
      },
      {
        alt: "woman in white sleeveless dress",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-ugNxKaQe9ec-unsplash.jpg",
      },
      {
        alt: "woman in white floral tank top with white flower on ear",
        width: 6000,
        height: 4000,
        src: "/projects/bride/joeyy-lee-y56-YywiKUA-unsplash.jpg",
      },
    ],
  },
  {
    id: "bis",
    postFileName: "bridephotoshoot",
    title: "Business website",
    technologies: ["php", "javascript", "wordpress", "jquery"],
    link: "https://www.bis.lt",
    images: [
      {
        alt: "Website screenshot",
        width: 1440,
        height: 850,
        src: "/projects/bis/bis-laptop1.png",
      },
      {
        alt: "Website screenshot",
        width: 1440,
        height: 850,
        src: "/projects/bis/bis-laptop2.png",
      },
      {
        alt: "Website screenshot",
        width: 1440,
        height: 850,
        src: "/projects/bis/bis-laptop3.png",
      },
      {
        alt: "Website screenshot",
        width: 440,
        height: 870,
        src: "/projects/bis/bis-phone3.png",
      },
      {
        alt: "Website screenshot",
        width: 440,
        height: 870,
        src: "/projects/bis/bis-phone2.png",
      },
      {
        alt: "Website screenshot",
        width: 440,
        height: 870,
        src: "/projects/bis/bis-phone1.png",
      },
    ],
  },
  {
    id: "hairmaskdesign",
    postFileName: "bridephotoshoot",
    title: "Hair mask box design",
    images: [
      {
        alt: "White and green labeled soft hair mask tube",
        height: 3903,
        src: "/projects/tube/glenn-claire-aYrOtqypmho-unsplash.jpg",
        width: 3741,
      },
      {
        alt: "Black and White usb hair mask box and tube",
        height: 4000,
        src: "/projects/tube/glenn-claire-DuNXXPScbJM-unsplash.jpg",
        width: 5193,
      },
    ],
  },
  {
    id: "hairmaskdesign",
    postFileName: "bridephotoshoot",
    title: "Hair mask box design",
    images: [
      {
        alt: "White and green labeled soft hair mask tube",
        height: 3903,
        src: "/projects/tube/glenn-claire-aYrOtqypmho-unsplash.jpg",
        width: 3741,
      },
      {
        alt: "Black and White usb hair mask box and tube",
        height: 4000,
        src: "/projects/tube/glenn-claire-DuNXXPScbJM-unsplash.jpg",
        width: 5193,
      },
    ],
  },
  {
    id: "clothingphotoshoot",
    postFileName: "bridephotoshoot",
    title: "Clothing photoshot",
    images: [
      {
        alt: "woman in pink and white polka dot crop top and blue denim shorts",
        height: 6000,
        src: "/projects/clothing/joeyy-lee-7q8omh36MYA-unsplash.jpg",
        width: 4000,
      },
      {
        alt: "woman in pink and white floral crop top and blue denim jeans",
        height: 5897,
        src: "/projects/clothing/joeyy-lee-8Vv5H3oIGjA-unsplash.jpg",
        width: 3999,
      },
      {
        alt: "woman in white crop top and pink blazer",
        height: 6000,
        src: "/projects/clothing/joeyy-lee-mu1v2Ayd6pI-unsplash.jpg",
        width: 4000,
      },
      {
        alt: "woman in white spaghetti strap top and white skirt",
        height: 6000,
        src: "/projects/clothing/joeyy-lee-D_KmOD-xDk0-unsplash.jpg",
        width: 4000,
      },
      {
        alt: "woman in black tank top and black skirt holding black leather handbag",
        height: 6000,
        src: "/projects/clothing/joeyy-lee-wZgcKvE0vko-unsplash.jpg",
        width: 4000,
      },
    ],
  },
  {
    id: "modelingphotoshoot",
    postFileName: "bridephotoshoot",
    title: "Modeling photoshoot",
    images: [
      {
        alt: "woman in gray dress sitting on stairs",
        height: 4074,
        src: "/projects/modeling/joeyy-lee-sBcv_qRnZG8-unsplash.jpg",
        width: 3260,
      },
      {
        alt: "woman in gray dress leaning on a stone column",
        height: 5878,
        src: "/projects/modeling/joeyy-lee-MEee3-vzeKc-unsplash.jpg",
        width: 3918,
      },
      {
        alt: "woman in gray dress walking up stairs",
        height: 4074,
        src: "/projects/modeling/joeyy-lee-IhuELKvRaUU-unsplash.jpg",
        width: 3260,
      },
      {
        alt: "woman in gray dress leaning on stair stone railing",
        height: 6000,
        src: "/projects/modeling/joeyy-lee-5CEL1FDPZiM-unsplash.jpg",
        width: 4000,
      },
    ],
  },
  {
    id: "designingwaterbox",
    title: "Box water is better",
    postFileName: "bridephotoshoot",
    images: [
      {
        alt: "Boxed water is Better carton with waves drawn on it with a sharpie",
        height: 3401,
        src: "/projects/boxWater/boxed-water-is-better-7mr6Yx-8WLc-unsplash.jpg",
        width: 3401,
      },
      {
        alt: "Two female athlete holding box water in their hands",
        height: 2000,
        src: "/projects/boxWater/boxed-water-is-better-fTwAGXHfXoE-unsplash.jpg",
        width: 3000,
      },
      {
        alt: "Four white water carton on a yellow table",
        height: 2000,
        src: "/projects/boxWater/boxed-water-is-better-rWQB4e5W5bI-unsplash.jpg",
        width: 3000,
      },
      {
        alt: "Some white water carton on blue table",
        height: 2000,
        src: "/projects/boxWater/boxed-water-is-better-3iiyde9Zj8A-unsplash.jpg",
        width: 3000,
      },
    ],
  },
];

export default projectsData;
