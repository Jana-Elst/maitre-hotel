import { createBill, getTotal } from "../functions"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ClientCard = ({ table, restaurantVariables }) => {
    const total = getTotal(restaurantVariables, table.id);
    return (
        <button>
            <Card>
                <CardTitle>Tafel {table.id}</CardTitle>
                <CardContent>€ {total}</CardContent>
            </Card>
        </button>
    );
};

export default ClientCard;
