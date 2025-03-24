const TableCard = ({ table, restaurantVariables, setRestaurantVariables }) => {
    const tableId = table.id;
    return (
        <button
            onClick={() => setRestaurantVariables({
                ...restaurantVariables,
                activeState: {
                    dashboard: "menu",
                    tableID: tableId
                }
            })}>
            <article>
                <h3>Tafel {tableId}</h3>
            </article>
        </button>
    );
};

export default TableCard; 