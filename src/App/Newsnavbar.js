import Nav from 'react-bootstrap/Nav';

function Newsnavbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} href="/1">Top news</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} href="/2">Local</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} href="/3">Business</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black'}} href="/4">Technology</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black'}} href="/5">Sports</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Newsnavbar;