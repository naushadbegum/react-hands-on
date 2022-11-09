import React from "react";
import './App.css';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Our Menu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
    <React.Fragment>
    <img src={require('./japanese-food-1.jpg').default}/>
    </React.Fragment>
    </div>
  );
}
export default App;