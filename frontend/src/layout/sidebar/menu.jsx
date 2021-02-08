import {Home,Headphones} from 'react-feather'
import {General, MainFunctionality} from '../../constant'
export const MENUITEMS = [
    {
        menutitle:General,
        menucontent:MainFunctionality,
        Items:[
            {
                title: 'Dashboard', icon: Home, type: 'link', active: false, path: `${process.env.PUBLIC_URL}/`
            }
        ]
       
    },
    /*{
        menutitle:"Support",
        menucontent:"",
        Items:[
            {
                title: 'Raise Support', icon: Headphones, type: 'sub',active: false, children: [
                        { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
                ]
            }
        ]          
    },*/
    
            
]