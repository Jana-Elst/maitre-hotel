import { isEmpty } from "../functions";

const clientDetail = ({ restaurantVariables, setRestaurantVariables }) => {
    if (restaurantVariables.newOrder.items) {
        restaurantVariables.newOrder.items.map(item => {
            console.log(item);
        });
    }

    return (
        <article className={`dashboard clientdetail ${restaurantVariables.activeState.dashboard === "menu" ? "" : "hidden"}`} >
            <h3>Tafel {restaurantVariables.activeState.tableId}</h3>
            <ul>
                {
                    //get all orders from bill --> js functie schrijven
                }
            </ul>
            <ul>
                {
                    // waarom wordt dit niet gedisplayed
                    restaurantVariables.newOrder.items ?
                        restaurantVariables.newOrder.items.map(
                            item => (
                                <li>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </li>
                            )
                        ) : <p>lalalala</p>
                }
            </ul>

            {/* get total from all orders from bill --> js functie schrijven */}
            <p>totaal</p>
            <button>afrekenen</button>
        </article>
    );
};

export default clientDetail;