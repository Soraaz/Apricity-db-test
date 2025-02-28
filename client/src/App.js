import React from 'react';
import { debugLog, errorLog } from './lib/logs';

import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import './App.scss';
import ManageDb from './components/manageDb/ManageDb';
import { Intent, Toaster } from '@blueprintjs/core'
import SelectVariable from './components/selectVariable/SelectVariable';

/**
 * App class
 */
class App extends React.Component {
  /**
   * Constructor (React lifecycle)
   */
  constructor (props) {
    debugLog('App::constructor')
    super(props)
    this.toasterRef = React.createRef()
    this.state = {
      variable: ''
    }
  }

  /**
   * Mount (React lifecycle)
   */
  componentDidMount () {
    debugLog('App::componentDidMount')
    App.toaster = this.toasterRef.current
  }
  /**
   * Show toast
   *
   * @param intent Intent
   * @param message Message
   * @param timeout Timeout
   */
  static showToast = (intent, message, timeout) => {
    debugLog('App::showToast')
    if (App.toaster) {
      App.toaster.show({ intent: intent, message: message, timeout: timeout ? timeout : 5000 })
    }
  }

  /**
   * Clear toaster
   */
  static clearToaster = () => {
    debugLog('App::clearToaster')
    if (App.toaster)
      App.toaster.clear()
  }

  /**
   * Api error
   */
  static apiErrorToast = (err) => {
    debugLog('App::apiError')
    errorLog(err.message)
    if (err.desc) errorLog(err.desc)
    App.showToast(Intent.DANGER, err.message)
  }

  /**
   * handleVariable
   */
  handleVariable = (variable) => {
    debugLog('App::handleVariable')

    this.setState({
      ...this.state,
      variable: variable
    })
  }

  /**
   * Render (React lifecycle)
   */
  render () {
    debugLog('App::render');

    return (
      <div className="App">
        <Toaster className={'Toaster'} ref={this.toasterRef}>
        </Toaster>
        <SelectVariable handleVariable={this.handleVariable}/>
        <ManageDb variable={this.state.variable} />
      </div>
    );
  }
}

export default App;
