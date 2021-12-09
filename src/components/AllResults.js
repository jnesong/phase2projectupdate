//import LabCard from "./LabCard"
import { Card } from "semantic-ui-react";


function AllResults({ allLabsList }) {
    return (
        <>

            <p> pathophysiology </p>
            <Card.Group itemsPerRow={3}>{allLabsList}</Card.Group>

        </>
    )
}

export default AllResults