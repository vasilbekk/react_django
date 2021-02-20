import {Home,Box} from 'react-feather'
import {General, MainFunctionality} from '../../constant'
import { isUserHavePermission } from '../../actions/user'
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
        menutitle:"Admin Panel",
        menucontent:"",
        Items:[
            {
                title: 'Projects', 
                icon: Box, 
                type: 'sub',
                active: false,
                permission: 'view_project',
                children: [
                    { 
                        title: 'Create a Project', 
                        type: 'exteral_link', 
                        path: 'http://support.pixelstrap.com/help-center',
                        permission: 1
                    },
                    { 
                        title: 'List of Projects', 
                        type: 'exteral_link', 
                        path: 'http://support.pixelstrap.com/help-center',
                        permission: 'view_project'
                    }
                ]
            }
        ]          
    },      
]


export const getMenuItemsByUser = user => {
   return MENUITEMS.filter(block => {
    // Если у блока есть ограничение, то проверяет и возвращает, имеет приоритет надо всеми
    if (block.permission) return isUserHavePermission(user, block.permission)
    // Создает новый массив ссылок в блоке, отфильтрованных по ограничениям
    var items = block.Items.filter(item => {
        // Если у ссылки есть ограчение, проверяет
        if (item.permission) {
            // Если это не ссылка, а блок ссылок, то фильтрует и подссылки
            var childrenStatus = true
            if (item.children) {
                // Заменяет на отфильтрованный массив подссылок
                item.children = item.children.filter(subitem => isUserHavePermission(user, subitem.permission))
                childrenStatus = item.children.length>0?true:false
            }
            return isUserHavePermission(user, item.permission) && childrenStatus
        }
        // Если у ссылки нет ограничений, значит можно использовать
        return true
    })
    // Заменяет на отфильтрованный массив
    block.Items = items
    return items.length > 0
   })
}
