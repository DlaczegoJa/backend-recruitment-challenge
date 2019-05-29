import gotdb from '../server/queries';

const newClanRoute = (req, res)=> {
  const Joi = require('joi');
  const { surname } = req.body;
  const schema = Joi.object().keys({
    surname: Joi.string().required()
  });
  schema.validate(req.body, { abortEarly: false }).then((validatedSurname)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  gotdb.query('insert into clans (surname) values ($1)', [surname], (error)=> {
    if (error) {
      throw error;
    }
    //res.status(201).send('Ok');
  });
};

export default newClanRoute;
