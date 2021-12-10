import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';

function LabCard({ lab }) {

  const [isDecreased, setIsDecreased] = useState(true);
  const [displayInterfer, setDisplayInterfer] = useState(false);

  useEffect(() => {
    if (lab.userInput > lab.max) { setIsDecreased(false) }
    else if (lab.userInput < lab.min) { setIsDecreased(true) }
    else { setIsDecreased(null) }
  }, [lab.userInput, lab.max, lab.min])

  let increasedList = lab.increased.map(reason => <li key={reason}> {reason} </li>)
  let decreasedList = lab.decreased.map(reason => <li key={reason}> {reason} </li>)

  function onFlipClickHandle() {
    setDisplayInterfer(!displayInterfer)
  }

  let interferList = lab.interfer.map(reason => <li key={reason}> {reason} </li>)

  const resultsDisplay =
    <Card.Description>
      <strong>{lab.id}</strong>
      <div className="boldMe">
        {isDecreased ? "LOW" : "ELEVATED"}
      </div>
      Reasons why:
      {<br />}
      {isDecreased ? decreasedList : increasedList}
    </Card.Description>

  const interferDisplay =
    <Card.Description>
      <strong>{lab.id}</strong>
      <div className="purpleMe">
        Interfering Factors:
      </div>
      {<br />}
      {interferList}
    </Card.Description>

  return (
    <Card>
      <Card.Content>
        <Card.Header>{lab.title}</Card.Header>
        <Card.Meta>{lab.min} - {lab.max} {lab.unit}</Card.Meta>

        {displayInterfer ? interferDisplay : resultsDisplay }

      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={onFlipClickHandle}>
            Flip
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default LabCard

