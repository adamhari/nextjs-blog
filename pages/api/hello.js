// access via http://localhost:3000/api/hello
export default (req, res) => {
	res.status(200).json({text: 'Hello'});
};
