import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'src/pages/Home';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';
import { PageNotFound } from 'src/pages/PageNotFound';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { SidebarOverlay } from 'components/SidebarOverlays/SidebarOverlay';
import { TSidebarOverlayState } from 'components/SidebarOverlays/SidebarOverlayContext';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

function App() {
  const [overlayState, setOverlayState] = useState<TSidebarOverlayState>();

  return (
    <Router basename="/">
      <SidebarOverlayContext.Provider value={{ overlayState, setOverlayState }}>
        <SidebarOverlay />
        {/* <AuthModal /> */}

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
