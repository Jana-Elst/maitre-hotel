import { useState } from 'react'
import './App.css'
import ClientDashboard from './components/clientDashboard';
import OrderDashboard from './components/orderDashboard';
import TableDashboard from './components/tableDashboard';
import MenuDashboard from './components/menuDashboard';
import ClientDetail from './components/clientDetail';




function App() {
  const [restaurantVariables, setRestaurantVariables] = (
    {
      tables: {
        tableID: 1,
        tableStatus: false,
        orders: {
          orderID: {
            productID: {
              amount: 1,
              status: "ordered"
            }
          }
        },

        games: [{
          gameID: 1,
          tableIDs: [3]
        }]

      orders: [
          {}
        ]
      },

      activeState: {
        dashboard: "tables",
        tableID: null
      }
    }
  );

  const [orderKitchen, setOrderKitchen] = useState({}); //gerechten die keuken moet maken
  const [clientData, setClientData] = useState({}); //alles wat de klant besteld heeft en moet betalen
  const [order, setOrder] = useState({}); //order dat opgenomen wordt

  const [isActive, setIsActive] = useState({ dashboard: "tables", id: null });

  return (
    <div className='app' >
      <h1 className="visually-hidden">Restaurant Dashboard</h1>
      <OrderDashboard orderKitchen={orderKitchen} />
      <ClientDashboard />
      <ClientDetail isActive={isActive} clientData={clientData} setClientData={setClientData} order={order} setOrder={setOrder} />
      <TableDashboard tables={restaurantData.tables} isActive={isActive} setIsActive={setIsActive} />
      <MenuDashboard productData={productData} isActive={isActive} setIsActive={setIsActive} clientData={clientData} setClientData={setClientData} setOrder={setOrder} order={order} setOrderKitchen={setOrderKitchen} orderKitchen={orderKitchen} />
    </div >
  )
}

export default App
