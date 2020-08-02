import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Logo() {
    return (
       <Container>
           <Row style={{marginTop:'10px'}}>
                <Col></Col>
                <Col md='auto'>
                <h1>F O O D V I R A A M</h1>
                
               </Col>
                <Col>
                <img style={{width:'50px', height:'50px'}} 
                src="https://media-exp1.licdn.com/dms/image/C510BAQFZV_44AMvHng/company-logo_200_200/0?e=1604534400&v=beta&t=VPy5-11PTlIqK5YfvmJSKkldS8VCJ7qelAHALPBiGA0">              
                </img>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md='auto'>
                    <h6 >Hygienic Washrooms | Quality Food | Now on Highways</h6>
                </Col>
                <Col></Col>
            </Row>
       </Container>
    )
}

export default Logo
