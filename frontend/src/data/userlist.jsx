import React from 'react';


export const getUserListData = userlist => userlist.map(user => 
        {
            image: <img src={user.photo_url} style={{ width: 50, height: 50 }} alt="" />,
            product_name: "Red Lipstick",
            product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
            amount: "$10",
            stock: <div className='font-success'>In Stock</div>,
            start_date: "2011/4/19",
            action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
            <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
            </div>
            
        },
    )
    

export const productColumns = [
    {
        name:"Image",
        selector: 'image',
        sortable: true,
        center:true,
      },
      {
        name:"Product_Name",
        selector: 'product_name',
        sortable: true,
        center:true,
      },
      {
        name:"Product_desc",
        selector: 'product_desc',
        sortable: true,
        center:true,
      },
      {
        name:"Amount",
        selector: 'amount',
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
        sortable: true,
        center:true,
      },
];