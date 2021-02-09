import React from 'react'
import {Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {translate} from 'react-switch-lang'
import { connect } from 'react-redux'

import { ContactUs as ContactUsText, YourName, Email, Message, Send} from '../../constant'
 
const ContactUs = props => {

	return (
		<Card className="height-equal">
		  <CardHeader>
		    <h5>{props.t(ContactUsText)}</h5>
		  </CardHeader>
		  <CardBody className="contact-form">
		    <Form className="theme-form">
		      <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
		      <FormGroup>
		        <Label for="exampleInputName">{props.t(YourName)}</Label>
		        <Input className="form-control" id="exampleInputName" type="text" defaultValue={props.name}/>
		      </FormGroup>
		      <FormGroup >
		        <Label className="col-form-label" htmlFor="exampleInputEmail1">{props.t(Email)}</Label>
		        <Input className="form-control" id="exampleInputEmail1" type="email" defaultValue={props.email}/>
		      </FormGroup>
		      <FormGroup >
		        <Label className="col-form-label" htmlFor="exampleInputEmail1">{props.t(Message)}</Label>
		        <textarea className="form-control textarea" rows="3" cols="50"></textarea>
		      </FormGroup>
		      <div className="text-sm-right">
		        <Button className="btn btn-primary-gradien">{props.t(Send)}</Button>
		      </div>
		    </Form>
		  </CardBody>
		</Card>
		)
}

const mapStateToProps = state => ({
	email: state.auth.user.email, 
	name: state.auth.user.first_name
})

export default connect(mapStateToProps)(translate(ContactUs));