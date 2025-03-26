import { createBill, getTotal } from "../functions"

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
        <button onClick={() => addProductToOrder()}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </button>
    );
};


export default MenuCard;