import gotdb from '../server/queries';

const assignMemberRoute = (req, res)=> {
  const Joi = require('joi');
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required()
  });
  schema.validate(req.body, { abortEarly: false }).then((validatedName)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  schema.validate(req.params.clan, { abortEarly: false }).then((validatedSurname)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  const surname = req.params.clan;
  const { name } = req.body;
  gotdb.query('insert into members (name, surname) values ($1, $2)', [name, surname], (error)=> {
    if (error) {
      throw error;
    }
    res.status(201).send('Ok');
  });
};

export default assignMemberRoute;
