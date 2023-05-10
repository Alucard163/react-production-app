import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { ClassNames } from './helpers/classNames/classNames'

import {useTheme} from "./theme/useTheme";

import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

      return (
          <div className={ClassNames('app', {}, [theme])}>
              <button onClick={toggleTheme}>Toggle</button>
              <Link to={'/'}>Главная</Link>
              <Link to={'/about'}>О сайте</Link>
              <Suspense fallback={<div>...Loading</div>}>
                  <Routes>
                      <Route path={'/about'} element={<AboutPageAsync />}/>
                      <Route path={'/'} element={<MainPageAsync />}/>
                  </Routes>
              </Suspense>
          </div>
      )
}