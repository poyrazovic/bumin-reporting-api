import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/tr';
import './Day-Picker.css';

class CDayPickerInput extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      selectedDay: moment().format('YYYY-MM-DD'),
      weekdaysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
    };
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  renderIcon() {
    if (this.props.icon) {
      return <i className={['Input-icon', 'icon', `icon-${this.props.icon}`].join(' ')} />;
    }
    return '';
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div className="Input-wrapper position-relative">
        <DayPickerInput
          selectedDays={selectedDay}
          onDayChange={this.handleDayChange}
          localeUtils={MomentLocaleUtils}
          {...this.props}
          format="YYYY-MM-DD"
          placeholder={`${moment().format('YYYY-MM-DD')}`}
          formatDate={formatDate}
          parseDate={parseDate}
          classNames={{
            container: 'Input',
            overlayWrapper: 'Input-datepicker-wrapper',
            overlay: 'Input-datepicker'
          }}
          weekdaysShort={this.state.weekdaysShort}
          dayPickerProps={{
            locale: 'tr',
            localeUtils: MomentLocaleUtils
          }}
        />
        {this.renderIcon()}
      </div>
    );
  }
}

export default CDayPickerInput;
