import ClientCard from "./clientCard";

const ClientList = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <ul>
            {
                restaurantVariables.tables.map(table =>
                    // {console.log(table.id)}
                    table.status !== "available"
                        ? <ClientCard table={table} restaurantVariables={restaurantVariables} />
                        : ""
                )
            }
        </ul>
    );
};

export default ClientList;