import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../static/small.png";
import info from "../../static/info.png";
const Navigationbar = ({ auth, onClick }) => {

   const user = useSelector(state => state.auth.user);
   return <Navbar bg="dark" variant="dark" expand="sm"className="mb-3" style={{ minHeight: "4rem" }}>
      <Link to="/blog">
         <Navbar.Brand>
            <img src={logo} style={{ height: 30, width: 30 }} className="d-inline-block align-top" alt="logo"/>
            {" BlogG "}
         </Navbar.Brand>
      </Link>

      <Nav className="mr-auto">
         <Link to="/about">
            <img src={info} style={{ height: 18, width: 18 }} alt="info" />
         </Link>
      </Nav>
      
      <Nav className="ml-auto">
         <Nav className="mr-3 mt-1 font-weight-light text-white">
            {auth ? (<h5> Welcome, {user.user_name}</h5>):(null)}
         </Nav>
         {auth ? (
            <Link to="/logout">
               <Button variant="outline-light" className="mr-sm-2" onClick={onClick}>
                  Logout
               </Button>
            </Link>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav>
   </Navbar>
};

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
