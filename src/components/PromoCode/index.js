/**
*
* PromoCode
*
*/
import React from 'react';
import './style/style.scss';
import {  FormGroup, Label, Input } from 'reactstrap';

class PromoCode extends React.Component {

render() {
  return (
    <div className="PromoCode">
      <FormGroup check>
        <Label check>
        <Input type="checkbox" id="checkbox2" />{' '}
             Do you have promo code?                                    
        </Label>
    </FormGroup>
    </div>
  );
}
}

PromoCode.propTypes = {

};

export default PromoCode;
