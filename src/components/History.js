
import { Card } from 'semantic-ui-react';


function History({ history, setHistory }) {


    const historyList = history.map(pastInput => {

        function handleOnClick() {
            fetch(`http://localhost:3001/history/${pastInput.id}`,
              { method: "DELETE" })
            let updatedHistory = history.filter(obj => obj.id !== pastInput.id)
            setHistory(updatedHistory)
          }

        return <Card key={pastInput.id}>
            <Card.Content>
                <Card.Header>Patient ID : {pastInput.id}</Card.Header>
                <Card.Meta>date/time</Card.Meta>
                <Card.Description>
                    hemoglobin: {pastInput.hemoglobin.userInput}
                    {<br />}
                    white blood cells: {pastInput["white blood cells"].userInput}
                    {<br />}
                    sodium: {pastInput.sodium.userInput}
                    {<br />}
                    potassium: {pastInput.potassium.userInput}
                    {<br />}
                    calcium: {pastInput.calcium.userInput}
                    {<br />}
                    blood glucose: {pastInput["blood glucose"].userInput}
                    {<br />}
                    {<br />}
                </Card.Description>
                <Card.Content extra>
                    <button className="ui icon button" onClick={handleOnClick}>
                    <i className="trash alternate outline icon"></i>
                    </button>
                </Card.Content>
            </Card.Content>
        </Card>
    })

    return (
        <>
            <p> history </p>
            <Card.Group itemsPerRow={3}>{historyList}</Card.Group>
        </>
    )
}

export default History

