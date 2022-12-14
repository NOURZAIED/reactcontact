import logo from './logo.svg';
import './App.css';
import {Form , Button} from 'react-bootstrap';

function App() {
  return (
    <div className='G'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='f'>firstName and lastname</Form.Label>
        <br/>
        <Form.Control type="name" placeholder=" ZAIED Nour" />
      </Form.Group>
      <br/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='f'>Password</Form.Label>
        <br/>
        <Form.Control type="password" placeholder="xxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <br/>
      <Button className='b' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
