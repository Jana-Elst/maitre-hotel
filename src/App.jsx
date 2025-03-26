import { useState, useEffect } from 'react'
import './App.css'

//different elements
import ClientDashboard from './components/clientDashboard';
import OrderDashboard from './components/orderDashboard';
import TableDashboard from './components/tableDashboard';
import MenuDashboard from './components/menuDashboard';
import ClientDetail from './components/clientDetail';

//imported data
import { productData, restaurantData } from './data.js';

const updateRestaurantData = (setRestaurantVariables, restaurantVariables) => {
  console.log('update data');
  const tableInformation = restaurantData().tables.map(table => ({
    id: table.id,
    status: "available"
  }));

  let gameInformation = {};
  const categoryGames = productData().categories.find(category => category.name === 'Gezelschapsspelen');
  if (categoryGames) {
    const gameSubCategoryIds = categoryGames.subcategoryIds;
    const gameData = productData().products.filter(product => gameSubCategoryIds.includes(product.subcategoryID));

    gameInformation = gameData.map(game => ({
      id: game.id,
      tableIds: []
    }));
  }

  setRestaurantVariables({
    ...restaurantVariables,
    tables: tableInformation,
    games: gameInformation
  });
}

function App() {
  const [restaurantVariables, setRestaurantVariables] = useState(
    {
      tables: [
        { id: 1, status: "unavailable" },
        { id: 2, status: "unavailable" },
        { id: 3, status: "reseravation" },
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
        }
      ],

      games: [
        { id: 1, tableIds: [3] }
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

  //zorgen dat functie alleen in het begin uitgevoerd wordt
  // useEffect(() => {
  //   updateRestaurantData(setRestaurantVariables, restaurantVariables);
  //   console.log(restaurantVariables)
  // }, []);

  return (
    <div className='app' >
      <h1 className="visually-hidden">Restaurant Dashboard</h1>
      <OrderDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      <ClientDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      <ClientDetail restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      <TableDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      <MenuDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
    </div >
  )
}


export default App
