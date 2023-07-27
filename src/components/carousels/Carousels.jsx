import React from 'react';
import { Carousel } from 'antd';
import './Carousels.css';

export default function Carousels() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel autoplay afterChange={onChange}>
      <div>
        <div className="kotik1" />
      </div>
      <div>
        <div className="kotik2" />
      </div>
      <div>
        <div className="kotik3" />
      </div>
      <div>
        <div className="kotik4" />
      </div>
    </Carousel>
  );
}
