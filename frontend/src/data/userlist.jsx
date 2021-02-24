import React from 'react';


export const getUserListData = userlist => userlist.map(user => 
      ({
          image: <img src={user.photo_url} style={{ width: 50, height: 50, borderRadius: '50%' }} alt="" />,
          username: user.username,
          first_name: user.first_name,
          balance: user.balance,
          stock: <div className='font-success'>user</div>,
          start_date: "2011/4/19",
          action:<div><span onClick={()=> console.log('click')}><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
          <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
          </div>,
          id: user.id
          
      })
  )


export const productColumns = (translate) => {
  return [
    {
        name:translate("Image"),
        selector: 'image',
        sortable: false,
        center:true,
      },
      {
        name:translate("Username"),
        selector: 'username',
        sortable: true,
        center:true,
      },
      {
        name:translate("First Name"),
        selector: 'first_name',
        sortable: true,
        center:true,
      },
      {
        name:translate("Balance"),
        selector: 'balance',
        sortable: true,
        center:true,
      },
      {
        name:"Stock",
        selector: 'stock',
        sortable: true,
        center:true,
      },
      {
        name:"Start_date",
        selector: 'start_date',
        sortable: true,
        center:true,
      },
      {
        name:"Action",
        selector: 'action',
        center:true,
      },
]}