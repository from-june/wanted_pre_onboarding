import Icons from 'components/Icons';
import React from 'react';

import 'styles/SlideItem.css';

const SlideItem = ({ data, index, currentSlide }) => {
  const { NextButton } = Icons();
  const slideTranslate = {
    transform: `translate3d(${-currentSlide * 100}%, 0, 0)`
  };
  const active = index === currentSlide;

  return (
    <li className={`slide ${active && 'active'}`} style={{ ...slideTranslate }}>
      <div className="slide_image">
        <a href="/">
          <img src={data.image} />
        </a>
      </div>
      {active && (
        <div className="slide_info">
          <h2>{data.title}</h2>
          <h3>{data.info}</h3>
          <hr className="divider" />
          <a>
            <span className="button_label">바로가기</span>
            <span className="icon">{<NextButton />}</span>
          </a>
        </div>
      )}
    </li>
  );
};

export default SlideItem;
