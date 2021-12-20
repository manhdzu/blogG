import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewPost = ({ post, onDelete, onEdit }) => {

   const user = useSelector(state => state.auth.user);

   const postDate = getFormattedDate(post.date);
   return (
      <Container className="mt-4 viewPost">
         <Row>
            <Link to="/blog">
               <Button variant="light" className="styleBtn" >
                  ←
               </Button>
            </Link>
         </Row>
         <Row>
            <Col className="text-center postTitle">
               <h2>{post.title}</h2>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
            <Col>{post.body}</Col>
         </Row>
         <Row className="d-flex flex-column font-italic footerStyle">
            <Col>Created by : {post.author}</Col>
            <Col>Date: {postDate}</Col>
         </Row>
         {post.author == user.user_name && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button variant="outline-danger" onClick={onDelete}>
                     Delete
                  </Button>
               </Col>
            </Row>
         )}
      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
