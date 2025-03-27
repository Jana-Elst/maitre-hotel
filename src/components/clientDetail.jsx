import { productData } from "../data";
import { createBill, getTotal } from "../functions"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


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
                <ul className={restaurantVariables.newOrder.items ? (restaurantVariables.newOrder.items[0] ? "text-zinc-400" : "") : ""}>
                    {
                        billItems ?
                            billItems.map((item) => {
                                const product = products.find(p => p.id === item.productId);
                                return (
                                    <li className="grid grid-cols-(--detailTableOrder)">
                                        <p>{item.amount} x {product.name}</p>
                                        <p>€ {product.price.toFixed(2)}</p>
                                    </li>
                                )
                            }) : ""
                    }
                </ul>
                <ul>
                    {
                        items ?
                            items.map((item) => {
                                const product = products.find(p => p.id === item.productId);
                                return (
                                    <li className="grid grid-cols-(--detailTableOrder)">
                                        <p>{item.amount} x {product.name}</p>
                                        <p>€ {product.price.toFixed(2)}</p>
                                    </li>
                                )
                            }) : ""
                    }
                </ul>
                <div className="grid grid-cols-(--detailTableOrder)">
                    {

                        restaurantVariables.activeState.totalTableActive ?
                            <p className="col-start-2 font-bold">€ {restaurantVariables.activeState.totalTableActive.toFixed(2)}</p>
                            : ""
                    }
                </div>
            </CardContent>

            {restaurantVariables.activeState.totalTableActive
                ? <CardFooter>
                    <Button className="w-full">Afrekenen</Button>
                </CardFooter>
                : ""}
        </Card>
    );
};

export default clientDetail;