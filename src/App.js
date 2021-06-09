import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Register from './components/Register/register.component';


function App() {
  return (
    <div className='app'>
      <Container className="container-header">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Register />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


