import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function Weatheritem ({week,forecastWeather,forecastMaxtemp,forecastMintemp,ForecastIcon,forecastDate}) {
   /*  const [weatherimage,setweatherimage]=useState(null); */
   const baseimageurl="https://www.hko.gov.hk/images/HKOWxIconOutline/pic"
    console.log(ForecastIcon)
    var date=forecastDate;
    var chr='-';
    var pos1=4;
    var pos2=6;
    const new_date=[date.slice(0,pos1),chr,date.slice(pos1,pos2),chr,date.slice(pos2)]
      

   
    return ( <><ListGroup.Item><Container><Row>
        <Col x style={{"marginTop":"10px"}} ><h4><strong>{week}</strong></h4></Col>
        <Col></Col>
        <Col >
            {
                (()=>{switch (ForecastIcon){
                    case 51 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic51.png'/>
                    case 52 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic52.png'/>
                    case 50 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic50.png'/>
                    case 53 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic53.png'/>
                    case 54 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic54.png'/>
                    case 60 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic60.png'/>
                    case 61 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic61.png'/>
                    case 62 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic62.png'/>
                    case 63 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic63.png'/>
                    case 64 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic64.png'/>
                    case 80 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic80.png'/>
                    case 81 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic81.png'/>
                    case 82 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic82.png'/>
                    case 83 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic83.png'/>
                    case 84 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic84.png'/>
                    case 85 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic85.png'/>
                    case 90 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic90.png'/>
                    case 91 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic91.png'/>
                    case 92 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic92.png'/>
                    case 93 : return <img style={{"max-width":"50px","height":"50px"}} src='https://www.hko.gov.hk/images/HKOWxIconOutline/pic93.png'/>
                    
                    
                }}
            )()}</Col>
        </Row>
        </Container><br/>
        <Row><Col style={{"marginLeft":"12px"}}>Date:  {new_date}</Col></Row>
        <Row><Col style={{"marginLeft":"12px"}}>  {forecastWeather}</Col></Row>
        <Row><Col style={{"marginLeft":"12px"}}>
              Estimated temperature: {forecastMintemp.value}{forecastMintemp.unit} - {forecastMaxtemp.value}{forecastMaxtemp.unit}</Col></Row>
    </ListGroup.Item></> );
}

export default Weatheritem;