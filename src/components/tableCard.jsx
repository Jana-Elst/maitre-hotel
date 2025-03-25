const TableCard = ({ table, restaurantVariables, setRestaurantVariables }) => {
    return (
        <button
            onClick={() => setRestaurantVariables({
                ...restaurantVariables,
                activeState: {
                    ...restaurantVariables.activeState,
                    dashboard: "menu",
                    tableId: table.id
                },

                newOrder: {
                    id: restaurantVariables.orders.length + 1,
                    items: []
                }
            })}>
            <article>
                <h3>Tafel {table.id}</h3>
            </article>
        </button>
    );
};

export default TableCard; 