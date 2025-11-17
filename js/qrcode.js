// QR Code Generator JavaScript
// Lightweight QR Code generation library

// ===================================
// QR Code Generation
// ===================================

/**
 * Generate QR Code using a lightweight approach
 * Uses Google Charts API as a simple solution
 */
function generateQRCode(elementId, url, size = 256) {
  const qrContainer = document.getElementById(elementId);
  
  if (!qrContainer) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }
  
  // Clear existing content
  qrContainer.innerHTML = '';
  
  // Create QR code using Google Charts API
  const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(url)}&chs=${size}x${size}&choe=UTF-8`;
  
  const img = document.createElement('img');
  img.src = qrCodeUrl;
  img.alt = 'QR Code pour accéder au menu';
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  
  qrContainer.appendChild(img);
  
  return img;
}

/**
 * Download QR Code as image
 */
function downloadQRCode(elementId, filename = 'menu-qrcode.png') {
  const qrContainer = document.getElementById(elementId);
  
  if (!qrContainer) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }
  
  const img = qrContainer.querySelector('img');
  
  if (!img) {
    console.error('No QR code image found');
    return;
  }
  
  // Create a temporary link to download the image
  const link = document.createElement('a');
  link.href = img.src;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ===================================
// Initialize QR Codes on Page Load
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  // Get the current page URL
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
  const menuUrl = baseUrl + 'menu.html';
  
  // Generate QR code if container exists
  const qrContainer = document.getElementById('qrcode');
  if (qrContainer) {
    generateQRCode('qrcode', menuUrl, 256);
  }
  
  // Add download functionality if button exists
  const downloadBtn = document.getElementById('download-qr');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      downloadQRCode('qrcode', 'restaurant-menu-qrcode.png');
    });
  }
  
  // PWA Install button functionality
  const installBtn = document.getElementById('install-pwa');
  let deferredPrompt;
  
  if (installBtn) {
    // Hide button by default
    installBtn.style.display = 'none';
    
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      // Show the install button
      installBtn.style.display = 'inline-block';
    });
    
    // Handle install button click
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) {
        return;
      }
      
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log(`User response to the install prompt: ${outcome}`);
      
      // Clear the deferredPrompt variable
      deferredPrompt = null;
      
      // Hide the install button
      installBtn.style.display = 'none';
    });
    
    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      installBtn.style.display = 'none';
    });
  }
});
