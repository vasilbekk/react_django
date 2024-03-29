import React, { Fragment, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import DataTable from 'react-data-table-component';
import {productColumns, getUserListData} from '../../data/userlist'
import { ProductListTitle, ProductListDesc } from '../../constant';
import { connect } from 'react-redux'
import { loadAdminUserList } from '../../actions/admin'
import { translate } from 'react-switch-lang'

import { Users as UsersText, UsersListDescription, AdminPanel as AdminPanelText, Loading as LoadingText } from '../../constant'

import { Redirect } from 'react-router-dom'
const UserListPage = (props) => {

  useEffect(() => {
    props.dispatch(loadAdminUserList)
  }, [])

    return (
          <Fragment>
          <Breadcrumb parent={props.t(AdminPanelText)} title={props.t(UsersText)}/>
          <Container fluid={true}>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>{props.t(UsersText)} </h5><span>{props.t(UsersListDescription)}</span>
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive product-table">
                                <DataTable
                                    noHeader
                                    columns={productColumns(props.t)}
                                    data={getUserListData(props.users)}
                                    expandOnRowClicked
                                    expandableRows
                                    progressPending={props.usersLoading?true:false}
                                    highlightOnHover
                                    expandableRowsComponent={<_Redirect />}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
           </Container>
           </Fragment>
    )

  }

const _Redirect = props => {
  return <Redirect to={`${props.data.id}`} />
}


const mapStateToProps = state => ({
  users: state.admin.users,
  usersLoading: state.admin.usersLoading
})

export default connect(mapStateToProps)(translate(UserListPage))


