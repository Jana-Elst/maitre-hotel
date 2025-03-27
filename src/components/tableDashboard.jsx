
import TableCard from './tableCard';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const TableDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    const tables = restaurantVariables.tables;
    return (
        <Card className={`dashboard tables ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"} self-stretch justify-center content-center`}>
            <CardContent>
                <ul className='flex gap-4 flex-wrap justify-center content-center'>
                    {tables.map((table) => (
                        <TableCard key={table.id} table={table} restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default TableDashboard;