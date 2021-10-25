import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useGetLessonDataQuery } from './generated/graphql';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';
// import { LessonPageContainer } from './pages/Lesson/Lesson';

function App() {
  return (
    <Router>
      <Link to="/test1">link1</Link>
      <Link to="/test2">link2</Link>
      <Switch>
        <Route path="/lesson/:slug">
          <LessonPageContainer />
        </Route>
        <Route path="/test2">yoyo2</Route>
      </Switch>
    </Router>
  );
}

export default App;
