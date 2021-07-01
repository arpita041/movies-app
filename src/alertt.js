import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Carousel } from 'react-bootstrap';
function Alertt()
{
    const [show, setShow] = useState(true);
    return (
            <div className="container">
              <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                  lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                  fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me y'all!
                  </Button>
                </div>
              </Alert>
        
              {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            </div>
          );
}

export default Alertt