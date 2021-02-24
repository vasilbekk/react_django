import React, { Fragment,useEffect,useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { Users, MyProfile,Bio,MarkJecno,Designer,Password,Website,Save,EditProfile,Company,Username,UsersCountryMenu,AboutMe,UpdateProfile,UsersTableTitle,FirstName,LastName,Address,EmailAddress,PostalCode,Country, UsersTableHeader,City,Edit,Update,Delete} from '../../constant'
import UserEditCard from '../widgets/UserEditCard'
import {translate} from 'react-switch-lang'


const UserEditPage = (props) => {

  const [data,setData] = useState([])

  useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
  },[])

  return (
    <Fragment>
      <Breadcrumb parent={props.t(Users)} title={props.t(EditProfile)} />
      <Container fluid={true}>
        <UserEditCard data={data}/>
      </Container>
    </Fragment>
  );
}

export default translate(UserEditPage);