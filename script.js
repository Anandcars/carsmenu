const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const cars = [ { model: 'XC40', id: 1 }, { model: 'XC60', id: 2 }, { model: 'XC90', id: 3 } ];

//READ Request Handlers
app.get('/', (req, res) => {
	res.send('Any optimization that is not about the bottleneck is an illusion of improvement');
});

app.get('/api/cars', (req, res) => {
	res.send(cars);
});

app.get('/api/cars/:id', (req, res) => {
	const book = cars.find((c) => c.id === parseInt(req.params.id));

	if (!book)
		res
			.status(404)
			.send(
				'<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
			);
	res.send(book);
});

//CREATE Request Handler
app.post('/api/cars', (req, res) => {
	const { error } = validateBook(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const book = {
		id: cars.length + 1,
		model: req.body.model
	};
	cars.push(book);
	res.send(book);
});

//UPDATE Request Handler
app.put('/api/cars/:id', (req, res) => {
	const book = cars.find((c) => c.id === parseInt(req.params.id));
	if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

	const { error } = validateBook(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	book.model = req.body.model;
	res.send(book);
});

//DELETE Request Handler
app.delete('/api/cars/:id', (req, res) => {
	const book = cars.find((c) => c.id === parseInt(req.params.id));
	if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

	const index = cars.indexOf(book);
	cars.splice(index, 1);

	res.send(book);
});

function validateBook(book) {
	const schema = {
		model: Joi.string().min(3).required()
	};
	return Joi.validate(book, schema);
}

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
