import {NextApiRequest, NextApiResponse} from 'next';

// http://localhost:3000/api/hello
export default (_: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({text: 'Hello'});
};
