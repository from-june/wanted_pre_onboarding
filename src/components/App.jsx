import React from 'react';
import NavigationBar from 'components/globalNavigation/NavigationBar';
import MainSlider from 'components/slide/MainSlider';

import 'styles/App.css';

const App = () => {
  return (
    <>
      <NavigationBar />
      <div className="padding"></div>
      <MainSlider />
    </>
  );
};

export default App;
