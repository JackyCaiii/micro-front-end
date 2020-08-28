import store from "@/store";
import router from "@/router";
import AppLayout from "@/components/AppLayout";

export default {
  registerModule({ name, store: moduleStore = {}, generator }) {
    registerVuxModule(name, moduleStore);
    generateRoutes(name, generator);
  }
};

function registerVuxModule(name, moduleStore) {
  moduleStore.namespaced = true;
  store.registerModule(name, moduleStore);
}

function generateRoutes(name, generator) {
  const menus = store.getters.menus;
  const target = menus.filter(item => item.route.includes(name));
  const routes = [];
  handleGenerate(routes, generator, target);
  router.addRoutes(routes);
}

function handleGenerate(routes, generator, children, rootRoute) {
  children.forEach(item => {
    const children = item.children;
    const route = rootRoute ? `${rootRoute}/${item.route}` : item.route;
    const [, modulePath] = route.split("/");
    const name = rootRoute ? `${modulePath}-${item.route}` : modulePath;
    const result = {
      path: route,
      name: name,
      meta: { title: item.name }
    };
    if (children) {
      const first = children[0];
      result.redirect = `${route}/${first.route}`;
    } else {
      result.component = generator(item.route);
    }
    routes.push({
      path: "/",
      component: AppLayout,
      children: [result]
    });
    children && handleGenerate(routes, generator, item.children, route);
  });
}
