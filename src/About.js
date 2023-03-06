import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function About() {
    return (
    <Card className="text-center">
      <Card.Header>Skrypka Iryna</Card.Header>
      <Card.Body>
        <Card.Title>Projekt: ElektriKell</Card.Title>
        <Card.Text>
          Märts, 2023
        </Card.Text>
        <Button variant="primary">
            <Link to="/" className="nav-link">ElektriKell</Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Eesti</Card.Footer>
    </Card>
  );
}

export default About;