import router from "@/router";
import modules from "@/modules";
import loadjs from "loadjs";

const cache = new Set();

router.beforeEach((to, from, next) => {
  const [, name] = to.path.split("/");
  const module = modules[name];
  if (module) {
    if (!cache.has(name)) {
      loadjs(module, function() {
        cache.add(name);
        next(to);
      });
      return;
    }
  }
  if (to.matched.length > 0) {
    next();
  } else {
    next("/404");
  }
});
