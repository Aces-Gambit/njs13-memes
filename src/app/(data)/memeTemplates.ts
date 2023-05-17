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
    {
        id: 'guy-looking',
        background: {
          src: "/guy-looking.jpg",
          width: 1200,
          height: 1066,
          alt: "Guy Looking",
        },
        textAreas: [
          {
            id: "new",
            top: 500,
            left: 0,
            width: 632,
            height: 320,
            text: "New",
            fontSize: 120,
            color: "white",
          },
          {
            id: "person",
            top: 320,
            left: 583,
            width: 400,
            height: 300,
            text: "Person",
            fontSize: 80,
            color: "white",
          },
          {
            id: "old",
            top: 500,
            left: 901,
            width: 350,
            height: 320,
            text: "Old",
            fontSize: 100,
            color: "white",
          },
        ],
    },
];

export default templates;