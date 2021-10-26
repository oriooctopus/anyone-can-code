import { useGetLessonDataQuery } from './generated/graphql';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';

function App() {
  return (
    <Router>
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
