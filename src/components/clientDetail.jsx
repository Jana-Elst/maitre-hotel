import { isEmpty } from "../functions";

const clientDetail = ({ isActive, order, setOrder }) => {
    return (
        <article className={`dashboard clientdetail ${isActive.dashboard === "menu" ? "" : "hidden"}`} >
            <h3>Tafel {isActive.id}</h3>
            <ul>
                {console.log(order)}
                {!isEmpty(order) ? (
                    Object.keys(order).map((item) => (
                        <li>
                            <button>
                                <p>{item}</p>
                                <p>x {order[item].amount}</p>
                                <p>€ {order[item].price}</p>
                            </button>
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