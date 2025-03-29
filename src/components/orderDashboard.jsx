import { ordersForKitchen } from "../functions";
import OrderCard from "./orderCard";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const orderDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className={`ordersDashboard ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
            </CardHeader>

            <CardContent className="ordersDashboard__content">
                    {restaurantVariables.orders
                        ? (
                            <ul className="ordersDashboard__list">
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
        </Card >
    );
};

export default orderDashboard;