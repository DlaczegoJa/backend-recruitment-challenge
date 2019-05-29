import gotdb from '../server/queries';

const killMemberRoute = (req, res)=> {
  const Joi = require('joi');
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required()
  });
  schema.validate(req.params.name, { abortEarly: false }).then((validatedName)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  schema.validate(req.params.surname, { abortEarly: false }).then((validatedSurname)=> {
    res.status(200).send('Ok');
  })
    .catch((validationError)=> {
      const errorMessage = validationError.details.map((det)=> det.message);
      res.statsu(400).send(errorMessage);
    });
  const surname = req.params.clan;
  const name = req.params.name;
  gotdb.query('delete from members where (name=$1 AND surname=$2);', [name, surname], (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).send('Ok');
  });
};

export default killMemberRoute;
