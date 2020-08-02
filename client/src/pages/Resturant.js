import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {Helmet} from "react-helmet";

function Resturant(props) {
    console.log("m",props.location.state.url)
    return (
      <div>
          <Helmet>
                <title>{props.location.state.name}</title>
                <meta name="description" content= {props.location.state.desc} />
            </Helmet>

          {props.location.state.id ===  "5f23d5e44ac6efe7e5e29051"
          ?
          <div>
        <Container>
          <Row style={{marginTop:'30px'}}>
            <Col ></Col>
              <Col xs={9}>
              <Jumbotron 
              style={{backgroundImage:'url(' + props.location.state.url + ')',
              backgroundSize:'100% 100%', minHeight:'300px'}}>
              </Jumbotron>
               <h2>{props.location.state.name}</h2>
               {props.location.state.desc}
               <h6>{props.location.state.loc}</h6>
               <br/>
               
              <Button  size="lg" variant="danger" disabled>Menu Options</Button>
              <br/>
              <br/>
              <br/>

              <ListGroup variant="flush">
             
             {
                 props.location.state.menu.map((res, index) => {
                 return (
                  <ListGroup.Item style={{marginTop:'10px'}}>
                      <Container>
                          <Row>
                              <Col>
                              {res.tittle}
                              <h6>Rs.{res.price}</h6>
                              <h6>{res.desc}</h6>
                              <br/>
                              <Button size="small" variant="danger" disabled>Add</Button>
                              </Col>
                              <Col>
                              <img style={{width:'200px', height:'150px', borderRadius:'8px'}} src={res.url}></img>
                              </Col>
                          </Row>
                      </Container>
                  </ListGroup.Item>
                 )
                 })
             }
              </ListGroup>
              </Col>
             <Col></Col>
          </Row>         
      </Container>
          </div>
          :
          <div>
                <h3 style={{textAlign:"center", marginTop:'30px'}}>Note:Only First Resturant has Menu Page</h3>
          </div>
          }
      </div>
    )
}

export default Resturant


// props.location.state.id