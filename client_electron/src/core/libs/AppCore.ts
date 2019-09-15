import settings from "@/core/settings";
import set = Reflect.set;

export class AppCore {

  appName: string;
  urls: { [key: string]: string; } = {};

  constructor(appName: string) {
    console.debug(`已系统安装应用:${appName}`);
    this.appName = appName;
  }
}

export class AppRouter {

  _routes: Array<object> | undefined;

  constructor(applications: Array<string>) {
    let _self = this;
    _self._routes = [];
    if (applications.length > 0) {
      applications.forEach((v, i) => {
        console.debug(`自动加载appsUrls列表:[${v}]`);
        let RootNode = _self.buildRouteNode(v, `/${v}`,);
        const _appClass: any = async() => await import(`@/applications/${v}/app`);
        let _appUrls = new _appClass();
        console.log('动态加载',_appUrls)
        for (let urlsKey in _appUrls) {
          let Node = _self.buildRouteNode(
            urlsKey,
            urlsKey,
            _appUrls[urlsKey]);
          console.log(Node);
          // @ts-ignore
          RootNode.children.push(Node);
        }
        // @ts-ignore
        _self._routes.push(RootNode || {})
      })
    }

  }

  buildRouteNode(name: string, path: string, compPath: any = false) {
    return {
      path: path,
      name: name,
      component: compPath != false ? () => compPath : null,
      children: [],
    }
  }
}
