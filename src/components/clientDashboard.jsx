import ClientList from "./clientList";

const ClientDashboard = ({ }) => {
    return (
        <section className="dashboard clients">
            <h2>Overzicht</h2>
            <ClientList/>
            <button>reservering</button>
            <button>gezelschapsspel</button>
        </section>
    );
};

export default ClientDashboard;