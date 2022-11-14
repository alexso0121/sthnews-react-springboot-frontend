import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function Weatheritem ({week,forecastWeather,forecastMaxtemp,forecastMintemp,forecastWind}) {
    return ( <><ListGroup.Item><Container><Row>
        <Col /* style={{"marginLeft":"100%"}} */>{week}</Col>
        <Col /* style={{"marginRight":"100%"}} */>element</Col>
        </Row>
        </Container>
        <Row><Col style={{"marginLeft":"12px"}}>  {forecastWeather}</Col></Row>
        <Row><Col style={{"marginLeft":"12px"}}>
              Estimated temperature: {forecastMintemp.value}{forecastMintemp.unit} - {forecastMaxtemp.value}{forecastMaxtemp.unit}</Col></Row>
    </ListGroup.Item></> );
}

export default Weatheritem;