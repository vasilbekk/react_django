import {Home,Box} from 'react-feather'
import {General, MainFunctionality} from '../../constant'
export const MENUITEMS = [
    {
        menutitle:General,
        menucontent:MainFunctionality,
        Items:[
            {
                title: 'Dashboard', 
                icon: Home, type: 'link', 
                active: false, 
                path: `${process.env.PUBLIC_URL}/`
            }
        ]
       
    },
    {
        menutitle:"Test panel",
        menucontent:"",
        permission: 'view_project',
        Items:[
            {
                title: 'Projects', 
                icon: Box, 
                type: 'link',
                active: false,
                path: `${process.env.PUBLIC_URL}/test`,
                permission: 'add_test'
                
            }
        ]          
    },
    {
        menutitle:"Admin Panel",
        menucontent:"",
        Items:[
            {
                title: 'Projects', 
                icon: Box, 
                type: 'sub',
                active: false, 
                children: [
                    { 
                        title: 'Create a Project', 
                        type: 'exteral_link', 
                        path: 'http://support.pixelstrap.com/help-center'
                    },
                    { 
                        title: 'List of Projects', 
                        type: 'exteral_link', 
                        path: 'http://support.pixelstrap.com/help-center'
                    }
                ]
            }
        ]          
    },      
]


export const getMenuItemsByUser = user => {
   return MENUITEMS
}
