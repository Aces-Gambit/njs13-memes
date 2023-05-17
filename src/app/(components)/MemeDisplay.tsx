"use client";
import Image from 'next/image'
import { Anton } from 'next/font/google'
import { useElementSize } from 'usehooks-ts';
import { MemeTemplate, Meme } from '../(data)/types';

const anton = Anton({ weight: "400", subsets: ['latin'] });

const MemeDisplay = ({
  background,
  textAreas,
  values,
}: {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  textAreas: {
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
    color: string;
    fontSize: number;
    text: string;
  }[];
  values: Record<string, string>;
}) => {
    const [memeRef, { width }] = useElementSize();
    
    const ratio = width / background.width;
    
    return (
      <div className="relative" ref={memeRef}>
          <Image
            src={background.src}
            width= {background.width}
            height={background.height}
            alt={background.alt}
          />
          {textAreas.map((textArea) => (
            <div
              key={textArea.id}
              className="absolute"
              style={{
                top: textArea.top * ratio,
                left: textArea.left * ratio,
                width: textArea.width * ratio,
                height: textArea.height * ratio,
              }}
            >
              <div 
                className={`${anton.className} text-center text-${textArea.color} text-stroke-${textArea.color}`}
                style={{
                  fontSize: textArea.fontSize * ratio,
                  lineHeight: "1.1",
                }}
              >
                {values?.[textArea.id] ?? textArea.text}
              </div>
            </div>
          ))} 
      </div>
    )
}

export default MemeDisplay