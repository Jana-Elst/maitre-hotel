import { productData } from "../data";
import MenuCard from "./menuCard"

const MenuList = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <ul key={`${restaurantVariables.activeState.categoryId}-${restaurantVariables.activeState.subcategoryId}`} className="menuList">
            {/* afhankelijk van of de category subvvategories heeft of niet moeter er andere dingen getoond */}
            {
                productData.products.map((product) =>
                    productData.subcategories.some(subcategory => subcategory.id === restaurantVariables.activeState.subcategoryId)
                        ? restaurantVariables.activeState.subcategoryId === product.subcategoryId ?
                            <MenuCard key={product.id} product={product} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} /> : ""
                        :
                        restaurantVariables.activeState.categoryId === product.categoryId ?
                            <MenuCard key={product.id} product={product} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} /> : ""
                )

            }
        </ul>
    );
};

export default MenuList;