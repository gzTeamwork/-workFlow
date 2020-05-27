import AppAbout from '@/applications/about/app'
import applications from '@/core/settings'
import set = Reflect.set;

export class AppCore {
  appName: string;
  urls: { [key: string]: string; } = {};

  constructor (appName: string) {
    console.debug(`系统安装应用:${appName}`)
    this.appName = appName
  }
}

export class AppRouter {
  _routes: Array<object> | undefined;

  constructor (apps: applications) {
    let _self = this
    _self._routes = []
    console.debug(applications)
    for (let app in applications) {
      console.debug(`自动加载appsUrls列表:[${app}]`)
      // @ts-ignore
      const _appClass: any = () => import(`@/applications/${app}/app`)
      let _appUrls = new _appClass()
      console.debug('动态加载', _appUrls)
      for (let urlsKey in _appUrls) {
        let Node = _self
          .buildRouteNode(
            urlsKey,
            urlsKey,
            _appUrls[urlsKey])
        console.log(Node)
        // @ts-ignore
        RootNode.children.push(Node)
      }
      // @ts-ignore
      _self._routes.push(RootNode || {})
    }
  }

  buildRouteNode (name: string, path: string, compPath: any = false) {
    return {
      path: path,
      name: name,
      component: compPath === true ? () => compPath : null,
      children: []
    }
  }
}
