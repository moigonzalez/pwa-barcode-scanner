import React from 'react';

import Header from './header';
import Main from './routes/Main';
import Footer from './footer';

const App = () => (
  <div>
    <Header />
    <Main className="main__wrapper" />
    <Footer />
  </div>
);

export default App;
