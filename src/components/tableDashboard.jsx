
//components
import TableList from './tableList';
import Reservation from './reservation';
import Games from './games';

//components styling
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"

//js functions
import { changeCategory, changeTable } from '../functions';
import { ScrollArea } from "@/components/ui/scroll-area"


const TableDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className={`tableDashboard ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
            <CardHeader>
                <CardTitle>Table overview</CardTitle>
            </CardHeader>

            <CardContent className='tableDashboard__tables'>
                    <TableList setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} screen={"dashboardScreen"} />
            </CardContent>

            <CardFooter className="tableFooter pt-4">
                <Dialog>
                    <DialogTrigger asChild className='w-full'><Button onClick={() => setRestaurantVariables(changeTable(restaurantVariables, null))} className='w-full'>Reserveren</Button></DialogTrigger>
                    <Reservation setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild onClick={() => setRestaurantVariables(changeCategory(restaurantVariables, 9, 91))}><Button variant="outline">Gezelschapsspelletjes</Button></DialogTrigger>
                    <Games setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>
            </CardFooter>
        </Card>
    );
};

export default TableDashboard;