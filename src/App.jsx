import React from 'react'
import { Route, Switch, useLocation } from 'wouter'
import Auth from './views/Auth'
import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  const [location, setLocation] = useLocation()
  setLocation('/auth')
  return (
    <div>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
