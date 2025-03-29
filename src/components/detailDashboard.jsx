import MenuDashboard from '../components/menuDashboard';
import ClientDetail from '../components/clientDetail';

const DetailDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <div className={`detailDashboard ${restaurantVariables.activeState.dashboard === "menu" ? "" : "hidden"}`}>
                <ClientDetail restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
                <MenuDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
        </div>
    );
};

export default DetailDashboard;