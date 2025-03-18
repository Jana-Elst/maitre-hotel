const addProductToOrder = (productData, setOrder, order) => {
    console.log("addProductToOrder");
    const product = {
        name: productData.name,
        price: productData.price,
    };

    {
        if (product.name in order) {
            setOrder(order => ({
                ...order,
                [product.name]: {
                    amount: order[product.name].amount + 1,
                    price: product.price,
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