import React from 'react';
import './history.scss';
// import ReactJson from 'react-json-view';

class History extends React.Component {

  rePopulateForm = (event) => {
    console.log('History Event:', event.target);
  }

  render() {
    return (
        <div id="history">
          <h3>History</h3>
          <ul>
            {this.props.history.length ? this.props.history.map((value, index) => (
              <li onClick={this.rePopulateForm} key={index}>
                <span name="route" value={value}>{value}</span>
              </li>
            ))
            :
            'No history to show.'
          }
          {/* {this.props.history}
          {console.log('History on History:', this.props.history)} */}
          </ul>
        </div>
    )
  }
}

export default History