
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
import { changeCategory } from '../functions';

const TableDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className={`dashboard tables grid grid-rows-(--tableDashboard) justify-center items-center ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
            <CardHeader>
                <CardTitle>
                    Table overview
                </CardTitle>
            </CardHeader>

            <CardContent>
                <TableList setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} screen={"dashboardScreen"} />
            </CardContent>

            <CardFooter className="gap-4 grid grid-cols-(--tableDashBoardBtns)">
                <Dialog>
                    <DialogTrigger asChild className='w-full'><Button className='w-full'>Reserveren</Button></DialogTrigger>
                    <Reservation setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild onClick={() => setRestaurantVariables(changeCategory(restaurantVariables, 3, 31))}><Button variant="outline">Gezelschapsspelletjes</Button></DialogTrigger>
                    <Games setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>
            </CardFooter>
        </Card>
    );
};

export default TableDashboard;