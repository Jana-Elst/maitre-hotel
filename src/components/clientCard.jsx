import { createBill, getTotal } from "../functions"

const ClientCard = ({ table, restaurantVariables }) => {
    const total = getTotal(restaurantVariables, table.id);
    return (
        <button>
            <h3>Tafel {table.id}</h3>
            <p>€ {total}</p>
        </button>
    );
};

export default ClientCard;
