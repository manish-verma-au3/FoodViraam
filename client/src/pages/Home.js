import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RestList.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'
import { useHistory } from "react-router-dom";
import {Helmet} from "react-helmet";
import Spinner from 'react-bootstrap/Spinner';

function Home() {
    const [mydata, setmyData] = useState([]);
    const [myLoading, setmyLoading] = useState(true);
    let history = useHistory();

  
    //fetching resturant data from API
    useEffect(() => {
        axios.get("https://foodviraamapi.herokuapp.com/list")
        .then(res => {
            console.log(res.data)
            setmyData(res.data);
            setmyLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    //sending data to resturant page onclick 
    function myFun(name, url, desc, id, loc, menu){
        console.log('clicked')
        history.push({
            pathname: '/resturant',
            state: { name:name, url:url, desc:desc, id:id, loc:loc, menu:menu }
        });
    }

    return (
        <Container fluid>
             <Helmet>
                <title>FoodViraam</title>
                <meta name="description" content="FoodViraam App"/>
            </Helmet>
           
            <Row>
                <Col></Col>
                <Col md='auto' style={{marginTop:'70px'}}>
              <h3>Trending Resturant This week</h3>
              <hr/>
                </Col>
                <Col></Col>
            </Row>
        
        {/* spinner for loading */}
         {myLoading ? 
         <div>
               <Row style={{marginTop:'50px'}}>
                   <Col xs={5}></Col>
                   <Col xs={2}>
                   <Spinner animation="border" role="status">
                         <span className="sr-only">Loading...</span>
                    </Spinner>
                   </Col>
                   <Col xs={5}></Col>
               </Row>   
         </div> 
         :
         <div>
                <Row>
                <Col>
            <div class="grid-container">    
            {
            mydata.map(result => {
                return (
            <div class="grid-item">
            <CardGroup >
                <Card border='light' 
                onClick={() => myFun(result.name, result.rest_url, result.description, result._id, result.location, result.Menu)}>
                <Card.Img variant="top" 
                style={{width:'300px', height:'200px', marginLeft:'auto', borderRadius:'5px', marginRight:'auto'}}
                src={result.rest_url} />
                <Card.Body >
                    <Card.Title>{result.name}</Card.Title>
                    <Card.Text >
                    {result.location}
                    </Card.Text>
    
                    <Card.Text >
                    {result.description}
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </CardGroup>
            </div>
                )
            })
            }        
            </div>
                </Col>
            </Row>
         </div>
        }
        </Container>
    )
}

export default Home
