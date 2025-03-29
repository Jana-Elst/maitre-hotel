import MenuList from './menuList';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Games = ({ restaurantVariables, setRestaurantVariables }) => {
    const switchTable = (table) => {
        const tmpVarRest = {
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                tableId: table === "overview" ? null : table.id
            }
        }
        console.log(tmpVarRest)
        setRestaurantVariables(tmpVarRest);
    }

    return (
        <DialogContent>
            {/* overview + navigatietafels */}
            <DialogHeader>
                <DialogTitle>Gezelschapsspelletjes</DialogTitle>
                <DialogDescription className='visually-hidden'>Games</DialogDescription>
            </DialogHeader>

            <Tabs className="overflow-scroll">
                <TabsList key='tables' className='min-w-full overflow-scroll gap-2'>
                    <TabsTrigger key='overview' onClick={() => switchTable("overview")} value="overview" className="border-zinc-900">Overview</TabsTrigger>
                    {
                        restaurantVariables.tables.map((table) =>
                            table.status === 'unavailable'
                                ? (<TabsTrigger
                                    key={table.id}
                                    onClick={() => switchTable(table)}
                                    value={table.id}>Tafel {table.id}</TabsTrigger>)
                                : ""
                        )
                    }
                </TabsList>
            </Tabs>

            {/* alle spelen */}
            <MenuList setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} />
            
            <DialogFooter>
                <DialogClose asChild>
                    <Button className="border-zinc-800">Sluit</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}

export default Games; 