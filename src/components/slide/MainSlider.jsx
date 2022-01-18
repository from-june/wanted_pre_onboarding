import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import slideList from 'data/mainSlider.json';
import { renderSlideList } from 'components/slide/renderSlideList';

import * as CONST from 'components/utility/constants';

import 'styles/slide/MainSlider.css';
import Icons from 'components/Icons';

const MainSlider = () => {
  const [centerMode, setCenterMode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jump, setJump] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const slideListRef = useRef();

  const browserWidth = window.innerWidth;

  const slideListCount = slideList.length;
  const slideOuterWidth =
    (browserWidth >= 1200 ? CONST.IMAGE_WIDTH : browserWidth - 100) +
    CONST.SLIDE_MARGIN * 2;
  const slideListOffset = (slideListCount + currentSlide) * slideOuterWidth;

  const { PrevButton, NextButton } = Icons();

  const changeCurrent = amount => {
    setCurrentSlide(prev => prev + amount);
    setJump(false);
  };

  const handleCenter = width => {
    if (width < CONST.BREAK_POINT) {
      setCenterMode(width - 100 + CONST.SLIDE_MARGIN * 3);
    }

    if (width >= CONST.BREAK_POINT) {
      const sideLeft = (width - CONST.IMAGE_WIDTH) / 2;
      setCenterMode(
        CONST.IMAGE_WIDTH +
          (CONST.SLIDER_PADDING + CONST.SLIDE_MARGIN * 3) -
          sideLeft
      );
    }
  };

  useLayoutEffect(() => {
    handleCenter(browserWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', event => {
      handleCenter(event.target.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    const onTransitionEnd = () => {
      if (currentSlide >= slideListCount) {
        setJump(true);
        setCurrentSlide(0);
      }
      if (currentSlide <= -1) {
        setJump(true);
        setCurrentSlide(slideListCount - 1);
      }
    };

    slideListRef.current.addEventListener('transitionend', onTransitionEnd);

    return () =>
      slideListRef.current.removeEventListener(
        'transitionend',
        onTransitionEnd
      );
  }, [currentSlide]);

  useEffect(() => {
    const startSwipe = event => {
      event.preventDefault();
      slideListRef.current.style.transition = 'none';
      setDragStart(event.clientX);
    };

    const doSwipe = event => {
      event.preventDefault();
      if (dragStart === null) return;

      const draggedX = event.clientX - dragStart;

      slideListRef.current.style.transform = `translateX(-${
        slideListOffset + centerMode - draggedX
      }px)`;
    };

    const stopSwipe = event => {
      if (dragStart === null) return;

      slideListRef.current.style.transition = CONST.SLIDE_TRANSITION;

      const MAXIMUM = 100;
      const displacement = dragStart - event.clientX;
      if (Math.abs(displacement) > MAXIMUM) {
        if (displacement > 0) changeCurrent(1);
        if (displacement < 0) changeCurrent(-1);
      } else {
        slideListRef.current.style.transform = `translateX(-${
          slideListOffset + centerMode
        }px)`;
      }

      setDragStart(null);
    };

    slideListRef.current.addEventListener('mousedown', startSwipe);
    slideListRef.current.addEventListener('mousemove', doSwipe);
    slideListRef.current.addEventListener('mouseleave', stopSwipe);
    slideListRef.current.addEventListener('mouseup', stopSwipe);

    return () => {
      slideListRef.current.removeEventListener('mousedown', startSwipe);
      slideListRef.current.removeEventListener('mousemove', doSwipe);
      slideListRef.current.removeEventListener('mouseleave', stopSwipe);
      slideListRef.current.removeEventListener('mouseup', stopSwipe);
    };
  }, [dragStart]);

  const slideListStyle = {
    transform: `translateX(-${slideListOffset + centerMode}px)`,
    transition: `${jump ? 'none' : CONST.SLIDE_TRANSITION}`
  };

  return (
    <main className="Main">
      <div className="slider">
        <div className="slider-track">
          <ul className="slide-list" style={slideListStyle} ref={slideListRef}>
            {renderSlideList(slideList, slideListCount, currentSlide)}
          </ul>
        </div>
      </div>
      <button className="prev-arrow button" onClick={() => changeCurrent(-1)}>
        <PrevButton />
      </button>
      <button className="next-arrow button" onClick={() => changeCurrent(1)}>
        <NextButton />
      </button>
    </main>
  );
};

export default MainSlider;
