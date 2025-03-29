import { ordersForKitchen } from "../functions";
import OrderCard from "./orderCard";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



const orderDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className="overflow-hidden">
            <CardHeader>
                <CardTitle>Orders</CardTitle>
            </CardHeader>

            <CardContent>
                {restaurantVariables.orders
                    ? (
                        <ul className="orders__list flex flex-row space-x-4 h-full">
                            {
                                ordersForKitchen(restaurantVariables).map((order) =>
                                    order && order.id
                                        ? (
                                            <OrderCard
                                                key={order.id}
                                                order={order}
                                                setRestaurantVariables={setRestaurantVariables}
                                                restaurantVariables={restaurantVariables} />
                                        )
                                        : null
                                )
                            }
                        </ul>)
                    : ""
                }
            </CardContent>
        </Card>
    );
};

export default orderDashboard;