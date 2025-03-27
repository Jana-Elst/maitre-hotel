import { productData } from "./data";

/* ---------------- functies om rekening te maken ---------------- */
const createBill = (restaurantVariables, tableId) => {
    if (tableId) {
        //voor welke tafel moet er een rekening gemaakt worden?
        const bill = restaurantVariables.bills.find(bill => bill.tableId === tableId && !bill.paid);
        const orders = restaurantVariables.orders;

        //welke order items zitten er in de bill?
        if (bill) {
            let itemsBill = [];
            bill.orders.forEach(orderId => {
                orders.forEach(order => {
                    if (orderId === order.id) {
                        itemsBill.push(order.items);
                    }
                });
            });

            //items met zelfde productId samenvoegen
            let mergedOrdersBill = [];
            itemsBill.flat(Infinity).forEach(item => {
                if (mergedOrdersBill.some(i => i.productId === item.productId)) {
                    mergedOrdersBill.forEach(i => {
                        if (i.productId === item.productId) {
                            i.amount += item.amount
                        }
                    });
                } else {
                    mergedOrdersBill.push({
                        productId: item.productId,
                        amount: item.amount
                    })
                }
            })

            return mergedOrdersBill;
        }
    }
}

const getTotal = (restaurantVariables, tableId) => {
    const bill = createBill(restaurantVariables, tableId) ? [createBill(restaurantVariables, tableId)] : [];

    if (restaurantVariables.newOrder.items) {
        restaurantVariables.newOrder.items.forEach(item => {
            bill.push({
                productId: item.productId,
                amount: item.amount
            })
        });
    }

    let total = 0;
    if (bill) {
        bill.flat(Infinity).forEach(item => {
            const product = productData.products.find(p => p.id === item.productId);
            total += product.price * item.amount;
        });
    }

    return total
}

/* ---------------- Change setStates functions ---------------- */
const changeCategory = (restaurantVariables, category, subcategory) => {
    const tmpResVar = {
        ...restaurantVariables,
        activeState: {
            ...restaurantVariables.activeState,
            categoryId: category,
            subcategoryId: subcategory
        }
    }

    return tmpResVar;
}

const isDisabled = (item) => {
    let isDisabled = true;
    if (item) {
        isDisabled = false;
    }

    return isDisabled;
}

/* ---------------- Other functions ---------------- */
//alle orders waar een item status 'ordered' heeft
const ordersForKitchen = (restaurantVariables) => {
    return restaurantVariables.orders.map(order =>
        order.items.some(item => item.status !== "served")
            ? order
            : []
    );
}

const stopOrder = (restaurantVariables) => {
    //add newOrder to orders
    //remove newOrder
    //add order to bill + create one if their is no bill for the table
    console.log(restaurantVariables);
    let tmpResVar;

    restaurantVariables.newOrder.items.length > 0
        ? tmpResVar = {
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
                        bill.tableId === restaurantVariables.activeState.tableId ? { ...bill, orders: [...bill.orders, restaurantVariables.newOrder.id] } : bill)
                    : [...restaurantVariables.bills,
                    {
                        id: restaurantVariables.bills.length + 1,
                        orders: [restaurantVariables.newOrder.id],
                        paid: false,
                        tableId: restaurantVariables.activeState.tableId
                    }]

        }
        : tmpResVar = {
            ...restaurantVariables,
            activeState: {
                dashboard: "tables",
                tableId: null,
                categoryId: 1,
                subcategoryId: 11
            }
        }

    console.log(tmpResVar);
    return (tmpResVar);
}

const deleteReservation = (restaurantVariables) => {
    const tmpResVar = {
        ...restaurantVariables,

        tables:
            restaurantVariables.tables.map(table =>
                table.id === restaurantVariables.activeState.tableId ? { ...table, status: "available" } : table
            ),

        newOrder: [],

        activeState: {
            dashboard: "tables",
            tableId: null,
            categoryId: 1,
            subcategoryId: 11
        }
    }

    return tmpResVar
}

const handlePay = (restaurantVariables) => {
    const tmpResVar1 = stopOrder(restaurantVariables);

    const tmpResVar2 = {
        ...tmpResVar1,

        tables:
            tmpResVar1.tables.map(table =>
                table.id === restaurantVariables.activeState.tableId ? { ...table, status: "available" } : table
            ),

        activeState: {
            dashboard: "tables",
            tableId: null,
            categoryId: 1,
            subcategoryId: 11
        },

        bills:
            tmpResVar1.bills.map(bill =>
                restaurantVariables.activeState.tableId === bill.tableId ? { ...bill, paid: true } : bill
            ),

        games:
            tmpResVar1.games.map(game =>
                game.tableIds.includes(restaurantVariables.activeState.tableId)
                    ? {
                        ...game,
                        tableIds: game.tableIds.filter(tId => tId !== restaurantVariables.activeState.tableId)
                    }
                    : game)
    }

    return tmpResVar2
}

const tableHasGame = (restaurantVariables, game) => {
    const table = restaurantVariables.activeState.tableId;
    if (table) {
        if (game) {
            return game.tableIds.includes(table);
        }
    }
    return false;
}

const removeProductFromOrder = (restaurantVariables, itm) => {
    // Check if product is already in order
    let tempResVar = {
        ...restaurantVariables,
        newOrder: {
            ...restaurantVariables.newOrder,
            items:
                // check if there is an item of in the array with the id of the product.
                restaurantVariables.newOrder.items.some(item => item.productId === itm.productId)
                    ? restaurantVariables.newOrder.items.map(i =>
                        i.productId === itm.productId
                            ? {
                                ...i,
                                amount: i.amount - 1,
                                status: i.amount-1 <= 0 ? 'served' : i.status
                            }
                            : i
                    )
                    : [
                        ...restaurantVariables.newOrder.items,
                        {
                            productId: itm.productId,
                            amount: -1,
                            status: 'served'
                        }
                    ]
        },
    }

    let total = getTotal(tempResVar, restaurantVariables.activeState.tableId);
    tempResVar = (
        {
            ...tempResVar,
            activeState: {
                ...tempResVar.activeState,
                totalTableActive: total
            }
        }
    );

    return tempResVar
}


/* ---------------- EXPORT FUNCTIONS ---------------- */
export { createBill };
export { getTotal };

export { changeCategory };

export { ordersForKitchen };
export { stopOrder };
export { deleteReservation };
export { tableHasGame };
export { handlePay };
export {removeProductFromOrder};
export {isDisabled};