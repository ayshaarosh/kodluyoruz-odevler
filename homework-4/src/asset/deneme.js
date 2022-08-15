import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> Ana sayfa</Link>
          </li>
          <li>
            <Link to="/About">Hakımızda</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Ana sayfa</h2>
    </div>
  );
}

function About() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Hakımızda</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Render</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Bileşenler</Link>
        </li>
        <li>
          <Link to={`${url}/array`}>Dizi</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Lütfen bir konu seçin</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Contact() {
  
  return (
    <div>
      <h3>İletişim</h3>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}