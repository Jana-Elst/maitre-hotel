const restaurantData = () => {
    return {
        tables: [
            {
                id: 1,
                seats: 4,
            },
            {
                id: 2,
                seats: 4,
            },
            {
                id: 3,
                seats: 2,
            },
            {
                id: 4,
                seats: 8,
            },
            {
                id: 5,
                seats: 4,
            },
            {
                id: 6,
                seats: 6,
            },
            {
                id: 7,
                seats: 4,
            },
            {
                id: 8,
                seats: 4,
            },
            {
                id: 9,
                seats: 4,
            },
            {
                id: 10,
                seats: 4,
            },
        ]
    }
}
export { restaurantData };

export const productData = {
    categories: [
        { id: 1, name: 'Dranken'},
        { id: 2, name: 'Brunch'},
        { id: 3, name: 'Gezelschapsspelen'}
    ],

    subcategories: [
        { id: 11, name: 'Koffie', categoryId: 1 },
        { id: 12, name: 'Thee', categoryId: 1 },
        { id: 31, name: 'Bordspellen', categoryId: 3 },
        { id: 32, name: 'Kaartspellen', categoryId: 3 }
    ],

    products: [
        // Dranken - Koffie
        { id: 111, name: 'Espresso', price: 3.00, subcategoryId: 11 },
        { id: 112, name: 'Latte', price: 4.30, subcategoryId: 11 },
        { id: 113, name: 'Cappuccino', price: 4.30, subcategoryId: 11 },

        // Dranken - Thee
        { id: 121, name: 'Gemberthee', price: 4.50, subcategoryId: 12 },
        { id: 122, name: 'Muntthee', price: 4.00, subcategoryId: 12 },
        { id: 123, name: 'Kamillethee', price: 3.00, subcategoryId: 12 },

        // Brunch
        { id: 201, name: 'Cinnamon Roll', price: 3.50, categoryId: 2 },
        { id: 202, name: 'Pancakes', price: 8.00, categoryId: 2 },
        { id: 203, name: 'Yoghurt met granola', price: 6.00, categoryId: 2 },

        // Gezelschapsspel - Bordspellen
        { id: 311, name: 'Rummikub', value: 4, subcategoryId: 31 },
        { id: 312, name: 'Azul', value: 1, subcategoryId: 31 },
        { id: 313, name: 'Carcassonne', value: 1, subcategoryId: 31 },
        { id: 314, name: 'Ticket to Ride', value: 1, subcategoryId: 31 },

        // Gezelschapsspel - Kaartspellen
        { id: 321, name: 'Uno', value: 4, subcategoryId: 32 }
    ]
}