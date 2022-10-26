import { Route, withRouter, Switch } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";

// views
import Views from "./modules/Views";

const routes = [
  // ---------------Landing-------
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  }
];

// export default routes;

const RouterSwitch = ({ location }) => (
  <Switch>
    {routes
      .filter((route) => !route.isDeactive)
      .map((route) => {
        return (
          <Route
            key={location.pathname}
            exact={route.exact}
            path={route.path}
            component={route.layout(route.component)}
          />
        );
      })}
  </Switch>
);

export default withRouter(RouterSwitch);