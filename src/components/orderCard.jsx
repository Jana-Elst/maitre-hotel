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

const OrderCard = ({ order, setRestaurantVariables, restaurantVariables }) => {
    const products = productData.products;
    const items = order.items;

    //status order 1 item aanpassen
    //orders --> order --> items --> item
    const changeData = (item) => {
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

        items.forEach(item => {
            if (item.status === "ordered") {
                isDisabled = true;
            }
        });

        return isDisabled;
    }

    const setServed = () => {
        const tpmResVar = {
            ...restaurantVariables,
            orders:
                restaurantVariables.orders.map(o => o.id === order.id ?
                    {
                        ...o,
                        items: items.map(item => ({ ...item, status: 'served' }))
                    } : o)

        }

        console.log(tpmResVar);
        setRestaurantVariables(tpmResVar);
    }

    return (
        <Card className="min-w-55 border-zinc-950">
            <CardHeader className="flex justify-between">
                <CardTitle>#{order.id}</CardTitle>
                <CardDescription>Tafel {order.table}</CardDescription>
            </CardHeader>
            <CardContent className="overflow-scroll">
                {
                    items.map((item) => {
                        const product = products.find(p => p.id === item.productId);
                        return (
                            <div key={`${order.id}-${item.productId}`} className="space-x-2">
                                <Checkbox
                                    id={`${order.id}-${item.productId}`}
                                    name={`${order.id}-${item.productId}`}
                                    checked={item.status === "ordered" ? false : true}
                                    onCheckedChange={e => changeData(item)
                                    }
                                />
                                <label htmlFor={`${order.id}-${item.productId}`}>{item.amount} x {product.name}</label>
                            </div>
                        )
                    })
                }

            </CardContent>
            <CardFooter className="flex justify-stretch w-full">
                <Button
                    onClick={() => setServed()}
                    className="w-full" disabled={isDisabled()}
                >Serve</Button>
            </CardFooter>
        </Card>
    );
};

export default OrderCard;