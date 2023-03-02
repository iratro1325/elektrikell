import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ErrorModal from '../ErrorModal';
import { useState } from 'react';


function DateForm({ show, setShow, setSearchDate }) {
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
        event.preventDefault();
        const start = event.target.start.value;
        const end = event.target.end.value;
    
        if (moment(start).isAfter(moment())) {
          setErrorMessage("Algus kuupäev peab olema minevikus");
    
        } else if (!moment(end).isAfter(moment())) {
          setErrorMessage("Lõpp kuupäev peab olema minevikus");
    
        } else {
          setSearchDate({
            start: moment(start).format(),
            end: moment(end).format(),
            pastHours: moment().diff(moment(start), 'hours'),
          });
        }};
    
           return (
          <>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Määra kuupäevad</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Algus kuupäev</Form.Label>
                    <Form.Control name="start" type="datetime-local" placeholder="Start date" />
                  </Form.Group>
    
                  <Form.Group className="mb-3">
                    <Form.Label>Lõpp kuupäev</Form.Label>
                    <Form.Control name="end" type="datetime-local" placeholder="End date" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Kinnitan
                  </Button>
                </Form>
                <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }
    
      export default DateForm;