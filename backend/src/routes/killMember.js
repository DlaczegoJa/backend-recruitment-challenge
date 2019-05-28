import gotdb from '../server/queries';

const killMemberRoute = (req, res)=> {
  const surname = req.params.clan;
  const name = req.params.name;
  gotdb.query('delete from members where (name=$1 AND surname=$2);', [name, surname], (error,results)=> {
    if (error) {
      throw error;
    }
    res.status(200).send('Ok');
  });
};

export default killMemberRoute;
