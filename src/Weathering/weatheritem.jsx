import ListGroup from 'react-bootstrap/ListGroup';
function Weatheritem ({week,forecastWeather,forecastMaxtemp,forecastMintemp,forecastWind}) {
    return ( <><ListGroup.Item>{week}{forecastWeather}{forecastMaxtemp}
    </ListGroup.Item></> );
}

export default Weatheritem;