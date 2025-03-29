import { productData } from '../data.js';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const OrderCard = ({ order, setRestaurantVariables, restaurantVariables }) => {
    //status order 1 item aanpassen
    const changeStatus = (item) => {
        const tmpResVar = {
            ...restaurantVariables,
            orders:
                restaurantVariables.orders.map(o =>
                    o.id === order.id ? {
                        ...o,
                        items:
                            o.items.map(i =>
                                i.productId === item.productId ? {
                                    ...i,
                                    status: i.status === "ordered" ? "ready" : "ordered"
                                } : i
                            )
                    } : o
                )
        }

        setRestaurantVariables(tmpResVar);
    }

    const isDisabled = () => {
        let isDisabled = false;
        const items = order.items

        if (items) {
            items.forEach(item => {
                if (item.status === "ordered") {
                    isDisabled = true;
                }
            });
        }

        return isDisabled;
    }

    const setServed = () => {
        const tpmResVar = {
            ...restaurantVariables,
            orders:
                restaurantVariables.orders.map(o => o.id === order.id ?
                    {
                        ...o,
                        items: order.items.map(item => ({ ...item, status: 'served' }))
                    } : o)

        }

        console.log(tpmResVar);
        setRestaurantVariables(tpmResVar);
    }

    if (order.items) {
        return (
            <li key={order.id}>
                <Card className="orderCard border-zinc-950">
                    <CardHeader className="orderCard__header">
                        <CardTitle>#{order.id}</CardTitle>
                        <CardDescription>Tafel {restaurantVariables.bills.find(bill => bill.orders.includes(order.id)).tableId}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ScrollArea className="h-20">
                            {
                                order.items.map((item) => {
                                    const product = productData.products.find(p => p.id === item.productId);
                                    return (
                                        <div>
                                            <div key={`${order.id}-${item.productId}`} className="space-x-2 p-1">
                                                <Checkbox
                                                    id={`${order.id}-${item.productId}`}
                                                    name={`${order.id}-${item.productId}`}
                                                    checked={item.status === "ordered" ? false : true}
                                                    onCheckedChange={e => changeStatus(item)
                                                    }
                                                />
                                                <label
                                                    className={item.status !== "ordered" ? "text-zinc-500 line-through" : ""}
                                                    htmlFor={`${order.id}-${item.productId}`}>
                                                    {item.amount} x {product.name}
                                                </label>
                                            </div>
                                            <Separator />
                                        </div>
                                    )
                                })
                            }
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="flex justify-stretch w-full">
                        <Button
                            onClick={() => setServed()}
                            className="w-full" disabled={isDisabled()}
                        >Serve</Button>
                    </CardFooter>
                </Card>
            </li>
        );
    } else {
        return ""
    }
};

export default OrderCard;