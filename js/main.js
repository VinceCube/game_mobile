/*window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}*/
window.addEventListener('beforeinstallprompt', function(event) {
  event.preventDefault(); // Prevent automatic prompt
  var deferredPrompt = event;
  
  // Show your custom "Add to Home Screen" button or UI
  myAddToHomeScreenButton.addEventListener('click', function() {
    deferredPrompt.prompt(); // Show installation prompt
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null; // Reset the deferred prompt
    });
  });
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}