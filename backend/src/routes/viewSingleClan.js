import gotdb from '../server/queries';

const singleClanRoute = (req, res)=> {
  const surname = req.params.clan;
  gotdb.query('select name, surname from members where surname=$1 group by name,surname', [surname], (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).json({ result: results.rows });
  });
};

export default singleClanRoute;
