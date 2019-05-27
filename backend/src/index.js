import pingRoute      from './routes/ping';
import Server    from './server/server';
import allClansRoute from './routes/viewAllClans';
import singleClanRoute from './routes/viewSingleClan';

let server = new Server();

server.addApiRoute('GET', '/api/v1/ping', pingRoute);
server.addApiRoute('GET', '/api/v1/clans', allClansRoute);
server.addApiRoute('GET', '/api/v1/clans/:surname/members', singleClanRoute);

server.start();
