import React from 'react'
import PropTypes from 'prop-types'
import { Card, Elevation } from '@blueprintjs/core'

import './ManageDB.scss'
import { debugLog } from '../../lib/logs';
import getColumnValues from '../../api/getColumnValues';

/**
 * ManageDb class
 */
class ManageDb extends React.Component {
  /**
   * Constructor (React lifecycle)
   */
  constructor(props) {
    debugLog('ManageDb::constructor')
    super(props)

    this.state = {
      dbList: []
    }
  }

  /**
   * Mount (React lifecycle)
   */
  componentDidMount() {
    debugLog('ManageDb::componentDidMount')

    if (this.props.variable)
      this.loadColumn();
  }

  /**
   * Update(React lifecycle)
   */
  componentDidUpdate = prevProps => {
    debugLog('ManageDb::componentDidUpdate')

    if (this.props.variable && this.props.variable !== prevProps.variable)
      this.loadColumn();
  };

  /**
   * loadColumn
   */
  loadColumn = () =>
  {
    debugLog('ManageDb::loadColumn');
    getColumnValues(this.props.variable, (data) => {
      debugLog('Data received:' + data);
      this.setState({
        ...this.state,
        dbList: data.map((obj, index) => {
          return (
            <tr key={index}>
              <td>{obj[this.props.variable]}</td>
              <td>{obj.count}</td>
              <td>{obj.avg}</td>
            </tr>
          )
        })
      })
    })
  }

  /**
   * Capitalize a word
   */
  capitalizeWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Render (React lifecycle)
   */
  render() {
    debugLog('ManageDb:render')

    const dbList = this.state.dbList;

    return (
      <div className="ManageDb" style={{ textAlign: 'center' }}>
        <Card elevation={Elevation.TWO} style={{ display: 'inline-flex', textAlign: 'center' }}>
          {this.props.variable !== '' ?
            <table className="bp3-html-table .modifier bp3-html-table-bordered bp3-html-table-condensed bp3-html-table-striped bp3-small bp3-interactive">
              <thead>
                <tr>
                  <th>{this.capitalizeWord(this.props.variable)}</th>
                  <th>Count</th>
                  <th>Average age</th>
                </tr>
              </thead>
              <tbody>
                {dbList}
              </tbody>
            </table> :
            'No variable given' }
        </Card>
      </div>
    )
  }
}

ManageDb.propTypes = {
  variable: PropTypes.string.isRequired
}

export default ManageDb;
