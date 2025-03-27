import MenuList from "./menuList";
import { isEmpty } from "../functions";
import { productData } from "../data";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const MenuDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    const changeCategory = (category) => {
        console.log(category);
        let firstSubcategory;
        //set subcategory to first subcategory of category
        productData.subcategories.map((subcategory) =>
            subcategory.categoryId === category.id ?
                (firstSubcategory ? firstSubcategory = subcategory : "")
                : ""
        )

        setRestaurantVariables({
            ...restaurantVariables,
            activeState: {
                ...restaurantVariables.activeState,
                categoryId: category.id,
                subcategoryId: firstSubcategory
            }
        })
    }

    const stopOrder = () => {
        console.log("order is afgerond");
        //add newOrder to orders
        //remove newOrder
        //add order to bill + create one if their is no bill for the table
        const tmpResVars = {
            ...restaurantVariables,
            orders: [
                ...restaurantVariables.orders,
                restaurantVariables.newOrder
            ],
            tables:
                restaurantVariables.tables.map(table =>
                    table.id === restaurantVariables.activeState.tableId ? { ...table, status: "unavailable" } : table
                ),
            newOrder: [],
            activeState: {
                dashboard: "tables",
                tableId: null,
                categoryId: 1,
                subcategoryId: 11
            },
            bills:
                restaurantVariables.bills.some(bill => bill.paid === false && bill.tableId === restaurantVariables.activeState.tableId)
                    ? restaurantVariables.bills.map(bill =>
                        bill.tableId === restaurantVariables.activeState.tableId ? { ...bill, orders: [...bill.orders, restaurantVariables.newOrder.id] } : bill
                    )
                    : [...restaurantVariables.bills,
                    {
                        id: restaurantVariables.bills.length + 1,
                        orders: [restaurantVariables.newOrder.id],
                        paid: false,
                        tableId: restaurantVariables.activeState.tableId
                    }
                    ]

        }

        console.log(tmpResVars);
        setRestaurantVariables(tmpResVars);
    }

    return (
        <Card className="h-full grid grid-rows-(--clientDetail)">
            <CardHeader>
                <p></p>
                {/* navigatie != onderdelen menu */}
                <Tabs>
                    <TabsList key='categories' className='min-w-full'>
                        {
                            productData.categories.map((category) => (
                                <TabsTrigger value={category.name} onClick={() => changeCategory(category)}>{category.name}</TabsTrigger>
                            ))
                        }
                    </TabsList>

                    {/* subnavigatie */}
                    <TabsList key='subcategories' className='min-w-full'>
                        {
                            productData.subcategories.map((subcategory) => (
                                subcategory.categoryId === restaurantVariables.activeState.categoryId ?
                                    <TabsTrigger
                                        value={subcategory.id}
                                        onClick={() => setRestaurantVariables({
                                            ...restaurantVariables,
                                            activeState: {
                                                ...restaurantVariables.activeState,
                                                subcategoryId: subcategory.id
                                            }
                                        })}
                                    >{subcategory.name}</TabsTrigger> : ""
                            ))
                        }
                    </TabsList>
                </Tabs>            
            </CardHeader>

            <CardContent>
                <MenuList restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
            </CardContent>

            <CardFooter>
                <Button className="w-full" onClick={() => stopOrder()}>Bestelling afronden</Button>
            </CardFooter>
        </Card >
    );
};

export default MenuDashboard;