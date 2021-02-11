import React from 'react'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Error403 from './error403'



const mapStateToProps = state => ({
	permissions: state.auth.user.permissions
})

export default connect(mapStateToProps)(PermissionRoute)