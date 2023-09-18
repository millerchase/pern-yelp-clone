import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route
            exact
            path="/restaurants/:id/update"
            Component={UpdatePage}
          ></Route>
          <Route
            exact
            path="/restaurants/:id"
            Component={RestaurantDetailPage}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
