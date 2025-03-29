import { changeCategory, getTotal, tableHasGame } from "../functions"
import { productData } from "../data";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TableCard = ({ table, restaurantVariables, setRestaurantVariables, screen }) => {
    const total = getTotal(restaurantVariables, table.id);

    const handleClick = () => {
        let total = getTotal(restaurantVariables, table.id);
        let tmpResVar = changeCategory(restaurantVariables, 1, 11);
        screen === "dashboardScreen"
            ? tmpResVar = {
                ...restaurantVariables,
                activeState: {
                    ...restaurantVariables.activeState,
                    dashboard: "menu",
                    tableId: table.id,
                    totalTableActive: total,
                    categoryId: 1,
                    subcategoryId: 11
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
        <li className="tableCard">
            <button
                className="tableCard"
                onClick={() => handleClick()}
                disabled={isDisabled()}
            >

                {
                    screen === "dashboardScreen"
                        ? <Card className={`tableCard ${table.status === "unavailable" ? "border-red-300 bg-red-50 hover:bg-red-100" : table.status === "reservation" ? "border-amber-300 bg-amber-50 hover:bg-amber-100" : "border-green-300 bg-green-50 hover:bg-green-100"} min-h-30`}>
                            <CardHeader className="tableCard__header">
                                <CardTitle className="">Tafel {table.id}</CardTitle>
                                <CardDescription>
                                    <Badge className={`tableCard__badge ${table.status === "unavailable" ? "bg-red-400" : table.status === "reservation" ? "bg-amber-400" : "bg-green-500"}`}>
                                        
                                        <p>{table.status}</p>

                                        {
                                            // status icon
                                            table.status === 'unavailable' &&
                                            restaurantVariables.bills.find(bill => bill.tableId === table.id && bill.paid === false)
                                                .orders.map(orderId => {
                                                    const order = restaurantVariables.orders.find(order => order.id === orderId)
                                                    const statusOrdersTable = order.items.some(item => item.status !== 'served')
                                                        ? "schedule"
                                                        : "restaurant"

                                                    return <p key={orderId} className="material-symbols-outlined">{statusOrdersTable}</p>;
                                                })
                                        }

                                        {
                                            table.status === "reservation" ?
                                                <p className="material-symbols-outlined">event</p>
                                                : table.status === "available"
                                                    ? <p className="material-symbols-outlined">check</p>
                                                    : ""
                                        }

                                    </Badge>
                                </CardDescription>

                            </CardHeader>
                            <CardFooter className="tableCard__content">
                                {
                                    // games
                                    <ul className="tableCard__games">
                                        {
                                            restaurantVariables.games.map(game =>
                                                tableHasGame(restaurantVariables, game, table.id)
                                                    ? <li key={`${game.gameId}`}>{productData.products.filter(product => game.gameId === product.id).map(product => product.name)}</li>
                                                    : ""
                                            )
                                        }
                                    </ul>

                                }
                                {
                                    //total
                                    total ? <p className="tableCard__price">€ {total.toFixed(2)}</p> : ""
                                }
                            </CardFooter>
                        </Card>

                        : screen === "reservationScreen"
                            ? <Card className={`tableCard tableCard--reservation  ${isDisabled() ? "opacity-50" : "hover:bg-zinc-100"} ${table.id === restaurantVariables.activeState.tableId ? "bg-zinc-200 border-zinc-400" : ""} min-h-30`}>
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