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
        { id: 1, status: "available" }, // Table 1
        { id: 2, status: "available" }, // Table 2
        { id: 3, status: "available" }, // Table 3
        { id: 4, status: "available" }, // Table 4
        { id: 5, status: "available" }, // Table 5
        { id: 6, status: "available" }, // Table 6
        { id: 7, status: "available" }, // Table 7
        { id: 8, status: "available" }, // Table 8
        { id: 9, status: "available" }, // Table 9
        { id: 10, status: "available" }, // Table 10
      ],

      bills: [
        {
          id: 1,
          tableID: 2,
          orders: [1],
          paid: false
        }
      ],

      orders: [
        {
          id: 1,
          tableID: 1,
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
          tableID: 4,
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
        tableID: null
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
      {/* <ClientDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} /> */}
      {/* <ClientDetail restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} /> */}
      <TableDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
      {/* <MenuDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} /> */}
    </div >
  )
}


export default App
