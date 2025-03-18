const MenuCard = ({ productData }) => {
    return (
        <button>
            <h3>{productData.name}</h3>
            <p>{productData.price}</p>
        </button>
    );
};

export default MenuCard;