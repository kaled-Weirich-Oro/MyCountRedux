import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Calculate from "./components/Calculate";
import Result from "./components/Result";
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return(
      <>
        <Provider store={store}>
          <Calculate style={{width: "50%"}} />
          <Result style={{width: "50%"}} />
        </Provider>
      </>
    );
}
export default hot(module)(App);
