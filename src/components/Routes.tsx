import Home from 'pages/Home';
import { Route, Routes as RoutesFromRouter } from 'react-router-dom';

import FullScreen from 'design/Layouts/FullScreen';

import CreatePage from 'modules/create/pages/Creates';

import ParticipatePage from 'modules/participate/pages/Participate';

const Routes = () => (
  <RoutesFromRouter>
    <Route element={<FullScreen showNavigation={false} />}>
      <Route path={'/'} element={<Home />} />
    </Route>
    <Route element={<FullScreen />} path={'/create'}>
      <Route path={'/create'} element={<CreatePage />} />
    </Route>
    <Route element={<FullScreen />} path={'/participate'}>
      <Route path={'/participate'} element={<ParticipatePage />} />
    </Route>
    <Route path="*" element={<FullScreen />} />
  </RoutesFromRouter>
);
export default Routes;
