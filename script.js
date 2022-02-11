if(/Android|webOS|iPhone|iPod|BlackBerry/i.test (navigator.userAgent)) {
  window.location.href = "/mobile";
} else {
  window.location.href = "/computer";
}
