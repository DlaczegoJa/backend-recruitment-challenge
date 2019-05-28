import gotdb from '../server/queries';

const killClanRoute = (req, res)=> {
  const surname = req.params.name;
  gotdb.query('delete from clans where surname=$1', [surname], (error,results)=> {
    if (error) {
      throw error;
    }
    res.status(200).send('Ok');
  });
};

export default killClanRoute;
