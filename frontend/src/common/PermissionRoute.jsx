import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Error403 from '../components/auth/error403'

const PermissionRoute = ({path, component: Component, permission, permissions}) => (
	<Fragment>
		{permissions.includes(permission)?<PrivateRoute path={path} component={Component}/>:<Error403 />}
	</Fragment>
	)


const mapStateToProps = state => ({
	permissions: state.auth.user.permissions
})

export default connect(mapStateToProps)(PermissionRoute)