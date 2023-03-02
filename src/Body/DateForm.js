import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorModal from '../ErrorModal';
import moment from 'moment';
import { useState } from 'react';


function DateForm({ show, setShow, setSearchDate }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClose = () => setShow(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    let start = event.target.start.value;
    let end = event.target.end.value;

    const currentDate = moment();

    if (!start || !end) {
      setErrorMessage('Alg ja Lop')
      return;
    }
    if (currentDate.isBefore(start)) {
      setErrorMessage('Alg')
      return;
    }
    if (currentDate.isAfter(end)) {
      setErrorMessage('Lop')
      return;
    }

    start = moment(start);
    end = moment(end);

    if(start.diff(end, 'days') < 1) {
      setErrorMessage('Alg ja lopp');
      return;
    }

    setSearchDate({
      start: start.format(),
      end: end.format(),
      pastHours: currentDate.diff(moment(start), 'hours'),
    });
  };

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
              Otsi
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default DateForm;