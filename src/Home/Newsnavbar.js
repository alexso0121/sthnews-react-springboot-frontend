import Nav from 'react-bootstrap/Nav';

function Newsnavbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} href="/"><nobr>Top news</nobr></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} eventKey="link-1">International</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black'}} eventKey="link-2">Health</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black'}} eventKey="link-2">Financial</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black'}} eventKey="link-2">Sports</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Newsnavbar;