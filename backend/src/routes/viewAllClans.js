import gotdb from '../server/queries';

const allClansRoute = (req, res)=> {
  gotdb.query('select surname from clans group by surname;', (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).json({ result: results.rows });
  });
};

export default allClansRoute;
