export enum AppRoute {
    Homepage = '/',
    About = '/about',
    Contact = '/contact',
}

export const appRoutes: Map<AppRoute, string> = new Map([
    [AppRoute.Homepage, 'Home'],
    [AppRoute.About, 'About'],
    [AppRoute.Contact, 'Contact'],
]);
