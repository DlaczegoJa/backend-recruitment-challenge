import gotdb from '../server/queries';

const singleClanRoute = (req, res)=> {
  const Joi = require('joi');
  const schema = Joi.object().keys({
    surname: Joi.string().required()
  });
  schema.validate(req.params.clan, { abortEarly: false }).then((validatedSurname)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  const surname = req.params.clan;
  gotdb.query('select name, surname from members where surname=$1 group by name,surname', [surname], (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).json({ result: results.rows });
  });
};

export default singleClanRoute;
