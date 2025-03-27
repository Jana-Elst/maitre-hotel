import TableList from './tableList';

import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"

import { isDisabled } from "../functions"

const Reservation = ({ restaurantVariables, setRestaurantVariables }) => {
    const handleReservation = () => {
        const tmpResVar = {
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                tableId: null
            },
            tables:
                restaurantVariables.tables.map(t =>
                    t.id === restaurantVariables.activeState.tableId
                        ? { ...t, status: "reservation" }
                        : t
                )
        };

        setRestaurantVariables(tmpResVar);
    }

    const handleClose = () => {
        const tmpResVar = {
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                tableId: null
            },
        };

        setRestaurantVariables(tmpResVar);
    }

    return (
        <DialogContent className="min-w-7xl ">
            <DialogHeader>
                <DialogTitle>Reservatie</DialogTitle>
                <DialogDescription className='visually-hidden'>Reservations</DialogDescription>
            </DialogHeader>
            <TableList asChild setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} screen={"reservationScreen"} />
            <DialogFooter>
                <DialogClose asChild>
                    <Button onClick={() => handleClose()} variant="outline" className="border-zinc-800">Annuleer</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button
                        disabled={isDisabled(restaurantVariables.activeState.tableId)}
                        onClick={() => handleReservation()
                        }
                    >Maak reservatie</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}

export default Reservation; 