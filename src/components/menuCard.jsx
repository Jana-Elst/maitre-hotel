const addProductToOrder = (productData, setOrder, order) => {
    console.log("addProductToOrder");
    // Create product object
    const product = {
        name: productData.name,
        price: productData.price,
    };

    // Check if product is already in order
    {
        if (product.name in order) {
            setOrder(order => ({
                ...order,
                [product.name]: {
                    amount: order[product.name].amount + 1,
                    price: product.price,
                    prepared: "false",
                }
            }));
        }
        else {
            setOrder(order => ({
                ...order,
                [product.name]: {
                    amount: 1,
                    price: product.price,
                }
            }));
        }

        console.log(order);
    }
}

const MenuCard = ({ productData, setOrder, order }) => {
    return (
        <button onClick={() => addProductToOrder(productData, setOrder, order)}>
            <h3>{productData.name}</h3>
            <p>{productData.price}</p>
        </button>
    );
};


export default MenuCard;