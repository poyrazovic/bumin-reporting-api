import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './DataTable.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: [],
    };
  }

  dataTableHeading(items) {
    return Object.keys(items[0]).map((item, index) => <th key={ index }>{ item }</th>);
  }

  dataTableItem(items) {
    return items.map((item, index) => (
      <tr key={ index }>
        {
          Object.values(item).map((_item, _index) => <td key={ _index }>{ _item }</td>)
        }
      </tr>
    ));
  }

  render() {
    const { items, isFilter } = this.props;
    if(isFilter) {
      if(items && items.length > 0) {
        return (
          <Card>
            <div className="DataTable table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    { this.dataTableHeading(items) }
                  </tr>
                </thead>
                <tbody>
                  { this.dataTableItem(items) }
                </tbody>
              </table>
            </div>
          </Card>
        );
      } else {
        return (
          <Card>
            <p>Herhangi bir sonuca ulasilamadi!</p>
          </Card>
        );
      }
    }
    return '';
  }
}

const mapStateToProps = ({ transactionReportReducers }) => {
  const {
    isFilter,
  } = transactionReportReducers;
  return {
    isFilter,
  };
};

export default connect(mapStateToProps, {})(
  DataTable
);