/**
*
* SelectStay
*
*/
import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import images from '../../images';
import './style/style.scss';

class SelectStay extends React.Component {
    constructor() {
        super();
        this.state = {

            show: false,

        };
    }

    toggle = () => {
        this.setState({
            show: !this.state.show,
        });
    }

    render() {
        const hide = {
            display: !this.state.show ? "none" : "block",
        }
        return (
            <FormGroup className="CustomForm">
                <Label for="exampleSelect">Staying in</Label>
                <div role="button" tabIndex={0} onClick={this.toggle} className="DropdownValue">Medina</div>
                <div style={hide} className="Dropdown">
                    <span><img src={images.current_location} alt="LOCATION" />CURRENT LOCATION</span>
                    <ul>
                        <li><strong>Makkah</strong>, Saudi Arabia</li>
                        <li className="selected"><strong>Madinah</strong>, Saudi Arabia</li>
                        <li><strong>Jeddah</strong>, Saudi Arabia</li>
                    </ul>
                </div>
            </FormGroup>
        );
    }
}

SelectStay.propTypes = {

};

export default SelectStay;
