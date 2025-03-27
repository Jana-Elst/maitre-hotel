import ClientList from "./clientList";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ClientDashboard = ({ restaurantVariables, setRestaurantVariables }) => {
    return (
        <Card className="clients">
            <h2>Overzicht</h2>
            <ClientList restaurantVariables={restaurantVariables} setRestaurantVariables={setRestaurantVariables} />
            <Button>Reserveren</Button>
            <Button variant="outline">gezelschapsspel</Button>
        </Card>
    );
};

export default ClientDashboard;