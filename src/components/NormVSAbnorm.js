//import LabCard from "./LabCard"
import { Card } from "semantic-ui-react";

function NormVSAbnorm({ abnormalLabList, normalLabList }) {

    return (
        <>

            <p>abnormal results</p>
            <Card.Group itemsPerRow={3}>{abnormalLabList}</Card.Group>
            {<br />}
            <p>normal results</p>
            <Card.Group itemsPerRow={3}>{normalLabList}</Card.Group>

        </>
    )
}

export default NormVSAbnorm