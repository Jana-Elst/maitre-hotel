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
import { Separator } from "@/components/ui/separator"


const clientDetail = ({ restaurantVariables, setRestaurantVariables }) => {
    const products = productData.products;
    const items = restaurantVariables.newOrder.items;
    const billItems = createBill(restaurantVariables, restaurantVariables.activeState.tableId);

    const amountItemOldOrder = (item) => {
        let amount = -1;
        if (restaurantVariables.newOrder.length > 0) {
            const itemNewOrder = restaurantVariables.newOrder.items.find(i => i.productId === item.productId);

            if (itemNewOrder) {
                amount = itemNewOrder.amount;
            }
        }

        if (Math.abs(amount) < item.amount) {
            return true;
        }

        return false;

    }

    const amountItemNewOrder = (item) => {
        if (restaurantVariables.newOrder.length > 0) {
            const itemNewOrder = restaurantVariables.newOrder.items.find(i => i.productId === item.productId);
            const amount = itemNewOrder.amount;

            if (amount > 0) {
                return true;
            }
        }

        return false;
    }

    return (
        <Card className='clientDetail'>
            <CardHeader>
                <CardTitle>Tafel {restaurantVariables.activeState.tableId}</CardTitle>
            </CardHeader>

            <CardContent className="clientDetail__content">

                {
                    // games
                    <ul>
                        {
                            restaurantVariables.games.map(game =>
                                tableHasGame(restaurantVariables, game, restaurantVariables.activeState.tableId)
                                    ? <li key={`${game.gameId}`}>{productData.products.filter(product => game.gameId === product.id).map(product => product.name)}</li>
                                    : ""
                            )
                        }
                    </ul>
                }

                {/* old items on bill */}
                <ul className={restaurantVariables.newOrder.items ? (restaurantVariables.newOrder.items[0] ? "text-zinc-400" : "") : ""}>
                    {
                        billItems ?
                            billItems.map((item) => {
                                const product = products.find(p => p.id === item.productId);
                                return (
                                    <li key={product.id} className={`clientDetail__orderItem ${amountItemOldOrder(restaurantVariables, item) ? "" : "hover:text-zinc-300"}`}
                                        onClick={() => {
                                            if (amountItemOldOrder(item)) {
                                                setRestaurantVariables(removeProductFromOrder(restaurantVariables, item))
                                            }
                                        }
                                        }>
                                        <p>{item.amount} x {product.name}</p>
                                        <p className="clientDetail__orderPrice">€ {product.price.toFixed(2)}</p>
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
                                    <li key={product.id} className={`clientDetail__orderItem ${amountItemNewOrder(item) ? "hover:text-zinc-300" : ""}`}
                                        onClick={() => {
                                            if (amountItemNewOrder(item)) {
                                                setRestaurantVariables(removeProductFromOrder(restaurantVariables, item))
                                            }
                                        }
                                        }>
                                        <p>{item.amount} x {product.name}</p>
                                        <p className="clientDetail__orderPrice">€ {product.price.toFixed(2)}</p>
                                    </li>
                                )
                            }) : ""
                    }
                </ul>

                {/* price */}
                <Separator />
                <div className="">
                    {
                        restaurantVariables.activeState.totalTableActive ?
                            <p className="clientDetail__total">€ {restaurantVariables.activeState.totalTableActive.toFixed(2)}</p>
                            : restaurantVariables.bills.some(bill => bill.paid === false && bill.tableId === restaurantVariables.activeState.tableId) ? <p className="clientDetail__total">€ 0.00</p> : ""
                    }
                </div>
            </CardContent>

            {/* Button */}
            {
                console.log(restaurantVariables.bills)
            }
            {
                restaurantVariables.bills.some(bill => bill.paid === false && bill.tableId === restaurantVariables.activeState.tableId || restaurantVariables.activeState.totalTableActive)
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
                        ? <CardFooter className='clientDetail__button'>
                            <Button
                                className="w-full"
                                onClick={() => setRestaurantVariables(deleteReservation(restaurantVariables))}
                            >Annuleer reservatie</Button>
                        </CardFooter>
                        : ""
            }
        </Card >
    );
};

export default clientDetail;