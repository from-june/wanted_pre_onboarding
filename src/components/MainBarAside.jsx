import React from 'react';
import Icons from 'components/Icons';

const MainBarAside = () => {
  const { BadgeNew } = Icons();

  return (
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
              <BadgeNew />
            </div>
          </button>
        </li>
        <li className="for_employers">
          <a href="/">기업 서비스</a>
        </li>
      </ul>
    </aside>
  );
};

export default MainBarAside;
