import MenuList from "./menuList";

const MenuDashboard = ({ isActive, setIsActive }) => {
    return (
        <section className={`dashboard tables ${isActive === "menu" ? "" : "hidden"}`}>
            <h2>Menu</h2>
            <button onClick={() => setIsActive("tables")}>close</button>
        </section>
    );
};

export default MenuDashboard;