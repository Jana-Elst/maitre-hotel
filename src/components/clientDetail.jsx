import { productData } from "../data";
import { createBill, deleteReservation, tableHasGame, handlePay, removeProductFromOrder } from "../functions"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


const clientDetail = ({ restaurantVariables, setRestaurantVariables }) => {
    const products = productData.products;
    const items = restaurantVariables.newOrder.items;
    const billItems = createBill(restaurantVariables, restaurantVariables.activeState.tableId);

    return (
        <Card className='h-full grid grid-rows-(--clientDetail)'>
            <CardHeader>
                <CardTitle>Tafel {restaurantVariables.activeState.tableId}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-5 overflow-scroll">

                {/* games linked to table */}
                <ul>
                    {
                        restaurantVariables.games.map(game =>
                            tableHasGame(restaurantVariables, game)
                                ? <li key={`${game.gameId}`}>{productData.products.filter(product => game.gameId === product.id).map(product => product.name)}</li>
                                : ""
                        )
                    }
                </ul>

                {/* old items on bill */}
                <ul className={restaurantVariables.newOrder.items ? (restaurantVariables.newOrder.items[0] ? "text-zinc-400" : "") : ""}>
                    {
                        billItems ?
                            billItems.map((item) => {
                                const product = products.find(p => p.id === item.productId);
                                return (
                                    <li key={product.id} className="grid grid-cols-(--detailTableOrder) hover:text-zinc-300" onClick={() => setRestaurantVariables(removeProductFromOrder(restaurantVariables, item))}>
                                        <p>{item.amount} x {product.name}</p>
                                        <p>€ {product.price.toFixed(2)}</p>
                                    </li>
                                )
                            }) : ""
                    }
                </ul>

                {/* new items on bill */}
                <ul>
                    {
                        items ?
                            items.map((item) => {
                                const product = products.find(p => p.id === item.productId);
                                return (
                                    <li key={product.id} className="grid grid-cols-(--detailTableOrder) hover:text-zinc-300" onClick = {() => setRestaurantVariables(removeProductFromOrder(restaurantVariables, item))}>
                                        <p>{item.amount} x {product.name}</p>
                                        <p>€ {product.price.toFixed(2)}</p>
                                    </li>
                                )
                            }) : ""
                    }
                </ul>

                {/* price */}
                <div className="grid grid-cols-(--detailTableOrder)">
                    {
                        restaurantVariables.activeState.totalTableActive ?
                            <p className="col-start-2 font-bold">€ {restaurantVariables.activeState.totalTableActive.toFixed(2)}</p>
                            : ""
                    }
                </div>
            </CardContent>

            {/* Button */}
            {restaurantVariables.activeState.totalTableActive
                ? <CardFooter>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="w-full">Afrekenen</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>€ {restaurantVariables.activeState.totalTableActive.toFixed(2)}</AlertDialogTitle>
                                <AlertDialogDescription>Wil je de bestelling afrekenen?</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Annuleer</AlertDialogCancel>
                                <AlertDialogAction onClick={() => setRestaurantVariables(handlePay(restaurantVariables))}>Afrekenen</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
                : restaurantVariables.tables.some(t => t.id === restaurantVariables.activeState.tableId && t.status === 'reservation')
                    ? <CardFooter>
                        <Button
                            className="w-full"
                            onClick={() => setRestaurantVariables(deleteReservation(restaurantVariables))}
                        >Annuleer reservatie</Button>
                    </CardFooter>
                    : ""
            }
        </Card>
    );
};

export default clientDetail;