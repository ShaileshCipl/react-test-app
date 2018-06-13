/**
*
* BannerForm
*
*/
import React from 'react';
import './style/style.scss';
import { Card, CardBody, CardTitle } from 'reactstrap';
import SelectStay from './../SelectStay';
import CardButton from './../CardButton';
import PromoCode from './../PromoCode';
import RoomSelection from './../RoomSelection';

class BannerForm extends React.Component {
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
     <Card className="BannerForm">
        <CardBody>
          <CardTitle>Where would you like to stay on Umrah?</CardTitle>
            <SelectStay />
            <RoomSelection />
            <PromoCode />
            <CardButton />
        </CardBody>
      </Card>
  );
}
}

BannerForm.propTypes = {

};

export default BannerForm;
