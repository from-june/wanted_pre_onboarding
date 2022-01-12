import React from 'react';

import 'styles/GlobalNavigationBar.css';
import Icons from 'components/Icons';
import MainBarAside from 'components/MainBarAside';

const GlobalNavigationBar = () => {
  const { Logo, New, Beta } = Icons();

  const menuList = [
    { category: '채용' },
    { category: '이벤트' },
    { category: '직군별 연봉' },
    { category: '이력서' },
    { category: '커뮤니티', icon: <New /> },
    { category: '프리랜서' },
    { category: 'AI 합격예측', icon: <Beta /> }
  ];

  return (
    <div className="MainBar">
      <nav className="MainBar_nav">
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
          <li className="MainBar_menu_item hidden">
            <a href="/">홈</a>
          </li>
          {menuList.map((item, index) => (
            <li key={index} className="MainBar_menu_item">
              <a href="/">{item.category}</a>
              {item.icon && <strong>{item.icon}</strong>}
            </li>
          ))}
        </ul>
        <MainBarAside />
      </nav>
    </div>
  );
};

export default GlobalNavigationBar;
