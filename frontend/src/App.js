import logo from './logo.svg';
import './App.css';
import {Navbar, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const handleClick = ({target}) => {
    alert(`${target.value} clicked AYO!?!?`);
  }
  return (
    <div className="App">
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">My React-Bootstrap App</Navbar.Brand>
          </Navbar>
          <Button value="stuff" variant="primary" className="mt-3" onClick={handleClick}>Click Me</Button>
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yo mama
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Container>
    </div>
  );
}

export default App;
