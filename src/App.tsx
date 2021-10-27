import { useGetLessonDataQuery } from './generated/graphql';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';
import { SidebarOverlay } from 'components/SidebarOverlays/SidebarOverlay';
import { TSidebarOverlayState } from 'components/SidebarOverlays/SidebarOverlayContext';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

function App() {
  const [overlayState, setOverlayState] = useState<TSidebarOverlayState>();

  return (
    <SidebarOverlayContext.Provider value={{ overlayState, setOverlayState }}>
      <SidebarOverlay />
      <Router>
        <Switch>
          <Route path="/lesson/:slug">
            <LessonPageContainer />
          </Route>
          <Route path="/test2">yoyo2</Route>
        </Switch>
      </Router>
    </SidebarOverlayContext.Provider>
  );
}

export default App;
