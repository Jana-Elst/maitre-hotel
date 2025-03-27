
import TableCard from './tableCard';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const TableDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    const tables = restaurantVariables.tables;
    return (
        <Card className={`dashboard tables grid grid-rows-(--tableDashboard) justify-center items-center ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
            <CardContent>
                <ul className='flex gap-4 flex-wrap justify-center'>
                    {tables.map((table) => (
                        <TableCard key={table.id} table={table} restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="gap-4 grid grid-cols-(--tableDashBoardBtns)">
                <Button>Reserveren</Button>
                <Button variant="outline">Gezelschapsspelletjes</Button>
            </CardFooter>
        </Card>
    );
};

export default TableDashboard;