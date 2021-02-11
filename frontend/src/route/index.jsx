// dashbaord
import DashboardPage from '../components/pages/Dashboard'


export const routes = [
        { path:`${process.env.PUBLIC_URL}/`, Component:DashboardPage, permission: 'view_user'},      
]