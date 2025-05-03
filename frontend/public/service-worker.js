self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activated');
    return self.clients.claim();
  });
  
  self.addEventListener('push', (event) => {
    console.log('[Service Worker] Push received');
  
    let data = {};
  
    if (event.data) {
      data = event.data.json();
    }
  
    const title = data.title || 'New Notification';
    const options = {
      body: data.body || 'You have a new message.',
      icon: data.icon || '/icon-192x192.png',
      badge: data.badge || '/badge-icon.png',
      data: {
        url: data.url || '/',
      },
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  
  self.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Notification click received.');
    event.notification.close();
  
    const urlToOpen = event.notification.data?.url || '/';
  
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  });
  