import React from 'react'
import {Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap'
 
const ContactUs = props => {

	return (
		<Card className="height-equal">
		  <CardHeader>
		    <h5>ContactUs</h5>
		  </CardHeader>
		  <CardBody className="contact-form">
		    <Form className="theme-form">
		      <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
		      <FormGroup>
		        <Label for="exampleInputName">YourName</Label>
		        <Input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
		      </FormGroup>
		      <FormGroup >
		        <Label className="col-form-label" htmlFor="exampleInputEmail1">Email</Label>
		        <Input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
		      </FormGroup>
		      <FormGroup >
		        <Label className="col-form-label" htmlFor="exampleInputEmail1">Message</Label>
		        <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
		      </FormGroup>
		      <div className="text-sm-right">
		        <Button className="btn btn-primary-gradien">Send</Button>
		      </div>
		    </Form>
		  </CardBody>
		</Card>
		)
}

export default ContactUs;