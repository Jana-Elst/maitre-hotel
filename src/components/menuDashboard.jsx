import MenuList from "./menuList";
import { isEmpty } from "../functions";
import { productData } from "../data";

const MenuDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    console.log(restaurantVariables);

    const changeCategory = (category) => {
        console.log(category);
        let firstSubcategory;
        //set subcategory to first subcategory of category
        productData.subcategories.map((subcategory) =>
            subcategory.categoryId === category.id ?
                (firstSubcategory ? firstSubcategory = subcategory : "")
                : ""
        )

        setRestaurantVariables({
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                categoryId: category.id,
                subcategoryId: firstSubcategory
            }
        })
    }

    const stopOrder = () => {
        console.log("order is afgerond");
        console.log(restaurantVariables.activeState.tableId);
        //add newOrder to orders
        //remove newOrder
        //add order to bill + create one if their is no bill for the table
        const tmpResVars = {
            ...restaurantVariables,
            orders: [
                ...restaurantVariables.orders,
                restaurantVariables.newOrder
            ],
            tables: [
                restaurantVariables.tables.map(table => 
                    table.id === restaurantVariables.activeState.tableId ? { ...table, status: "unavailable"} : table
                )
            ],
            newOrder: [],
            activeState: {
                dashboard: "tables",
                tableId: null,
                categoryId: 1,
                subcategoryId: 11
            },
            bills:
                restaurantVariables.bills.some(bill => bill.paid === false && bill.tableId === restaurantVariables.activeState.tableId)
                    ? restaurantVariables.bills.map(bill =>
                        [bill.tableId === restaurantVariables.activeState.tableId ? { ...bill, orders: [...bill.orders, restaurantVariables.newOrder.id] } : bill]
                    )
                    : [...restaurantVariables.bills,
                    {
                        id: restaurantVariables.bills.length + 1,
                        orders: [restaurantVariables.newOrder.id],
                        paid: false,
                        tableId: restaurantVariables.activeState.tableId
                    }
                    ]

        }
        
        console.log(tmpResVars);
        setRestaurantVariables(tmpResVars);
    }

    return (
        <section className={`dashboard tables ${restaurantVariables.activeState.dashboard === "menu" ? "" : "hidden"}`}>
            <h2>Menu</h2>

            {/* navigatie != onderdelen menu */}
            <ul>
                {
                    productData.categories.map((category) => (
                        <li key={category.id}>
                            <button key={category.id} onClick={() => changeCategory(category)}> {category.name}</button>
                        </li>
                    ))
                }
            </ul>

            {/* subnavigatie */}
            <ul>
                {
                    productData.subcategories.map((subcategory) => (
                        subcategory.categoryId === restaurantVariables.activeState.categoryId ?
                            <button
                                key={subcategory.id}
                                onClick={() => setRestaurantVariables({
                                    ...restaurantVariables,
                                    activeState: {
                                        ...restaurantVariables.activeState,
                                        subcategoryId: subcategory.id
                                    }
                                })}
                            >{subcategory.name}</button> : ""
                    ))
                }
            </ul>

            {/* menu items */}
            <MenuList restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />

            <button onClick={() => stopOrder()}>bestelling afronden</button>
        </section >
    );
};

export default MenuDashboard;