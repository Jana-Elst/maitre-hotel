import MenuList from "./menuList";
import { isEmpty } from "../functions";
import { productData } from "../data";

const MenuDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
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

    // const stopOrder = () => {
    //     console.log("order is afgerond");
    //     //Send order to kitchen
    //     const id = Object.keys(orderKitchen).length + 1;
    //     {
    //         // !isEmpty(order) ? setOrderKitchen(
    //         //     {
    //         //         ...orderKitchen,
    //         //         [id]: {
    //         //             table: isActive.id,
    //         //             order: { ...order }
    //         //         }
    //         //     }
    //         // ) : "";
    //     }

    //     console.log(orderKitchen);

    //     //Add order to bill table
    //     {
    //         !isEmpty(order) ? setClientData(
    //             {
    //                 ...clientData,
    //                 //data toevoegen en checken of client al bestaat.
    //                 // [isActive.id]: {
    //                 //     ...order
    //                 // }
    //             }
    //         ) : "";
    //     }


    //     //Reset order
    //     setOrder({});

    //     //Back to tables
    //     setIsActive({
    //         dashboard: "tables",
    //         id: null,
    //     });
    // }

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