import MenuCard from "./menuCard";

const MenuList = ({ productData, subCategory, setOrder, order }) => {
    return (
        <ul>
            {Object.values(productData[subCategory]).map((item) => (
                <MenuCard key={item.name} productData={item} order={order} setOrder={setOrder} />
            ))}
        </ul>
    );
};

export default MenuList;