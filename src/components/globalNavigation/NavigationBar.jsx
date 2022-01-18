import React, { useRef, useLayoutEffect } from 'react';
import Icons from 'components/Icons';
import Aside from 'components/globalNavigation/Aside';
import useGetClientWidth from 'components/modules/useGetClientWidth';

import 'styles/globalNavigation/NavigationBar.css';

const NavigationBar = () => {
  const { Logo, New, Beta } = Icons();
  const navRef = useRef();
  const { setNavBarWidth } = useGetClientWidth();

  useLayoutEffect(() => {
    setNavBarWidth(navRef.current.clientWidth);
  }, []);

  const menuList = [
    { category: '채용' },
    { category: '이벤트' },
    { category: '직군별 연봉', desktop: true },
    { category: '이력서', desktop: true },
    { category: '커뮤니티', icon: <New />, desktop: true },
    { category: '프리랜서', desktop: true },
    { category: 'AI 합격예측', icon: <Beta />, desktop: true }
  ];

  return (
    <div className="MainBar">
      <nav className="MainBar_nav" ref={navRef}>
        <div className="MainBar_top">
          <button className="MainBar_top-hamburger">
            <img src="/assets/icons/icon-menu.png" alt="햄버거 메뉴" />
          </button>
          <a href="/">
            <div className="logo">
              <Logo />
            </div>
          </a>
        </div>
        <ul className="MainBar_menu">
          <li className="MainBar_menu_item menu_home">
            <a href="/">홈</a>
          </li>
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`MainBar_menu_item ${
                item.desktop ? 'menu_desktop' : ''
              }`}
            >
              <a href="/">{item.category}</a>
              {item.icon && <strong>{item.icon}</strong>}
            </li>
          ))}
        </ul>
        <Aside />
      </nav>
    </div>
  );
};

export default NavigationBar;
