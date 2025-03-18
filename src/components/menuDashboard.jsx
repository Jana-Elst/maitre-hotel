import MenuList from "./menuList";
import { useState } from 'react'
import { isEmpty } from "../functions";

const stopOrder = (setOrder, order, orderKitchen, setOrderKitchen, setIsActive, isActive, clientData, setClientData) => {
    console.log("order is afgerond");
    //Send order to kitchen
    const id = Object.keys(orderKitchen).length + 1;

    {
        !isEmpty(order) ? setOrderKitchen(
            {
                ...orderKitchen,
                [id]: {
                    table: isActive.id,
                    order: { ...order }
                }
            }
        ) : "";
    }

    console.log(orderKitchen);

    //Add order to bill table
    {
        !isEmpty(order) ? setClientData(
            {
                ...clientData,
                //data toevoegen en checken of client al bestaat.
                // [isActive.id]: {
                //     ...order
                // }
            }
        ) : "";
    }


    //Reset order
    setOrder({});

    //Back to tables
    setIsActive({
        dashboard: "tables",
        id: null,
    });
}

const MenuDashboard = ({ productData, isActive, setIsActive, order, setOrder, orderKitchen, setOrderKitchen, clientData, setClientData }) => {
    const [category, setCategory] = useState("dranken");
    const [subCategory, setSubCategory] = useState("thee");

    return (
        <section className={`dashboard tables ${isActive.dashboard === "menu" ? "" : "hidden"}`}>
            <h2>Menu</h2>

            {/* navigatie != onderdelen menu */}
            <ul>
                {Object.keys(productData).map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => {
                                setCategory(category);
                                setSubCategory(Object.keys(productData[category][0])); //set subcategory to first subcategory of category
                            }
                            }
                        >{category}</button></li>
                ))}
            </ul>

            {/* subnavigatie */}
            <ul>
                {
                    productData[category].map((subCategory) => (
                        Object.keys(subCategory)[0] !== "noSubcategory" ?
                            <li key={Object.keys(subCategory)} onClick={() => setSubCategory(Object.keys(subCategory)[0])}><button>{Object.keys(subCategory)}</button></li>

                            : null))
                }
            </ul>

            {/* menu items */}
            <MenuList productData={productData[category].find((item) => item[subCategory])} subCategory={subCategory} order={order} setOrder={setOrder} />
            <button onClick={() => stopOrder(setOrder, order, orderKitchen, setOrderKitchen, setIsActive, isActive, clientData, setClientData)}>bestelling afronden</button>
        </section >
    );
};

export default MenuDashboard;