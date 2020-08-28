// import routes from "./routes";
import store from "./store";
import { system } from "app";
import _package from "../package.json";

// export default {
//   routes,
//   store
// };

system.registerModule({
  name: _package.name,
  store,
  generator: path => () => import(`@/views/${path}/index.vue`)
});
