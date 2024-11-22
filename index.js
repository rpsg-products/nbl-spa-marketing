window.Intercom("boot", {
    api_base: "https://api-iam.intercom.io",
    app_id: "ssuzn7y8",
  });

window.Intercom("update");
setTimeout(() => {
  Intercom('show');
}, 10000);


document.addEventListener('DOMContentLoaded', function() {
  // Check if unique visitor ID exists in cookies
  let uniqueVisitorId = getCookie('uniqueVisitorId');

  if (!uniqueVisitorId) {
    // If unique visitor ID does not exist, generate a new one
    uniqueVisitorId = generateUniqueId();

    // Set the unique visitor ID in cookies with expiry date
    setCookie('uniqueVisitorId', uniqueVisitorId, 365); // Cookie expires in 365 days
  }

  // Check if the unique visitor ID is counted already
  let isCounted = localStorage.getItem(uniqueVisitorId);

  if (!isCounted) {
    // If the unique visitor ID is not counted, increment the counter
    let uniqueVisitors = parseInt(document.getElementById('uniqueVisitors').textContent);
    uniqueVisitors++;
    document.getElementById('uniqueVisitors').textContent = uniqueVisitors;

    // Mark this unique visitor as counted
    localStorage.setItem(uniqueVisitorId, 'true');
  }
});

// Function to generate a unique ID
function generateUniqueId() {
  return 'visitor_' + Math.random().toString(36).substr(2, 9);
}

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '')  + expires + '; path=/';
}

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + '=';
  let cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}
