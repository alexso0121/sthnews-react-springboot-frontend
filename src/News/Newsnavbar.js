import Nav from 'react-bootstrap/Nav';

function Newsnavbar() {
  return (
    <Nav justify variant="tabs"  defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link style={{'color':'black', "fontFamily": "sans-serif"}} href="/0"><nobr><strong>Top news</strong></nobr></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black', "fontFamily": "sans-serif"}} href="/1"><strong>World</strong></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{'color':'black', "fontFamily": "sans-serif"}} href="/2"><strong>Business</strong></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black', "fontFamily": "sans-serif"}} href="/3"><strong>Technology</strong></Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{'color':'black', "fontFamily": "sans-serif"}} href="/4"><strong>Entertainment</strong></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Newsnavbar;