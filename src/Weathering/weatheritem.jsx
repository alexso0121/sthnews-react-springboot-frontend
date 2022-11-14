import ListGroup from 'react-bootstrap/ListGroup';
function Weatheritem ({week,forecastWeather,forecastMaxtemp,forecastMintemp,forecastWind}) {
    return ( <><ListGroup.Item><div><span style={{"marginLeft":"100%"}}>{week}</span><span style={{"marginRight":"100%"}}>element</span></div><div>{forecastWeather}</div><div></div>{/* {forecastWeather}{forecastMaxtemp} */}
    </ListGroup.Item></> );
}

export default Weatheritem;