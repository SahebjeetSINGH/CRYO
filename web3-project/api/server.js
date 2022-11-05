import  express  from 'express';
const app = express();
import nodeFetch from "node-fetch";
const port = 3001;
import cors from 'cors';
import phq from 'predicthq';
const client = new phq.Client({access_token: 'hu1gS2FvtMeRwNV4SCpZTwSrmRtvoXAuWisqT2--' , fetch: nodeFetch});
app.use(express.json());
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,          
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
const phqEvents = client.events;



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/event/:name', async(req, res) => {
  const response = await phqEvents.search({'q': req.params.name, 'sort': '-start' , 'country' : 'USA'});
  res.send(response);
  console.log(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})