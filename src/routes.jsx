import { Route, withRouter, Switch } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import DetailLayout from "./layouts/DetailLayout";

// views
import Views from "./modules/Views";

const routes = [
  // ---------------Landing-------
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  },

  // ---------------ServiceDetails---------
  {
    path: "/serviceDetails/:serviceTypeId",
    layout: DetailLayout,
    exact: true,
    component: Views.ServiceDetailsView,
  },
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