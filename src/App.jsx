import { useState } from 'react'
import './App.css'
import ClientDashboard from './components/clientDashboard';
import OrderDashboard from './components/orderDashboard';
import TableDashboard from './components/tableDashboard';
import MenuDashboard from './components/menuDashboard';
import ClientDetail from './components/clientDetail';




function App() {
  const productData = {
    dranken: [
      {
        koffie: [
          {
            name: 'Espresso',
            price: 3,
          },
          {
            name: 'Latte',
            price: 4.30,
          },
          {
            name: 'Capuccino',
            price: 4.30,
          },
        ]
      },
      {
        thee: [
          {
            name: 'Gemberthee',
            price: 4.50
          },
          {
            name: 'Muntthee',
            price: 4
          },
          {
            name: 'Kamillethee',
            price: 3
          },
        ]
      },
    ],

    brunch: [{
      noSubcategory: [
        {
          name: 'cinnamon roll',
          price: 3.50,
        },
        {
          name: 'Pancakes',
          price: 8,
        },
        {
          name: 'Yoghurt met granola',
          price: 6,
        }]
    }
    ],

    gezelschapsspel: [{
      noSubcategory:
        [
          {
            name: 'Rummikub',
            value: 4,
          },
          {
            name: 'Azul',
            value: 1,
          },
          {
            name: 'Uno',
            value: 4,
          },
          {
            name: 'Carcasonne',
            value: 1,
          },
          {
            name: 'Ticket to Ride',
            value: 1,
          },
        ]
    }]
  };

  const restaurantData = {
    tables: [
      {
        id: 1,
        seats: 4,
        available: true,
        reservation: null,
      },
      {
        id: 2,
        seats: 4,
        available: true,
        reservation: null,

      },
      {
        id: 3,
        seats: 2,
        available: true,
        reservation: null,

      },
      {
        id: 4,
        seats: 8,
        available: true,
        reservation: null,

      },
      {
        id: 5,
        seats: 4,
        available: true,
        reservation: null,

      },
      {
        id: 6,
        seats: 6,
        available: true,
        reservation: null,

      },
      {
        id: 7,
        seats: 4,
        available: true,
        reservation: null,

      },
      {
        id: 8,
        seats: 4,
        available: true,
        reservation: null,

      },
      {
        id: 9,
        seats: 4,
        available: true,
        reservation: null,

      },
      {
        id: 10,
        seats: 4,
        available: true,
        reservation: null,

      },
    ]
  }

  const [ordersKitchen, setOrdersKitchen] = useState({}); //gerechten die keuken moet maken
  const [clientData, setClientData] = useState({}); //alles wat de klant besteld heeft en moet betalen
  const [order, setOrder] = useState({}); //order dat opgenomen wordt

  const [isActive, setIsActive] = useState({ dashboard: "tables", id: null });

  return (
    <div className='app' >
      <h1 className="visually-hidden">Restaurant Dashboard</h1>
      <OrderDashboard />
      <ClientDashboard />
      <ClientDetail isActive={isActive} clientData={clientData} setClientData={setClientData} order={order} setOrder={setOrder} />
      <TableDashboard tables={restaurantData.tables} isActive={isActive} setIsActive={setIsActive} />
      <MenuDashboard productData={productData} isActive={isActive} setIsActive={setIsActive} clientData={clientData} setClientData={setClientData} setOrder={setOrder} order={order} />
    </div >
  )
}

export default App
