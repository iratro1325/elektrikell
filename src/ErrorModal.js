import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function ErrorModal() {
   console.log('ErrorModal');
   const errorMessage = useSelector((state) => state.errorMessage);
   const showForm = useSelector((state) => state.showForm);

    return (
        <Modal show={!!errorMessage} onHide={showForm}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={showForm}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;