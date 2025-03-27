
import TableList from './tableList';
import Reservation from './reservation';
import Games from './games';

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
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



const TableDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    const handleGames = () => {
        console.log('toon games');
        const tmpResVar = {
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                categoryId: 3,
                subcategoryId: 31
            }
        };

        console.log(tmpResVar);
        setRestaurantVariables(tmpResVar);
    }


    return (
        <Card className={`dashboard tables grid grid-rows-(--tableDashboard) justify-center items-center ${restaurantVariables.activeState.dashboard === "tables" ? "" : "hidden"}`}>
            <CardContent>
                <TableList setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} screen={"dashboardScreen"} />
            </CardContent>
            <CardFooter className="gap-4 grid grid-cols-(--tableDashBoardBtns)">
                <Dialog>
                    <DialogTrigger asChild className='w-full'><Button className='w-full'>Reserveren</Button></DialogTrigger>
                    <Reservation setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild onClick={() => handleGames()} ><Button variant="outline">Gezelschapsspelletjes</Button></DialogTrigger>
                    <Games setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
                </Dialog>
            </CardFooter>
        </Card>
    );
};

export default TableDashboard;