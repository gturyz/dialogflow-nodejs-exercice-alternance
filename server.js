// test
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/send/:message', async (req, res) => {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath('lilylearn-test', sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.params.message,
        // The language used by the client (en-US)
        languageCode: 'fr-FR',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);

  const result = responses[0].queryResult;
  // }
  res.send(result.fulfillmentText)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

