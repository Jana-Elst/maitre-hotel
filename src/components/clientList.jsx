import ClientCard from "./clientCard";

const ClientList = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <ul>
            {
                restaurantVariables.tables.map(table =>
                    table.status !== "available"
                        ? <ClientCard table = {table} />
                        : ""
                )
            }
        </ul>
    );
};

export default ClientList;