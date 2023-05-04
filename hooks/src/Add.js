import React, { useState } from "react";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    main_img: "",
    second_img: "",
    title:"",
    duration:"",
    date:"",
    rate:"",
    genre:"",
    description: "",
    
  });
  const onStarClick = (nextValue) => {
    setNewMovie({ ...newMovie, rating: nextValue });
  };
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add a Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
  <Form className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="Enter main_img" onChange={handleChange} name="main_img" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>image url</Form.Label>
      <Form.Control type="text" placeholder="img url" onChange={handleChange}  name="second_img" />
    </Form.Group>
  </Form>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>title</Form.Label>
  <Form.Control type="text" placeholder="title" onChange={handleChange}  name="title" />
</Form.Group>
</Form>

  <Form className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>duration</Form.Label>
      <Form.Control  onChange={handleChange} name="duration" />
    </Form.Group>
    <Form className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>date</Form.Label>
      <Form.Control  onChange={handleChange} name="date" />
    </Form.Group>
    <StarRatingComponent 
    name="rate1" 
    starCount={5}
    value={newMovie.rate}
    onStarClick={onStarClick}
  />
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Select defaultValue="Choose genre" onChange={handleChange} name="genre" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={handleChange} name="description" />
  </Form.Group>
        <option>trailler</option>
        <option>action</option>
        <option>romance</option>

      </Form.Select>
    </Form.Group>


  </Form>


</Form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=> { addMovie(newMovie); handleClose()}}>
       Add
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  );
};

export default Add;
