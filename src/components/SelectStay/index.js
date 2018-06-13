/**
*
* SelectStay
*
*/
import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import images from '../../images';
import './style/style.scss';
interface Props {}
interface State {}
class SelectStay extends React.Component<Props, State> {
      constructor(props: Props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    toggle = () => {
        this.setState({
            show: !this.state.show,
        });
    }
    toggleSVal = (e) => {
        let listElements =this.refs.ddSVal.children;
        for (var i = 0; i < listElements.length; i++) {
         listElements[i].classList.remove('selected');
        }
        this.refs.ddVal.innerText= e.target.children[0].innerText;
        e.target.classList.add('selected');
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
                <div role="button" tabIndex={0} onClick={this.toggle} className="DropdownValue" ref="ddVal">Medina</div>
                <div style={hide} className="Dropdown">
                    <span><img src={images.current_location} alt="LOCATION" />CURRENT LOCATION</span>
                    <ul  ref="ddSVal">
                        <li className="selected" onClick={this.toggleSVal}><strong>Makkah</strong>, Saudi Arabia</li>
                        <li  onClick={this.toggleSVal} ><strong>Madinah</strong>, Saudi Arabia</li>
                        <li onClick={this.toggleSVal}><strong>Jeddah</strong>, Saudi Arabia</li>
                    </ul>
                </div>
            </FormGroup>
        );
    }
}

SelectStay.propTypes = {

};

export default SelectStay;
