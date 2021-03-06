import { lazy, StrictMode, Suspense, useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const theme = useState('pink');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <Suspense fallback={<h2>loading route...</h2>}>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link to='/' className="text-6xl text-white hover:text-gray-200">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path='/details/:id' >
                <Details />
              </Route>
              <Route path='/'>
                <ThemeContext.Provider value={['green']}>
                  <SearchParams />
                </ThemeContext.Provider>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;