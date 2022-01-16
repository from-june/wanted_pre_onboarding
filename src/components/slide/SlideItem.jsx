import React from 'react';
import Icons from 'components/Icons';
import useGetClientWidth from 'components/modules/useGetClientWidth';

import 'styles/slide/SlideItem.css';

const SlideItem = ({ data, index, current }) => {
  const { NextButton } = Icons();
  const { navBarWidth } = useGetClientWidth();
  const active = index === current;

  return (
    <li className={`slide ${active && 'active'}`}>
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
