/**
*
* CardButton
*
*/
import React from 'react';
import './style/style.scss';
import { Button } from 'reactstrap';

class CardButton extends React.Component {

  render() {
    return (
      <div className="CardButton">
        <Button>SEARCH</Button>
      </div>
    );
  }
}

CardButton.propTypes = {

};

export default CardButton;
