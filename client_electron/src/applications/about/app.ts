import {AppCore} from "@/core/libs/AppCore";

class AppAbout extends AppCore {

  urls = {
    '': './pages/index.vue'
  }

  constructor() {
    super('About')
  }
}

export default AppAbout;
