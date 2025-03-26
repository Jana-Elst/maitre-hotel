import { productData } from "./data";

const isEmpty = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}



const createBill = (restaurantVariables) => {
    console.log('restVARS', restaurantVariables);
    const tableId = restaurantVariables.activeState.tableId;

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

            console.log('itemsBill', itemsBill.flat(Infinity));

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
            console.log('mergedOrders', mergedOrdersBill);
            return mergedOrdersBill;
        }
    }
}

const getTotal = (restaurantVariables) => {
    const bill = createBill(restaurantVariables);
    let total = 0;

    if (bill) {
        bill.forEach(item => {
            const product = productData.products.find(p => p.id === item.productId);
            total += product.price * item.amount;
        });
    }

    return total
}

export { createBill };
export { isEmpty };
export { getTotal };