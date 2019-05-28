import gotdb from '../server/queries';

const newClanRoute = (req, res)=> {
  const {surname} = req.body;
  gotdb.query('insert into clans (surname) values ($1)', [surname], (error)=> {
    if (error) {
      throw error;
    }
    res.status(201).send('Ok');
  });
};

export default newClanRoute;
