import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import slideList from 'data/mainSlider.json';
import { renderSlideList } from 'components/slide/renderSlideList';
import useGetClientWidth from 'components/modules/useGetClientWidth';

import * as CONST from 'components/utility/constants';

import 'styles/slide/MainSlider.css';
import Icons from 'components/Icons';

const MainSlider = () => {
  const [centerMode, setCenterMode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jump, setJump] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const slideListRef = useRef();

  const slideCount = slideList.length;
  const slideOuterWidth = CONST.IMAGE_WIDTH + CONST.SLIDE_MARGIN;
  const offset = (slideCount + currentSlide) * slideOuterWidth;

  const { PrevButton, NextButton } = Icons();
  const { navBarWidth } = useGetClientWidth();

  const changeCurrent = amount => {
    setCurrentSlide(prev => prev + amount);
    setJump(false);
  };

  const handleCenter = width => {
    const BREAK_POINT = 1030;

    if (width <= BREAK_POINT) {
      const sideLeft = (slideOuterWidth - width) / 2;
      setCenterMode(CONST.IMAGE_WIDTH + 74 + sideLeft);
    }

    if (width > BREAK_POINT) {
      const sideLeft = (width - navBarWidth) / 2;
      setCenterMode(navBarWidth + 86 - sideLeft);
    }
  };

  useLayoutEffect(() => {
    const initialWidth = window.innerWidth;
    handleCenter(initialWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', event => {
      handleCenter(event.target.innerWidth);
    });
  }, []);

  useEffect(() => {
    const onTransitionEnd = () => {
      if (currentSlide >= slideCount) {
        setJump(true);
        setCurrentSlide(0);
      }
      if (currentSlide <= -1) {
        setJump(true);
        setCurrentSlide(slideCount - 1);
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
        offset + centerMode - draggedX
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
          offset + centerMode
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
    transform: `translateX(-${offset + centerMode}px)`,
    transition: `${jump ? 'none' : CONST.SLIDE_TRANSITION}`
  };

  return (
    <main className="Main">
      <div className="slider">
        <div className="slider-track">
          <ul className="slide-list" style={slideListStyle} ref={slideListRef}>
            {renderSlideList(slideList, slideCount, currentSlide)}
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
