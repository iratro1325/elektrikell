import Container from 'react-bootstrap/Container'
import DurationComponent from './Durations'

function FooterComponent () {
    return (
           <Container className>
                <div>Tahan tarbida</div>
                <div>
                    <DurationComponent />
                </div>
                <div>Buttons</div>
                <div>Parim aeg</div>
                <div>Timer</div>
                <div>Siin on</div>
            </Container>
        )
}

export default FooterComponent