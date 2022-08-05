import { NextApiRequest, NextApiResponse } from 'next';

// req = HTTP incoming message, res = HTTP server response
function App(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello, world!' });
}

export default App;