import MenuCard from "./menuCard";

const MenuList = ({ productData, subCategory }) => {
    return (
        <ul>
            {console.log(productData[subCategory])}

            {Object.values(productData[subCategory]).map((item) => (
                <MenuCard key={item.name} productData={item} />
            ))}
        </ul>
    );
};

export default MenuList;