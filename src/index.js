import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './util/ScrollToTop';
import Home from './containers/Home';
import store from './util/store';
import { Provider } from 'react-redux';

import TemplatePage from './containers/TemplatePage';
import Communities from './containers/Communities';
import AddCommunity from './containers/AddCommunity';
import NotesSection from './containers/NotesSection';
import AddUnit from './containers/AddUnit';
import UnitList from './containers/UnitList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='templates' element={<TemplatePage />} />
            <Route path='communities' element={<Communities />} />
            <Route path='communities/add' element={<AddCommunity />} />
            <Route path='notes' element={<NotesSection />} />
            <Route path='addunit' element={<AddUnit />} />
            <Route path='units' element={<UnitList />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
