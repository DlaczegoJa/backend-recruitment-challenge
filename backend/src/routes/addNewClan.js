import gotdb from '../server/queries';

const newClanRoute = (req, res)=> {
  const Joi = require('joi');
  const { surname } = req.body;
  const schema = Joi.object().keys({
    surname: Joi.string().max(30).required()
  });
  Joi.validate(surname, schema, (error, value)=> {
    const id = Math.ceil(Math.random() * 99999);
    if (error) {
      res.status(422).json({
        status: 'error',
        message: 'Invalid data type',
        surname: surname
      }
      );
    } else {
      res.json({
        status: 'success',
        message: 'Ok',
        surname: Object.assign({ id }, value)
      });
    }
  }
  );
  gotdb.query('insert into clans (surname) values ($1)', [surname], (error)=> {
    if (error) {
      throw error;
    }
    res.status(201).send('Ok');
  });
};

export default newClanRoute;
