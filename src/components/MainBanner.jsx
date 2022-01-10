import React, { useLayoutEffect, useState } from 'react';
import Icons from 'components/Icons';
import SlideItem from 'components/SlideItem';
import mainBanner from 'data/mainbanner.json';

import 'styles/MainBanner.css';

const MainBanner = () => {
  const { PrevButton, NextButton } = Icons();
  const [centerMode, setCenterMode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  let slideList = mainBanner;
  const slideCount = slideList.length;

  useLayoutEffect(() => {
    const browserWidth = window.innerWidth;

    setCenterMode({
      transform: `translateX(-${1146 - (browserWidth - 1060) / 2}px)`
    });
  }, []);

  const renderSlideList = () => {
    slideList = [].concat(slideList, slideList, slideList);

    if (slideCount > 1) {
      const slideItems = slideList.map((data, index) => (
        <SlideItem
          key={index}
          data={data}
          index={index}
          currentSlide={currentSlide}
        />
      ));

      return [
        <SlideItem
          key={`${slideList[slideCount - 1].title} prev clone`}
          data={slideList[slideCount - 1]}
          index={currentSlide - 1}
          currentSlide={currentSlide}
        />,
        ...slideItems,
        <SlideItem
          key={`${slideList[0].title} next clone`}
          data={slideList[0]}
          index={currentSlide + 1}
          currentSlide={currentSlide}
        />
      ];
    }
  };

  const onPrevClick = () => {
    setCurrentSlide(prev => prev - 1);
  };

  const onNextClick = () => {
    setCurrentSlide(prev => prev + 1);
  };

  return (
    <main className="Main">
      <div className="slider">
        <div className="slider-track">
          <ul className="slide-list" style={{ ...centerMode }}>
            {renderSlideList()}
          </ul>
        </div>
      </div>
      <button className="prev-arrow button" onClick={onPrevClick}>
        <PrevButton />
      </button>
      <button className="next-arrow button" onClick={onNextClick}>
        <NextButton />
      </button>
    </main>
  );
};

export default MainBanner;
