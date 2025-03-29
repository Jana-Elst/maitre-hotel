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
        { id: 1, name: 'Dranken' },
        { id: 2, name: 'Breakfast' },
        { id: 3, name: 'Lunch' },
        { id: 9, name: 'Gezelschapsspelen' }
    ],

    subcategories: [
        { id: 11, name: 'Koffie', categoryId: 1 },
        { id: 12, name: 'Thee', categoryId: 1 },
        { id: 13, name: 'Homemade', categoryId: 1 },

        { id: 31, name: 'Brunch', categoryId: 3 },
        { id: 32, name: 'Broodjesfabriek', categoryId: 3 },
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

        // Dranken - Homemade
        { id: 131, name: 'Gember Appel', price: 4.50, subcategoryId: 13 },
        { id: 132, name: 'Aardbei', price: 4.50, subcategoryId: 13 },
        { id: 133, name: 'Mandarijn Anijs', price: 4.50, subcategoryId: 13 },
        { id: 134, name: 'Citroen Hop', price: 4.50, subcategoryId: 13 },
        { id: 135, name: 'Pompelmoes Rozemarijn', price: 4.50, subcategoryId: 13 },
        { id: 136, name: 'Komkommer Basilicum', price: 4.50, subcategoryId: 13 },
        { id: 137, name: 'Peer Kiwi Kaneel', price: 4.50, subcategoryId: 13 },
        { id: 138, name: 'Zwarte thee Koffie', price: 4.50, subcategoryId: 13 },



        //Breakfast
        { id: 201, name: 'Chocoladekoek', price: 2.20, categoryId: 2 },
        { id: 202, name: 'Croissant', price: 2.20, categoryId: 2 },
        { id: 203, name: 'Amandelcroissant', price: 3.5, categoryId: 2 },
        { id: 204, name: 'Cinnamon Roll', price: 3.50, categoryId: 2 },
        { id: 205, name: 'Gevulde croissant', price: 4.5, categoryId: 2 },
        { id: 206, name: 'Cheesescone', price: 3.5, categoryId: 2 },
        { id: 207, name: 'Zoete scone', price: 4.5, categoryId: 2 },
        { id: 208, name: 'Kommeke fruisla', price: 4.5, categoryId: 2 },
        { id: 209, name: 'Yoghurt bowl', price: 7, categoryId: 2 },

        // Lunch
        { id: 301, name: 'Classic eggs benny', price: 14.00, subcategoryId: 31 },
        { id: 302, name: 'Overnight oats', price: 13.00, subcategoryId: 31 },

        // Lunch - broodjesfabriek
        { id: 321, name: 'Cubanito', price: 12.50, subcategoryId: 32 },
        { id: 322, name: 'Roast beef', price: 12.00, subcategoryId: 32 },
        { id: 323, name: 'Baba ganoush', price: 12.00, subcategoryId: 32 },
        { id: 324, name: 'Pesto', price: 10.00, subcategoryId: 32 },
        { id: 325, name: 'Grilled chicken', price: 12.00, subcategoryId: 32 },


        // Gezelschapsspel
        { id: 911, name: 'Rummikub', value: 2, categoryId: 9 },
        { id: 912, name: 'Azul', value: 3, categoryId: 9 },
        { id: 913, name: 'Carcassonne', value: 1, categoryId: 9 },
        { id: 914, name: 'Ticket to Ride', value: 1, categoryId: 9 },
        { id: 915, name: 'Uno', value: 2, categoryId: 9 },
        { id: 916, name: 'Carcasonne', value: 2, categoryId: 9 }
    ]
}