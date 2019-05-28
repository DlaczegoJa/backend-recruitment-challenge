import gotdb from '../server/queries';

const assignMemberRoute = (req, res)=> {
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
