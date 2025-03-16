import TableCard from "./tableCard";

const TableDashboard = ({tables}) => {
    return (
        <section>
            <ul>
                {tables.map((table) => (
                    <TableCard id = {table.id}/>
                ))}
            </ul>
        </section>
    );
};

export default TableDashboard;