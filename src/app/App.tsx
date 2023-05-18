import React from "react";

import { ClassNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss';


const App = () => {
    const {theme} = useTheme();

      return (
          <div className={ClassNames('app', {}, [theme])}>
              <ThemeSwitcher />
              <Navbar />
              <AppRouter />
          </div>
      )
}

export default App;