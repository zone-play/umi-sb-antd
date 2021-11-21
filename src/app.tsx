export function patchRoutes({ routes }: any) {
  routes.unshift({
    path: '/',
    exact: true,
    component: require('@/pages/index').default,
  });
}
