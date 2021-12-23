import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const More = () => {
	return (
        <Container 
            style={{ height: "75vh" }} 
            className="d-flex flex-column justify-content-md-center align-items-center">
            <Row className='mt-5'>
                <Col className='text-center text-white'>
                    <Button variant='info' href='https://www.facebook.com/manhvu2000/' size='lg'>
                        Visit my Facebook for more information
                    </Button>
                </Col>
		    </Row>
            <Row className='mt-4'><Link to="/about"><h6>{"< About BlogG"}</h6></Link></Row>
        </Container>
		
	)
}

export default More
