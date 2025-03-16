import OrderList from "./orderList";

const ClientDashboard = ({ }) => {
    return (
        <section className="dashboard orders">
            <h2>Orders</h2>
            <OrderList />
        </section>
    );
};

export default ClientDashboard;