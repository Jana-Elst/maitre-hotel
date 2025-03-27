import TableCard from './tableCard';

const TableList = ({ restaurantVariables, setRestaurantVariables, screen }) => {
    return (<ul className='flex gap-4 flex-wrap justify-center'>
        {
            restaurantVariables.tables.map((table) => (
                <TableCard key={table.id} table={table} restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} screen={screen} />
            ))}
    </ul>)
}

export default TableList;