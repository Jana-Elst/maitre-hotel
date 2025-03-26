import { productData } from "../data";
import { createBill, getTotal } from "../functions"

const clientDetail = ({ restaurantVariables, setRestaurantVariables }) => {
    const products = productData.products;
    const items = restaurantVariables.newOrder.items;
    const billItems = createBill(restaurantVariables, restaurantVariables.activeState.tableId);

    return (
        <article className={`dashboard clientdetail ${restaurantVariables.activeState.dashboard === "menu" ? "" : "hidden"}`} >
            <h3>Tafel {restaurantVariables.activeState.tableId}</h3>
            <ul>

                {
                    billItems ?
                        billItems.map((item) => {
                            const product = products.find(p => p.id === item.productId);
                            return (
                                <li>
                                    <p>{item.amount} x {product.name}</p>
                                    <p>{product.price}</p>
                                </li>
                            )
                        }) : ""
                }

            </ul>
            <ul>
                {
                    items ?
                        items.map((item) => {
                            const product = products.find(p => p.id === item.productId);
                            return (
                                <li>
                                    <p>{item.amount} x {product.name}</p>
                                    <p>{product.price}</p>
                                </li>
                            )
                        }) : ""
                }
            </ul>

            {/* get total from all orders from bill --> js functie schrijven */}
            <p>€ {restaurantVariables.activeState.totalTableActive}</p>
            <button>afrekenen</button>
        </article>
    );
};

export default clientDetail;