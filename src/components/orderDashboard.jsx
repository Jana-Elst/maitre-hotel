import OrderList from "./orderList";
import { isEmpty } from "../functions";
import OrderCard from "./orderCard";

const ClientDashboard = ({orderKitchen}) => {
    return (
        <section className="dashboard orders">
            <h2>Orders</h2>

            <ul className="orders__list">
                {!isEmpty(orderKitchen) ? (
                    Object.keys(orderKitchen).map((id) => (
                        <li>
                            <OrderCard id={id} orderData={orderKitchen[id]} />
                        </li>
                    ))
                ) : "alle bestellingen zijn verwerkt"}
            </ul>
        </section>
    );
};

export default ClientDashboard;