import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';

import { ClassNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import { Navbar } from "widgets/Navbar";

import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss';


const App = () => {
    const {theme, toggleTheme} = useTheme();

      return (
          <div className={ClassNames('app', {}, [theme])}>
              <button onClick={toggleTheme}>Toggle</button>
              <Navbar />
              <AppRouter />
          </div>
      )
}

export default App;