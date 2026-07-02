importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBRsEFsDhYuxptfsQwNy2pnZvvq28FW5nY",
  authDomain: "smgo-6137e.firebaseapp.com",
  projectId: "smgo-6137e",
  storageBucket: "smgo-6137e.firebasestorage.app",
  messagingSenderId: "568684281036",
  appId: "1:568684281036:web:35af27b7d1e316c86c9669",
  measurementId: "G-L60V8QS154"

});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);

  

  // support show notification on browser
  // see 
  // 0: https://codingwithtashi.medium.com/flutter-web-push-notification-with-firebase-cloud-messaging-adc788dc621d
  // 1. https://stackoverflow.com/questions/66519726/flutter-web-app-receives-push-notification-but-broswer-doesnt-show-it
  // 2. https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
});
