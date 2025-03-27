import MenuDashboard from '../components/menuDashboard';
import ClientDetail from '../components/clientDetail';

const DetailDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <div className={`dashboard clientdetail ${restaurantVariables.activeState.dashboard === "menu" ? "" : "hidden"} grid grid-cols-(--detailDashboard) gap-4 h-full`}>
                <ClientDetail restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
                <MenuDashboard restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
        </div>
    );
};

export default DetailDashboard;