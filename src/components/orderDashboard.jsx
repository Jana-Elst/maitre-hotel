import { isEmpty } from "../functions";
import OrderCard from "./orderCard";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ordersForKitchen = (restaurantVariables) => {
    let ordersKitchen = [];
    const orders = restaurantVariables.orders;

    //alle orders waar een item status 'ordered' heeft
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
        <Card className="dashboard orders overflow-scroll">

            <CardHeader className="text-center visually-hidden">
                <CardTitle>Orders</CardTitle>
            </CardHeader>

            <CardContent>
                {!isEmpty(orders) ? (
                    <ul className="orders__list flex flex-row space-x-4">
                        {
                            orders.map((order) => (
                                <OrderCard key={order.id} order={order} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                            ))
                        }
                    </ul>
                ) : "<p>alle orders zijn verwerkt<p>"}
            </CardContent>

        </Card>
    );
};

export default ClientDashboard;