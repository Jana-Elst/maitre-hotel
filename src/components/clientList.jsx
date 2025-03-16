import ClientCard from "./clientCard";

const ClientList = ({ }) => {
    return (
        <ul>
            <ClientCard client={"lala"} price={3.50}/>
        </ul>
    );
};

export default ClientList;