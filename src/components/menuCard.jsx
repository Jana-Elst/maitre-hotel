import { getTotal } from "../functions"
import { Button } from "@/components/ui/button"
import GameCard from "./gameCard"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const MenuCard = ({ product, restaurantVariables, setRestaurantVariables }) => {
    const addProductToOrder = () => {
        // Check if product is already in order
        const tempResVar = {
            ...restaurantVariables,
            newOrder: {
                ...restaurantVariables.newOrder,
                items:
                    // check if there is an item of in the array with the id of the product.
                    restaurantVariables.newOrder.items.some(item => item.productId === product.id)
                        ? restaurantVariables.newOrder.items.map(i =>
                            i.productId === product.id
                                ? {
                                    ...i,
                                    amount: i.amount + 1
                                }
                                : i
                        )
                        : [
                            ...restaurantVariables.newOrder.items,
                            {
                                productId: product.id,
                                amount: 1,
                                status: 'ordered'
                            }
                        ]
            },
        }

        let total = getTotal(tempResVar, tempResVar.activeState.tableId);
        setRestaurantVariables(
            {
                ...tempResVar,
                activeState: {
                    ...tempResVar.activeState,
                    totalTableActive: total
                }
            }
        );
    }

    return (
        restaurantVariables.activeState.categoryId !== 3
            ? (<button className="menuCard" onClick={() => addProductToOrder()}>
                <Card>
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle></CardHeader>
                    <CardContent>€ {product.price.toFixed(2)}</CardContent>
                </Card>
            </button>)
            : <GameCard product={product} restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
    );
};


export default MenuCard;