import React, {Suspense} from "react";

import { ClassNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui";

import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss';

const App = () => {
    const {theme} = useTheme();

      return (
          <div className={ClassNames('app', {}, [theme])}>
              <Suspense fallback="">
                  <Navbar />
                  <div className='content-page'>
                      <Sidebar />
                      <AppRouter />
                  </div>
              </Suspense>
          </div>
      )
}

export default App;