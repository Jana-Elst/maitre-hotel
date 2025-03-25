import { productData } from '../data.js';

const OrderCard = ({ order, setRestaurantVariables, restaurantVariables }) => {
    const products = productData().products;
    const items = order.items;

    //status order 1 item aanpassen
    //orders --> order --> items --> item
    const changeData = (item) => {
        console.log(restaurantVariables);
        console.log("item", item)

        const tmpResVar2 = {
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

        setRestaurantVariables(tmpResVar2);
        console.log()
    }

    return (
        <li  >
            <h3>#{order.id}</h3>
            <p>tafel {order.table}</p>
            {
                items.map((item) => {
                    const product = products.find(p => p.id === item.productId);
                    return (
                        <div key={`${order.id}-${item.productId}`}>
                            <input
                                type="checkbox"
                                id={item.productId}
                                name={item.productId}
                                checked={item.status === "ordered" ? false : true}
                                onChange={e => changeData(item)
                                }
                            />
                            <label htmlFor={item.productId}>{item.amount} x {product.name}</label>
                        </div>
                    )
                })
            }

            < button > Serve</button>
        </li >
    );
};

export default OrderCard;