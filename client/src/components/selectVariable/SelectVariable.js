import React from 'react'

import './SelectVariable.scss'
import { debugLog } from '../../lib/logs';
import { Card, Elevation, HTMLSelect } from '@blueprintjs/core';
import getVariables from '../../api/getVariables';
import PropTypes from 'prop-types';

/**
 * SelectVariable class
 */
class SelectVariable extends React.Component {
  /**
   * Constructor (React lifecycle)
   */
  constructor(props) {
    debugLog('SelectVariable::constructor')
    super(props)

    this.state = {
      variableList: [],
      modified: false
    }
  }

  /**
   * Mount (React lifecycle)
   */
  componentDidMount() {
    debugLog('SelectVariable::componentDidMount')
    this.loadVariable();
  }

  /**
   * loadVariable
   */
  loadVariable = () =>
  {
    debugLog('SelectVariable::loadVarible');
    getVariables((data) => {
      debugLog('Data received:' + data);
      this.setState({
        ...this.state,
        variableList: data.map((obj, index) => {
          return (
            <option key={index}>{obj.column_name}</option>
          )
        })
      })
    })
  }

  /**
   * Render (React lifecycle)
   */
  render() {
    debugLog('SelectVariable:render')

    const variableList = this.state.variableList;

    return(
      <div style={{ textAlign: 'center' }}>
        <Card elevation={Elevation.TWO} style={{ display: 'inline-flex', textAlign: 'center', margin: 10 }}>
          <div className="bp3-select .modifier" >
            <HTMLSelect defaultValue={1} onChange={(event) => {
              this.setState({
                ...this.state,
                modified: true
              })
              this.props.handleVariable(event.currentTarget.value )
            }}>
              <option disabled={this.state.modified}>Choose an variable.</option>
              {variableList}
            </HTMLSelect>
          </div>
        </Card>
      </div>
    )
  }
}

SelectVariable.propTypes = {
  handleVariable: PropTypes.func.isRequired
}

export default SelectVariable;
