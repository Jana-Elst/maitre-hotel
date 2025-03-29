// Je kan bij een rekening elementen verwijderen door op het item te klikken.
// Dit is een belangrijke hidden affordance ;))

//ik gebruikte de component library shadcn.

import { useState } from 'react'
import './App.css'

//different elements
import OrderDashboard from './components/orderDashboard';
import TableDashboard from './components/tableDashboard';
import DetailDashboard from './components/detailDashboard.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [restaurantVariables, setRestaurantVariables] = useState(
    {
      tables: [
        { id: 1, status: "unavailable" },
        { id: 2, status: "unavailable" },
        { id: 3, status: "reservation" },
        { id: 4, status: "available" },
        { id: 5, status: "available" },
        { id: 6, status: "available" },
        { id: 7, status: "available" },
        { id: 8, status: "available" },
        { id: 9, status: "available" },
        { id: 10, status: "available" }
      ],

      bills: [
        {
          id: 1,
          orders: [1],
          paid: false,
          tableId: 1
        },
        {
          id: 2,
          orders: [2],
          paid: false,
          tableId: 2
        },
      ],

      newOrder: [],

      orders: [
        {
          id: 1,
          items: [
            {
              productId: 111,
              amount: 3,
              status: "ordered" //ordered - ready - served
            },
            {
              productId: 112,
              amount: 3,
              status: "ordered" //ordered - ready - served
            }
          ],
        },
        {
          id: 2,
          items: [
            {
              productId: 111,
              amount: 3,
              status: "ready" //ordered - ready - served
            },
            {
              productId: 113,
              amount: 3,
              status: "ready" //ordered - ready - served
            }
          ]
        }, {
          id: 3,
          items: [
            {
              productId: 111,
              amount: 3,
              status: "served" //ordered - ready - served
            },
            {
              productId: 112,
              amount: 3,
              status: "served" //ordered - ready - served
            }
          ],
        },
      ],

      games: [
        { gameId: 311, tableIds: [1, 2] }
      ],

      activeState: {
        dashboard: "tables",
        tableId: null,
        categoryId: 1,
        subcategoryId: 11,
        totalTableActive: 0
      }
    }
  );

  return (
    <div className='app'>
      <Header/>
      <main className='dashboard'>
        <OrderDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
        <TableDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
        <DetailDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      </main>
      <Footer />

    </div >
  )
}


export default App
