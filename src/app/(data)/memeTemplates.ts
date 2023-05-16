import { MemeTemplate } from './types';

const templates: MemeTemplate[] = [
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