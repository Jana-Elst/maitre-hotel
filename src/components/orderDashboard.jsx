import { ordersForKitchen } from "../functions";
import OrderCard from "./orderCard";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



const orderDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    console.log('hier kijken!!!',restaurantVariables.orders);
    return (
        <Card className="dashboard orders h-[33vh] overflow-hidden">
            <CardHeader>
                <CardTitle>Orders</CardTitle>
            </CardHeader>

            <CardContent>
                {restaurantVariables.orders
                    ? (
                        <ul className="orders__list flex flex-row space-x-4 h-full">
                            {
                                ordersForKitchen(restaurantVariables).map((order) => (
                                    <OrderCard
                                        key={order.id}
                                        order={order}
                                        setRestaurantVariables={setRestaurantVariables}
                                        restaurantVariables={restaurantVariables} />
                                ))
                            }
                        </ul>)
                    : (<p>Alle orders zijn verwerkt.</p>)}
            </CardContent>
        </Card>
    );
};

export default orderDashboard;