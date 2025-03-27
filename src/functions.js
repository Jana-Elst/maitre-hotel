import { productData } from "./data";

const isEmpty = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

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

    console.log(tmpResVar);
    return tmpResVar;
}

/* ---------------- Other functions ---------------- */
//alle orders waar een item status 'ordered' heeft
const ordersForKitchen = (restaurantVariables) => {
    return restaurantVariables.orders.map(order =>
        order.items.some(item => item.status !== "served")
            ? order
            : ""
    );
}

const stopOrder = (restaurantVariables) => {
    console.log("order is afgerond");
    //add newOrder to orders
    //remove newOrder
    //add order to bill + create one if their is no bill for the table
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

    return (tmpResVar);
}


/* ---------------- Change setStates functions ---------------- */
export { isEmpty };

export { createBill };
export { getTotal };

export { changeCategory };

export { ordersForKitchen };
export { stopOrder };