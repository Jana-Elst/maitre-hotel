import { isEmpty } from "../functions";
import OrderCard from "./orderCard";

const ordersForKitchen = (restaurantVariables) => {
    let ordersKitchen = [];
    const orders = restaurantVariables.orders;

    //alle orders waar een item status 'ordered' heeft

    console.log("orders", orders);


    orders.map(order => {
        let isServed = true;
        const items = Object.values(order.items);

        items.map(item => {
            if (item.status !== "served") {
                isServed = false;
            }
        });

        if (!isServed) {
            ordersKitchen.push(order);
        }
    });
    return ordersKitchen;
}

const ClientDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    const orders = ordersForKitchen(restaurantVariables);
    return (
        <section className="dashboard orders">
            <h2>Orders</h2>

            {!isEmpty(orders) ? (
                <ul className="orders__list">
                    {
                        orders.map((order) => (
                            <OrderCard key={order.id} order={order} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                        ))
                    }
                </ul>
            ) : "<p>alle orders zijn verwerkt<p>"}
        </section>
    );
};

export default ClientDashboard;