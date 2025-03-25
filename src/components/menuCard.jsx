const MenuCard = ({ product, restaurantVariables, setRestaurantVariables }) => {
    const addProductToOrder = () => {
        console.log("addProductToOrder");
        console.log(restaurantVariables);
        // Check if product is already in order
        const tempResVar = {
            ...restaurantVariables,
            newOrder: {
                ...restaurantVariables.newOrder,
                items:
                    // check if there is an item of in the array with the id of the product.

                    restaurantVariables.newOrder.items.some(item => item.productId === product.id)
                        ? [(restaurantVariables.newOrder.items.map(item => {
                            item.productId === product.id
                                ? { ...item, amount: item.amount + 1 }
                                : item
                        }))]
                        : [
                            ...restaurantVariables.newOrder.items,
                            {
                                productId: product.id,
                                amount: 1,
                                status: 'ordered'
                            }
                        ]
            }
        }
        setRestaurantVariables(tempResVar);
    }

    return (
        <button onClick={() => addProductToOrder()}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </button>
    );
};


export default MenuCard;