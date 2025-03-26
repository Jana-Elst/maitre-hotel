import ClientList from "./clientList";

const ClientDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <section className="dashboard clients">
            <h2>Overzicht</h2>
            <ClientList restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
            <button>reservering</button>
            <button>gezelschapsspel</button>
        </section>
    );
};

export default ClientDashboard;