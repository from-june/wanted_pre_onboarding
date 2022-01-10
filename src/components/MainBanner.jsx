import React, { useLayoutEffect, useState } from 'react';
import Icons from 'components/Icons';
import mainBanner from 'data/mainbanner.json';

import 'styles/MainBanner.css';

const MainBanner = () => {
  const { PrevButton, NextButton } = Icons();
  const [centerMode, setCenterMode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideTranslate = {
    transform: `translate3d(-${currentSlide * 100}%, 0, 0)`
  };

  useLayoutEffect(() => {
    const browserWidth = window.innerWidth;
    setCenterMode({
      transform: `translateX(-${1146 - (browserWidth - 1060) / 2}px)`
    });
  }, []);

  const slideList = () => {
    if (mainBanner.length > 1) {
      const slideItems = mainBanner.map((data, index) => (
        <li
          key={data.title}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ ...slideTranslate }}
        >
          <a href="/">
            <img src={data.image} />
          </a>
        </li>
      ));

      return [
        <li
          key={`${mainBanner[mainBanner.length - 1].title} prev clone`}
          className={`slide`}
          style={{ ...slideTranslate }}
        >
          <a href="/">
            <img src={mainBanner[mainBanner.length - 1].image} />
          </a>
        </li>,
        ...slideItems,
        <li
          key={`${mainBanner[0].title} next clone`}
          className={`slide`}
          style={{ ...slideTranslate }}
        >
          <a href="/">
            <img src={mainBanner[0].image} />
          </a>
        </li>
      ];
    }

    return (
      <li
        key={img.id}
        className={`slide ${index === currentSlide ? 'active' : null}`}
        style={{ ...slideTranslate }}
      >
        <a href="/">
          <img src={mainBanner[0].image} />
        </a>
      </li>
    );
  };

  const onPrevClick = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(prev => prev - 1);
  };

  const onNextClick = () => {
    if (currentSlide > mainBanner.length - 2) return;
    setCurrentSlide(prev => prev + 1);
  };

  return (
    <main className="Main">
      <div className="slider">
        <div className="slider-track">
          <ul className="slide-list" style={{ ...centerMode }}>
            {slideList()}
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
