import gotdb from '../server/queries';

const killClanRoute = (req, res)=> {
  const Joi = require('joi');
  const schema = Joi.object().keys({
    surname: Joi.string().required()
  });
  schema.validate(req.params.name, { abortEarly: false }).then((validatedSurname)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  const surname = req.params.name;
  gotdb.query('delete from clans where surname=$1', [surname], (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).send('Ok');
  });
};

export default killClanRoute;
