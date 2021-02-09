import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
const Footer = (props) => {
  return (
    <Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md="12" className="footer-copyright text-center">
              <p className="mb-0">Powered by <a href='https://chatupper.com/' target='_blank'>«‎ChatUpper»</a> with ❤️</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
}

export default Footer;