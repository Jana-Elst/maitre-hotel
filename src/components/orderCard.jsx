const OrderCard = ({ id, order }) => {
    return (
        <article>
            {console.log(order)}
            <h3>#{id}</h3>
            <p>naam tafel</p>
            <ul>
                {
                    Object.keys(order).map((name) => (
                        <li>
                            {name} x {order[name].amount}
                        </li>
                    ))
                }
            </ul>
        </article>
    );
};

export default OrderCard;