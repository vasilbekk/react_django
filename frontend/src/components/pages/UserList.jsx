import React, { Fragment, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import DataTable from 'react-data-table-component';
import {productColumns, getUserListData} from '../../data/userlist'
import { ProductListTitle, ProductListDesc } from '../../constant';
import { connect } from 'react-redux'
import { loadAdminUserList } from '../../actions/admin'


const UserListPage = (props) => {

  useEffect(() => {
    props.dispatch(loadAdminUserList)
  }, [])

    return (
          <Fragment>
          <Breadcrumb parent="ECommerce" title="Product List"/>
          <Container fluid={true}>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>{ProductListTitle} </h5><span>{ProductListDesc}</span>
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive product-table">
                                <DataTable
                                    noHeader
                                    columns={productColumns}
                                    data={getUserListData(props.users)}
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

const mapStateToProps = state => ({
  users: state.admin.users
})

export default connect(mapStateToProps)(UserListPage)


