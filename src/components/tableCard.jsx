import { createBill, getTotal } from "../functions"
import { useState } from 'react'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const TableCard = ({ table, restaurantVariables, setRestaurantVariables, screen }) => {
    const total = getTotal(restaurantVariables, table.id);

    const handleClick = () => {
        let total = getTotal(restaurantVariables, table.id);
        let tmpResVar;
        screen === "dashboardScreen"
            ? tmpResVar = {
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
            }
            : screen === "reservationScreen"
                ? tmpResVar = {
                    ...restaurantVariables,
                    activeState: {
                        ...restaurantVariables.activeState,
                        tableId: table.id
                    }
                }
                : tmpResVar = { ...restaurantVariables }

        restaurantVariables.tables.map(t => {
            t.id === table.id
                ? console.log(t)
                : console.log(t)
        });

        setRestaurantVariables(tmpResVar);
    }

    const isDisabled = () => {
        let isDisabled = false;

        if (screen === "reservationScreen" && table.status !== "available") {
            isDisabled = true;
        }

        return isDisabled
    }

    return (
        <li>
            <button
                className="min-w-55"
                onClick={() => handleClick()}
                disabled={isDisabled()}
            >
                {
                    screen === "dashboardScreen"
                        ? <Card className={`${table.status === "unavailable" ? "border-red-300 bg-red-50 hover:bg-red-100" : table.status === "reservation" ? "border-amber-300 bg-amber-50 hover:bg-amber-100" : "border-green-300 bg-green-50 hover:bg-green-100"} min-h-30`}>
                            <CardHeader className="flex justify-between">
                                <CardTitle className="">Tafel {table.id}</CardTitle>
                                <CardDescription className={`font-medium ${table.status === "unavailable" ? "text-red-800" : table.status === "reservation" ? "text-amber-800" : "text-green-800"}`}>{table.status}</CardDescription>
                            </CardHeader>

                            {
                                total ? <CardContent className='font-medium'>€ {total.toFixed(2)}</CardContent> : ""
                            }
                        </Card>
                        : screen === "reservationScreen"
                            ? <Card className={`${isDisabled() ? "opacity-50" : "hover:bg-zinc-100"} ${table.id === restaurantVariables.activeState.tableId ? "bg-zinc-200 border-zinc-400" : ""} min-h-30`}>
                                <CardHeader className="flex flex-col items-center">
                                    <CardTitle className="">Tafel {table.id}</CardTitle>
                                    <CardDescription>{table.status}</CardDescription>
                                </CardHeader>
                            </Card>
                            : ""
                }
            </button>
        </li >
    );
};

export default TableCard; 