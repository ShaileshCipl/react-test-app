/**
*
* RoomSelection
*
*/
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './style/style.scss';

class RangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().add(3, 'months'),
      isOpenIn: false,
      isOpenOut: false,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleClickIn = this.handleClickIn.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);

  }
  handleChangeStart(date) {
    this.setState({
      startDate: date,
      isOpenIn: false,

    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date,
      isOpenOut: false,
    });
  }
  handleClickIn(e) {
    e && e.preventDefault()
    this.setState({ isOpenIn: !this.state.isOpenIn })

  }
  handleClickOut(e) {
    e && e.preventDefault()
    this.setState({ isOpenOut: !this.state.isOpenOut })

  }
  render() {
    console.log(this.state.startDate);
    return (
      <div>
        <div className="RangeInput In">
          <div className="RangeInputLabel" role="button" tabIndex={0}>
            <p>Check-in</p>
            {
              !this.state.isOpenIn ? (
                //ToDO : Seperate Component Will be Created
                <div role="button" tabIndex={0} onClick={this.handleClickIn} className="Details">
                  <span className="count">18</span>
                  <span className="RightInfo">
                    <span className="room">Monday</span>
                    <span className="passenger">May, 2018</span>
                  </span>
                </div>
              ) : (

                  <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    showMonthDropdown
                    showYearDropdown
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                  />)}
          </div>
        </div>
        <div className="RangeInput Out">
          <div className="RangeInputLabel" role="button" tabIndex={0}>
            <p>Check-out</p>
            {
              !this.state.isOpenOut ? (
                <div className="Details" role="button" tabIndex={0} onClick={this.handleClickOut}>
                  <span className="count">20</span>
                  <span className="RightInfo">
                    <span className="room">Monday</span>
                    <span className="passenger">June, 2018</span>
                  </span>
                </div>
              ) : (
                  <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    showMonthDropdown
                    showYearDropdown
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                  />
                )}
          </div>
        </div>
      </div>

    );
  }
}
RangeInput.propTypes = {

};

export default RangeInput;
