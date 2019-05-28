import pingRoute      from './routes/ping';
import Server    from './server/server';
import allClansRoute from './routes/viewAllClans';
import singleClanRoute from './routes/viewSingleClan';
import newClanRoute from './routes/addNewClan';
import assignMemberRoute from './routes/assignMemberToClan';
import killClanRoute from './routes/killClan';
import killMemberRoute from './routes/killMember';

let server = new Server();

server.addApiRoute('GET', '/api/v1/ping', pingRoute);
server.addApiRoute('GET', '/api/v1/clans', allClansRoute);
server.addApiRoute('GET', '/api/v1/clans/:clan/members', singleClanRoute);
server.addApiRoute('POST', '/api/v1/clans', newClanRoute);
server.addApiRoute('POST', '/api/v1/clans/:clan/members', assignMemberRoute);
server.addApiRoute('DELETE', '/api/v1/clans/:name', killClanRoute);
server.addApiRoute('DELETE', '/api/v1/clans/:clan/members/:name', killMemberRoute);

server.start();
