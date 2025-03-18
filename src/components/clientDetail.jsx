const isEmpty = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

const clientDetail = ({ isActive, order, setOrder }) => {
    return (
        <article className={`dashboard clientdetail ${isActive.dashboard === "menu" ? "" : "hidden"}`} >
            <h3>Tafel {isActive.id}</h3>
            <ul>
                {console.log(order)}
                {!isEmpty(order) ? (
                    Object.keys(order).map((item) => (
                        <li>
                            <p>{item}</p>
                            <p>x {order[item].amount}</p>
                            <p>€ {order[item].price}</p>
                        </li>
                    ))
                ): "geen bestellingen"}
            </ul>
            <p>totaal</p>
            <button>afrekenen</button>
        </article>
    );
};

export default clientDetail;