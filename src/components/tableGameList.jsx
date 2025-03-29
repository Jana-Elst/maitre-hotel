import { productData } from "../data";
import { tableHasGame } from "../functions"

const tableGameList = ({ restaurantVariables, table }) => {
    return (<ul>
        {
            restaurantVariables.games.map(game =>
                tableHasGame(game, table)
                    ? <li key={`${game.gameId}`}>{productData.products.filter(product => game.gameId === product.id).map(product => product.name)}</li>
                    : ""
            )
        }
    </ul>)
}

export default tableGameList;