import React from 'react';
import Icons from 'components/Icons';

import 'styles/globalNavigation/Aside.css';

const Aside = () => {
  const { BadgeNew } = Icons();

  return (
    <aside className="Aside">
      <ul className="Aside_buttons">
        <li className="Aside_item">
          <button>
            <img src="/assets/icons/searchbutton.svg" alt="검색 버튼" />
          </button>
        </li>
        <li className="Aside_item">
          <button className="alertbutton">
            <img src="/assets/icons/alertbutton.svg" alt="알림 버튼" />
          </button>
        </li>
        <li className="Aside_item">
          <button className="MainBar_profile">
            <div className="avatar-border">
              <div className="avatar_img"></div>
            </div>
            <div className="badge">
              <BadgeNew />
            </div>
          </button>
        </li>
        <li className="for_employers">
          <a href="/">기업 서비스</a>
        </li>
        <li className="Mobile">
          <button>
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                  id="a"
                ></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a"></use>
                </mask>
                <use fill="#333" xlinkHref="#a"></use>
                <g mask="url(#b)" fill="#333">
                  <path d="M0 0h18v18H0z"></path>
                </g>
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
