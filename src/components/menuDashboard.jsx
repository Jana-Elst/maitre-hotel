import MenuList from "./menuList";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { productData } from "../data";
import { changeCategory, stopOrder } from "../functions";


const MenuDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className="menuDashboard">
            <CardHeader>
                <p></p>
                {/* navigatie != onderdelen menu */}
                <Tabs>
                    <TabsList className='min-w-full'>
                        {
                            productData.categories.map((category) => (
                                <TabsTrigger
                                    data-state={category.id === restaurantVariables.activeState.categoryId ? "active" : ""}
                                    key={category.id}
                                    value={category.name}
                                    onClick={() => setRestaurantVariables(changeCategory(restaurantVariables, category.id, category.id * 10 + 1))}
                                >{category.name}</TabsTrigger>
                            ))
                        }
                    </TabsList>
                </Tabs>

                {
                    productData.subcategories.some(subcategory => subcategory.id === restaurantVariables.activeState.subcategoryId)
                        ? <Tabs>
                            <TabsList className='min-w-full'>
                                {
                                    productData.subcategories.map((subcategory) => (
                                        subcategory.categoryId === restaurantVariables.activeState.categoryId ?
                                            <TabsTrigger
                                                data-state={subcategory.id === restaurantVariables.activeState.subcategoryId ? "active" : ""}
                                                key={subcategory.id}
                                                value={subcategory.id}
                                                onClick={() => setRestaurantVariables(changeCategory(restaurantVariables, restaurantVariables.activeState.categoryId, subcategory.id))}
                                            >{subcategory.name}</TabsTrigger> : ""
                                    ))
                                }
                            </TabsList>
                        </Tabs>
                        : ""
                }
            </CardHeader>

            <CardContent>
                <MenuList restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
            </CardContent>

            <CardFooter>
                <Button className="menuDashboard__button" onClick={() => setRestaurantVariables(stopOrder(restaurantVariables))}>Bestelling afronden</Button>
            </CardFooter>
        </Card >
    );
};

export default MenuDashboard;