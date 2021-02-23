// dashbaord
import DashboardPage from '../components/pages/Dashboard'


export const routes = [
        { path:`${process.env.PUBLIC_URL}/`, Component:DashboardPage, permission: null},

        // Projects
       	{path:`${process.env.PUBLIC_URL}/admin/projects`, Component:DashboardPage, permission: 'view_project'},

        // Users
        { path:`${process.env.PUBLIC_URL}/admin/users`, Component:DashboardPage, permission: 'view_user'},
        { path:`${process.env.PUBLIC_URL}/admin/users/:userId`, Component:DashboardPage, permission: 'view_user'},

]