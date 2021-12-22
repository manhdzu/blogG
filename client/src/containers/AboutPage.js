import { Container, Row } from 'react-bootstrap'
import HCMUTE from "../static/HCMUTE.png"
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<Container 
            style={{ height: "75vh" }} 
            className="d-flex flex-column justify-content-md-center align-items-center">
            <Row className='my-5'></Row>
            <Row><h5>HCMC University of Technology and Education</h5></Row>
            <Row><h6>Faculty of Electrical and Electronics Engineering</h6></Row>
            <Row className="my-2"><img src={HCMUTE} alt=""></img></Row>
            <Row><h3>PROJECT 2</h3></Row>
            <Row><h2>BLOG WEB APPLICATION USING MERN APP</h2></Row>
            <Row><h6 className="mt-3">Doer: VŨ NGUYỄN ĐỨC MẠNH</h6></Row>
            <Row><h6 className="mt-2">Guiding Teacher: MSc. TRƯƠNG NGỌC HÀ</h6></Row>
            <Row className='mt-4'><Link to="/more"><h6>{"More information >"}</h6></Link></Row>
		</Container>
	)
}

export default About
