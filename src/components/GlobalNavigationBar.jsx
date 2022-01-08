import React from 'react';

import 'styles/GlobalNavigationBar.css';

const menuList = [
  { category: '채용' },
  { category: '이벤트' },
  { category: '직군별 연봉' },
  { category: '이력서' },
  { category: '커뮤니티', iconPath: '/assets/icons/new.svg' },
  { category: '프리랜서' },
  { category: 'AI 합격예측', iconPath: '/assets/icons/beta.svg' }
];

const GlobalNavigationBar = () => {
  return (
    <div className="MainBar">
      <nav className="MainBar_nav">
        <div className="MainBar_top">
          <button className="MainBar_top-hamburger">
            <img src="/assets/icons/icon-menu.png" alt="햄버거 메뉴" />
          </button>
          <a href="/">
            <div className="logo">
              <img src="/assets/icons/logo_wanted.svg" alt="원티드 로고" />
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
              {item.iconPath && (
                <em>
                  <img src={item.iconPath} />
                </em>
              )}
            </li>
          ))}
        </ul>
        <aside className="MainBar_aside">
          <ul className="MainBar_aside_buttons">
            <li className="MainBar_aside_item">
              <button>
                <img src="/assets/icons/searchbutton.svg" alt="검색 버튼" />
              </button>
            </li>
            <li className="MainBar_aside_item">
              <button className="alertbutton">
                <img src="/assets/icons/alertbutton.svg" alt="알림 버튼" />
              </button>
            </li>
            <li className="MainBar_aside_item">
              <button className="MainBar_profile">
                <div className="avatar-border">
                  <div className="avatar_img"></div>
                </div>
                <div className="badge">
                  <img src="/assets/icons/badge_new.svg" />
                </div>
              </button>
            </li>
            <li className="for_employers">
              <a href="/">기업 서비스</a>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default GlobalNavigationBar;
