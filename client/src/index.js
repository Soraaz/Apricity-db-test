import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
// Enable behavior which hides focus styles during mouse interaction.
import { FocusStyleManager } from '@blueprintjs/core';
FocusStyleManager.onlyShowFocusOnTabs()

const root = document.getElementById('root');

ReactDOM.render(
  <App />, root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
