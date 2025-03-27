import { productData } from "../data";
import MenuCard from "./menuCard"

const MenuList = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <div key={`${restaurantVariables.activeState.categoryId}-${restaurantVariables.activeState.subcategoryId}`} className="grid grid-cols-(--menuItems) gap-4">
            {
                productData.products.map((product) =>
                    restaurantVariables.activeState.subcategoryId ?
                        restaurantVariables.activeState.subcategoryId === product.subcategoryId ?
                            <MenuCard product={product} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} /> : ""
                        :
                        restaurantVariables.activeState.categoryId === product.categoryId ?
                            <MenuCard product={product} setRestaurantVariables={setRestaurantVariables} restaurantVariables={restaurantVariables} /> : ""
                )

            }
        </div>
    );
};

export default MenuList;