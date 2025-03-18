import TableCard from "./tableCard";
import { useState } from "react";

const TableDashboard = ({ tables, isActive, setIsActive }) => {
    return (
        <section className={`dashboard tables ${isActive.dashboard === "tables" ? "" : "hidden"}`}>
            <ul>
                {tables.map((table) => (
                    <TableCard id={table.id} key={table.id} isActive={isActive} setIsActive={setIsActive} />
                ))}
            </ul>
        </section>
    );
};

export default TableDashboard;