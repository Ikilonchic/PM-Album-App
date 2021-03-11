import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
 } from 'react-router-dom';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import AlbumPage from './components/AlbumPage/AlbumPage';
import PhotoPage from './components/PhotoPage/PhotoPage';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles['container']}>
        <Header>
          <Link to="/photos">Home</Link>
        </Header>
        <main className={styles['container__main']}>
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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
