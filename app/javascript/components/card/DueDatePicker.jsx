import React from 'react';
import moment from 'moment'
import Pikaday from 'pikaday';

class DueDatePicker extends React.Component {
  state = {
    dueDate: '',
    dueTime: '',
  };


  defaultMoment = () => {
    if (this.props.dueDate) {
      return moment(this.props.dueDate);
    } else {
      const time = moment().add(1, "day");

      time.set({
        hour: 12,
        minute: 0,
        second: 0
      });

      return time;
    }
  };

  defaultDate = () => {
    this.defaultMoment().toDate();
  };

  componentDidMount() {
    this.picker = new Pikaday({
      field: this.refs.dateInput,
      bound: false,
      container: this.refs.calendar,
      firstDay: 1,
      yearRange: 10,
      defaultDate: this.defaultDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
      },
      keyboardInput: false,
      toString(date, format) {
        return moment(date).format(format);
      }
    });
    this.picker.show();
  }

  handleDateChange = (event) => {
    this.setState({
      dueDate: event.target.value
    });
  }

  handleTimeChange = (event) => {
    this.setState({
      dueTime: event.target.value
    });
  }

  handleDateSubmit = (event) => {
    event.preventDefault();
    const date = new Date(`${this.refs.dateInput.value} ${this.state.dueTime}`);
    this.props.onUpdateDate(date.toUTCString());
    this.props.handleCloseDatePopOver(event);
  }

  handleDateRemove = (event) => {
    event.preventDefault();
    this.props.onUpdateDate(null);
    this.props.handleCloseDatePopOver(event);
  }
  
  render() {
    return (
      <>
        <div className="popover due-date">
          <header>
            <span>Change due date</span>
            <a onClick={this.props.handleCloseDatePopOver} href="#" className="icon-sm icon-close"></a>
          </header>
          <div className="content">
            <form>
              <div className="datepicker-select">
                <div className="datepicker-select-date">
                  <label>
                    Date
                    <input
                      onChange={this.handleDateChange}
                      type="text"
                      placeholder="Enter date"
                      autofocus
                      ref="dateInput"
                    />
                  </label>
                </div>
                <div className="datepicker-select-time">
                  <label>
                    Time
                    <input
                      onChange={this.handleTimeChange}
                      type="text"
                      placeholder="Enter time"
                      value={this.state.dueTime}
                    />
                  </label>
                </div>
                <div id="calendar-widget"></div>
              </div>
              <button className="button" type="submit" onClick={this.handleDateSubmit}>
                Save
              </button>
              <button onClick={this.handleDateRemove} className="button red-button" type="reset">
                Remove
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default DueDatePicker;
