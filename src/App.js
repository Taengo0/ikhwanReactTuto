import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import ReduxCounter from './ReduxCounter';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/redux">
              <ReduxCounter />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
