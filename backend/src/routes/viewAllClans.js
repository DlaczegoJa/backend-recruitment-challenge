import gotdb from '../server/queries';

const allClansRoute = (req, res)=> {
  gotdb.query('Select * FROM clans order by surname', (error, results)=> {
    if (error) {
      throw error;
    }
    res.status(200).json({result: results.rows});
  });
};

export default allClansRoute;
