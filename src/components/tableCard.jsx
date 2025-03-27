import { createBill, getTotal } from "../functions"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const TableCard = ({ table, restaurantVariables, setRestaurantVariables }) => {
    const total = getTotal(restaurantVariables, table.id);

    return (
        <li>
            <button
                className="min-w-55"
                onClick={() => {
                    let total = getTotal(restaurantVariables, table.id);
                    setRestaurantVariables({
                        ...restaurantVariables,
                        activeState: {
                            ...restaurantVariables.activeState,
                            dashboard: "menu",
                            tableId: table.id,
                            totalTableActive: total
                        },

                        newOrder: {
                            id: restaurantVariables.orders.length + 1,
                            items: []
                        }
                    });
                }}>

                <Card className={`${table.status === "unavailable" ? "border-red-300 bg-red-50 hover:bg-red-50" : table.status === "reservation" ? "border-amber-300 bg-amber-50 hover:bg-amber-100" : "border-green-300 bg-green-50 hover:bg-green-100"} min-h-30`}>
                    <CardHeader className="flex justify-between">
                        <CardTitle className="">Tafel {table.id}</CardTitle>
                        <CardDescription className={`font-medium ${table.status === "unavailable" ? "text-red-800" : table.status === "reservation" ? "text-amber-800" : "text-green-800"}`}>{table.status}</CardDescription>
                    </CardHeader>

                    {
                        total ? <CardContent className='font-medium'>€ {total.toFixed(2)}</CardContent> : ""
                    }
                </Card>
            </button>
        </li>
    );
};

export default TableCard; 