
import TableCard from './tableCard';

const TableDashboard = ({ restaurantVariables,  setRestaurantVariables }) => {
    const tables = restaurantVariables.tables;
    const state = restaurantVariables.activeState

    return (
        <section className={`dashboard tables ${state === "tables" ? "" : "hidden"}`}>
            <ul>
                {tables.map((table) => (
                    <li key = {table.id}>
                        <TableCard table={table} restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TableDashboard;