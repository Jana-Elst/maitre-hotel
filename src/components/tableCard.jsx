import { useState } from "react";

const TableCard = ({ id, setIsActive }) => {
    return (
        <button
            onClick={() => setIsActive({
                dashboard: "menu",
                id: id,
            })}>
            <article>
                <h3>Tafel {id}</h3>
            </article>
        </button>
    );
};

export default TableCard; 