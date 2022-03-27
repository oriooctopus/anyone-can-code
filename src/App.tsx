import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'src/pages/Home';
import { LessonPageContainer } from 'src/pages/Lesson/Lesson';
import { PageNotFound } from 'src/pages/PageNotFound';
import { SidebarOverlay } from 'components/SidebarOverlays/SidebarOverlay';
import { TSidebarOverlayState } from 'components/SidebarOverlays/SidebarOverlayContext';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

function App() {
  const [overlayState, setOverlayState] = useState<TSidebarOverlayState>();
  console.log('one');
  const ww = process.env.NODE_ENV.trim.toLowerCase();
  if (ww === 'production') {
    console.log('Another one');
  } else {
    console.log('test');
  }
  return (
    <Router>
      <SidebarOverlayContext.Provider value={{ overlayState, setOverlayState }}>
        <SidebarOverlay />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">test1234</Route>
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
