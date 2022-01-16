import React from 'react';
import GlobalNavigationBar from 'components/navigation/GlobalNavigationBar';
import MainBanner from 'components/slide/MainBanner';

import 'styles/App.css';

const App = () => {
  return (
    <>
      <GlobalNavigationBar />
      <div className="padding"></div>
      <MainBanner />
    </>
  );
};

export default App;
