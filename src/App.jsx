import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
import './App.css';

import AlbumPage from './components/AlbumPage/AlbumPage';
import PhotoPage from './components/PhotoPage/PhotoPage';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/albums/:id' exact>
          <AlbumPage />
        </Route>
        <Route path='/photos/:id' exact>
          <PhotoPage />
        </Route>
        <Route path='/photos' exact>
          <HomePage />
        </Route>
        <Route>
          <Redirect to='/photos' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
