var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Test = require('../components/Test');
var PromptContainer=  require('../containers/PromptContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main} >
			<IndexRoute component={Home} />
				<Route path='search' header='Search' component={Test} />
			<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
			<Route path='batte' />
			<Route path='test' component={Test} />
		</Route>
	</Router>

);

module.exports = routes;