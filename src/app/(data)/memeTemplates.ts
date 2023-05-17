import { MemeTemplate } from './types';

const templates: MemeTemplate[] = [
    {
        id: "drake",
        background: {
          src: "/drake.jpg",
          width: 1200,
          height: 1200,
          alt: "Drake",
        },
        textAreas: [
          {
            id: "top",
            top: 0,
            left: 600,
            width: 600,
            height: 600,
            text: "Top",
            fontSize: 100,
            color: "black",
          },
          {
            id: "bottom",
            top: 600,
            left: 600,
            width: 600,
            height: 600,
            text: "Bottom",
            fontSize: 100,
            color: "black",
          },
        ],
      },
    {
        id: 'disaster-girl',
        background: {
            src: "/disaster-girl.jpg",
            width: 1200,
            height: 900,
            alt: "Disaster Girl",
        },
        textAreas: [
            {
                id: "tagline",
                top: 750,
                left: 100,
                width: 900,
                height: 130,
                text: "Something Funny",
                fontSize: 100,
                color: "white",
            },
        ],
    },
];

export default templates;