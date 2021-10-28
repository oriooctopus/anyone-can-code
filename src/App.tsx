import { Home } from 'pages/Home';
import { PageNotFound } from 'pages/PageNotFound';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';
import { Layout } from 'components/Layout/Layout';
import { SidebarOverlay } from 'components/SidebarOverlays/SidebarOverlay';
import { TSidebarOverlayState } from 'components/SidebarOverlays/SidebarOverlayContext';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

function App() {
  const [overlayState, setOverlayState] = useState<TSidebarOverlayState>();

  return (
    <Router>
      <SidebarOverlayContext.Provider value={{ overlayState, setOverlayState }}>
        <SidebarOverlay />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lesson/:slug">
            <LessonPageContainer />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </SidebarOverlayContext.Provider>
    </Router>
  );
}

export default App;
