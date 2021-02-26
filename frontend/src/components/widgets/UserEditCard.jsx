import React, {useEffect, useState} from 'react'
import { Balance, ID, Email, Profile,Bio,MarkJecno,Designer,Password,Website,Save,EditProfile,Company,Username,UsersCountryMenu,AboutMe,UpdateProfile,UsersTableTitle,FirstName,LastName,Address,EmailAddress,PostalCode,Country,City,Edit,Update,Delete} from '../../constant'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, FormGroup, Label, Input, InputGroup,InputGroupAddon, InputGroupText,  Button } from 'reactstrap'
import { Users } from 'react-feather'
import Breadcrumb from '../../layout/breadcrumb'
import { translate } from 'react-switch-lang'
import { useParams } from 'react-router-dom'

import { api, USERS_URL } from '../../actions/requests'
import { tokenConfig } from '../../actions/auth'
import { getUserBots } from '../../actions/user'
import { toast } from 'react-toastify'

import MessengersCard from './MessengersCard' 



export const UserEditCard = props => {
	const { userId } = useParams()
	const [user, setUser] = useState({})

	useEffect(() => {
		// load user data and set it by setUser
		loadUser()
	}, [])

	const loadUser = () => {
		api.get(USERS_URL + userId, tokenConfig())
			.then(res => {setUser(res.data)})
			.catch(err => toast('Не удалось загрузить данные о пользователе ID'+userId))
	}

	// props.data is object with userData
	return (
		<div className="edit-profile">
		  <Row>
		    <Col xl="4">
		      <Card>
		        <CardHeader>
		          <h4 className="card-title mb-0">{props.t(Profile)}</h4>
		          <div className="card-options">
		            <a className="card-options-collapse" href="#javascript">
		              <i className="fe fe-chevron-up"></i>
		            </a>
		            <a className="card-options-remove" href="#javascript">
		              <i className="fe fe-x"></i>
		            </a>
		          </div>
		        </CardHeader>
		        <CardBody>
		          <Form>
		            <Row className="mb-2">
		              <div className="col-auto">
		                <Media className="img-70 rounded-circle" alt="" src={user.photo_url} />
		              </div>
		              <Col>
		                <h3 className="mb-1">{user.first_name}</h3>
		                <p className="mb-4">{user.username}</p>
		              </Col>
		            </Row>
		            <FormGroup>
		              <Label className="form-label">{props.t(ID)}</Label>
		              <InputGroup>
                        <InputGroupAddon addonType="prepend"><InputGroupText>{"#"}</InputGroupText></InputGroupAddon>
		              	<Input className="form-control" placeholder={props.t(ID)} value={user.id} readOnly/>
                      </InputGroup>
		            </FormGroup>
		            <FormGroup>
		              <Label className="form-label">{props.t(Balance)}</Label>
		              <InputGroup>
                        <InputGroupAddon addonType="prepend"><InputGroupText>{"₽"}</InputGroupText></InputGroupAddon>
		              	<Input className="form-control" placeholder={props.t(Balance)} value={user.balance} readOnly/>
                      </InputGroup>
		            </FormGroup>
		            <div className="form-footer">
		              <button className="btn btn-primary btn-block">{props.t(Save)}</button>
		            </div>
		          </Form>
		        </CardBody>
		      </Card>
		    </Col>
		    <Col xl="8">
		      <Form className="card">
		        <CardHeader>
		          <h4 className="card-title mb-0">{props.t(EditProfile)}</h4>
		          <div className="card-options">
		            <a className="card-options-collapse" href="#javascript">
		              <i className="fe fe-chevron-up"></i>
		            </a>
		            <a className="card-options-remove" href="#javascript">
		              <i className="fe fe-x"></i>
		            </a>
		          </div>
		        </CardHeader>
		        <CardBody>
		          <Row>
		            <Col sm="6" md="6">
		              <FormGroup>
		                <Label className="form-label">{props.t(Username)}</Label>
		                <Input className="form-control" type="text" placeholder={props.t(Username)} defaultValue={user.username}/>
		              </FormGroup>
		            </Col>
		            <Col sm="6" md="6">
		              <FormGroup>
		                <Label className="form-label">{props.t(Email)}</Label>
		                <Input className="form-control" type="email" placeholder={props.t(Email)} defaultValue={user.email} />
		              </FormGroup>
		            </Col>
		            <Col sm="6" md="12">
		              <FormGroup>
		                <Label className="form-label">{props.t(FirstName)}</Label>
		                <Input className="form-control" type="text" placeholder={props.t(Company)} defaultValue={user.first_name}/>
		              </FormGroup>
		            </Col>
		            
		          </Row>
		        </CardBody>
		        <CardFooter className="text-right">
		          <button className="btn btn-primary" type="submit">{props.t(UpdateProfile)}</button>
		        </CardFooter>
		      </Form>
		    </Col>
		    
		    <MessengersCard bots={getUserBots(user)} />
		  </Row>
		</div>
		)
}

export default translate(UserEditCard);