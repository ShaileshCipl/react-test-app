/**
*
* RoomSelection
*
*/
import React from 'react';
import { Modal, Input, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';
import CardButton from './../CardButton';
import './style/style.scss';

class RoomSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="RoomSelection">
        <div className="RoomSelectionLabel" role="button" tabIndex={0} onClick={this.toggle}>
          <p>Passengers</p>
          <div className="Details">
            <span className="count">01</span>
            <span className="RightInfo">
              <span className="room">Room</span>
              <span className="passenger">Adult 1</span>
            </span>
          </div>
        </div>
        <Modal data-backdrop="static" data-keyboard="false" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Rooms Selection</ModalHeader>
          <ModalBody>
            <FormGroup className="group">
              <Label for="Rooms">Rooms</Label>
              <Input type="select" name="select" id="Rooms">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <div className="AddGuest">
              <p>Room <strong>1</strong></p>
              <FormGroup className="numberguests">
                <Label for="No. of guests">No. of guests</Label>
                <Input type="select" name="select" id="guests">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup className="Guest">
                <Label for="Guest">Guest 1</Label>
                <Input type="select" name="select" id="Guest">
                  <option>+18</option>
                  <option>17</option>
                  <option>16</option>
                  <option>15</option>
                  <option>14</option>
                </Input>
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <CardButton />
          </ModalFooter>
        </Modal>
      </div>

    );
  }
}

RoomSelection.propTypes = {

};

export default RoomSelection;
