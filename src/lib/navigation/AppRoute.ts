export enum AppRoute {
    Homepage = '/',
    About = '/about',
    Contact = '/contact',
    Blog = '/blog',
}

export const appRoutes: Map<AppRoute, string> = new Map([
    [AppRoute.Homepage, 'Home'],
    [AppRoute.Blog, 'Blog'],
    [AppRoute.About, 'About'],
    [AppRoute.Contact, 'Contact'],
]);
