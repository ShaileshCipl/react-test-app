/**
*
* PromoCode
*
*/
import React from 'react';
import './style/style.scss';
import { FormGroup, Label, Input } from 'reactstrap';

class PromoCode extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const content = this.state.checked
      ? <div className="PromoCodeEnter">
        <FormGroup>
          <Label for="Promocode">Promocode</Label>
          <Input type="text" name="text" placeholder="Enter Your promo code" />
        </FormGroup>
      </div>
      : null;

    return (
      <div className="PromoCode">
        <FormGroup check>
          <Label check>
            <Input type="checkbox" checked={this.state.checked}
              onChange={this.handleChange} id="checkbox2" />{' '}
            Do you have promo code?
        </Label>
        </FormGroup>
        {content}
      </div>
    );
  }
}

PromoCode.propTypes = {

};

export default PromoCode;
