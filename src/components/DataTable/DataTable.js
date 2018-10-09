import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './DataTable.css';

class DataTable extends Component {
  static dataTableHeading(items) {
    return Object.keys(items[0]).map(item => (
      <th key={`${item.toString()}-${Math.floor(Math.random() * 1000)}`}>
        {item}
      </th>
    ));
  }

  static dataTableItem(items) {
    return items.map(item => (
      <tr key={`${item.toString()}-${Math.floor(Math.random() * 1000)}`}>
        {Object.values(item).map(_item => (
          <td key={`${item.toString()}-${Math.floor(Math.random() * 1000)}`}>
            {_item}
          </td>
        ))}
      </tr>
    ));
  }

  render() {
    const { items, isFilter } = this.props; // eslint-disable-line react/prop-types
    if (isFilter) {
      if (items && items.length > 0) {
        return (
          <Card>
            <div className="DataTable table-responsive">
              <table className="table">
                <thead>
                  <tr>{DataTable.dataTableHeading(items)}</tr>
                </thead>
                <tbody>{DataTable.dataTableItem(items)}</tbody>
              </table>
            </div>
          </Card>
        );
      }
      return (
        <Card>
          <p>Results is not found!</p>
        </Card>
      );
    }
    return '';
  }
}

const mapStateToProps = ({ transactionReportReducers }) => {
  const { isFilter } = transactionReportReducers;
  return {
    isFilter
  };
};

export default connect(
  mapStateToProps,
  {}
)(DataTable);
