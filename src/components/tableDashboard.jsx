
import TableCard from './tableCard';

const TableDashboard = ({ restaurantVariables,  setRestaurantVariables }) => {
    const tables = restaurantVariables.tables;
    const state = restaurantVariables.activeState
    console.log(state);
    return (
        <section className={`dashboard tables ${state.dashboard === "tables" ? "" : "hidden"}`}>
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