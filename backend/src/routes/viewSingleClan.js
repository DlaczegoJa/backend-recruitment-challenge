import gotdb from '../server/queries';

const singleClanRoute = (req, res)=> {
  const surname = req.params.surname;
  gotdb.query('SELECT DISTINCT surname, name FROM members WHERE surname=$1 ORDER BY name ASC', [surname], (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).json({result: results.rows});
  });
};

export default singleClanRoute;
