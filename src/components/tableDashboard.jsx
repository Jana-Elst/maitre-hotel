
import TableCard from './tableCard';

const TableDashboard = ({ restaurantVariables,  setRestaurantVariables }) => {
    const tables = restaurantVariables.tables;
    return (
        <section className={`dashboard tables ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
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