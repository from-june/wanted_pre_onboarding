import React, { cloneElement } from 'react';
import SlideItem from 'components/SlideItem';

export const renderSlideList = (list, count, current) => {
  let slideListTrack = list.map((data, index) => (
    <SlideItem key={index} data={data} index={index} current={current} />
  ));
  const lastSlideClone = (
    <SlideItem
      key={`${list[count - 1].title} prev clone`}
      data={list[count - 1]}
      index={current - 1}
      current={current}
    />
  );
  const firstSlideClone = (
    <SlideItem
      key={`${list[0].title} next clone`}
      data={list[0]}
      index={current + 1}
      current={current}
    />
  );

  slideListTrack = [].concat(
    lastSlideClone,
    slideListTrack,
    slideListTrack,
    slideListTrack,
    firstSlideClone
  );

  return slideListTrack.map((slide, index) =>
    cloneElement(slide, { key: index })
  );
};
