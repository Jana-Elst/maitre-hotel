import { tableHasGame } from "../functions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
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
                                ? tableHasGame(restaurantVariables, game, restaurantVariables.activeState.tableId)
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
        <button onClick={() => changeGame()} disabled={checkAvailable() <= 0 && !tableHasGame(restaurantVariables, game)}>
            <Card className={`${tableHasGame(restaurantVariables, game) ? "bg-zinc-200 border-zinc-300" : checkAvailable() <= 0 && !tableHasGame(restaurantVariables, game) ? "opacity-30" : ""} gameCard hover:bg-zinc-100`}>
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent className='gameCard__content'>
                    <p>Aantal: {product.value}</p>
                    <p>Beschikbaar: {checkAvailable()}</p>
                    <ul className='gameCard__tableList'>
                        {
                            game
                                ? game.tableIds.map(tableId => <li key={tableId}>Tafel {tableId}</li>)
                                : ""
                        }
                    </ul>
                </CardContent>
            </Card>
        </button >
    )
};


export default GameCard;