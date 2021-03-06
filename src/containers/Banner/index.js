import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BannerForm, BestDeals, RecommendedHotels, RecommendedHotels2 } from '../../components';

import './style/style.scss';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <Container>
          <Row>
            <Col lg="7">
              <BestDeals />
              <div className="BottomContainer">
                <Row>
                  <Col lg="6">
                    <RecommendedHotels />
                  </Col>
                  <Col lg="6">
                    <RecommendedHotels2 />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="5">
              <BannerForm />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Banner;
