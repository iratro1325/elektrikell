import Container from 'react-bootstrap/Container';

function FooterHighPrice() {
    return (
        <Container className="text-center">
             <div className="mt-2 mb-4">
                <span className="fw-light">Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa
                    ühisele eesmärgile alandada <br></br> tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust. 
                    <a target="blank" href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/"> Loe lähemalt</a>
                </span>
            </div>
        </Container>
    );
}

export default FooterHighPrice;