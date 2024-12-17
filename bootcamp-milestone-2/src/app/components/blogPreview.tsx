import React from 'react';
import type { Blog } from "../blogData"; // Import Blog type for typing the props
import Image from 'next/image'; // Import Next.js Image component for optimization
import style from './blogPreview.module.css';

// The props parameter will be typed as Blog to ensure all properties are passed in correctly
export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt={props.title} width={500} height={500} />
        <p>{props.description}</p>
        <p>Posted on: {props.date}</p>
      </div>
    </div>
  );
}
