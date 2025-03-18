const OrderCard = ({ id, orderData }) => {
    return (
        <article>
            {console.log(orderData)}
            <h3>#{id}</h3>
            <p>tafel {orderData.table}</p>
            <ul>
                {
                    Object.keys(orderData.order).map((order) => (
                        <div>
                            <input type="checkbox" id={order} name={order} />
                            <label for={order}>{orderData.order[order].amount} x {order}</label>
                        </div>
                    ))
                }
            </ul>

            <button>Serve</button>
        </article>
    );
};

export default OrderCard;