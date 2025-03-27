import { tableHasGame } from "../functions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const GameCard = ({ product, restaurantVariables, setRestaurantVariables }) => {
    const game = restaurantVariables.games.find((g) => g.gameId === product.id);
    const checkAvailable = () => {
        const total = product.value;
        let totalAvailable = total;
        if (game) {
            const totalUnavailable = game.tableIds.length;
            totalAvailable = total - totalUnavailable;
        }

        return totalAvailable;
    }

    const changeGame = () => {
        if (restaurantVariables.activeState.tableId) {
            const tmpRestVar = {
                ...restaurantVariables,
                games:
                    restaurantVariables.games.some(game => game.gameId === product.id)
                        ? restaurantVariables.games.map(game =>
                            game.gameId === product.id
                                ? tableHasGame(restaurantVariables, game)
                                    ? {
                                        ...game,
                                        tableIds: game.tableIds.filter(tId => tId !== restaurantVariables.activeState.tableId)
                                    }
                                    : {
                                        ...game,
                                        tableIds: [...game.tableIds, restaurantVariables.activeState.tableId]
                                    }
                                : game
                        )
                        : [
                            ...restaurantVariables.games,
                            {
                                gameId: product.id,
                                tableIds: [restaurantVariables.activeState.tableId]
                            }
                        ]
            }

            console.log(tmpRestVar);
            setRestaurantVariables(tmpRestVar);
        }
    }

    return (
        <Button onClick={() => changeGame()} disabled={checkAvailable() <= 0 && !tableHasGame(restaurantVariables, game)} className={`${tableHasGame(restaurantVariables, game) ? "bg-zinc-300" : ""} min-w-40 min-h-25 flex flex-col`} min-w-40 min-h-25 flex flex-col variant="outline">
            <h3>{product.name}</h3>
            <p>Aantal: {product.value}</p>
            <p>Beschikbaar: {checkAvailable()}</p>
            <ul>
                {
                    game
                        ? game.tableIds.map(tableId => <li>tafel {tableId}</li>)
                        : ""
                }
            </ul>
        </Button>
    )
};


export default GameCard;