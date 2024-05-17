
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/chat/',
    componentUrl: './pages/chat.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
