var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})

sudo certbot certonly --non-interactive --email matisse.bouchy@gmail.com --preferred-challenges http --standalone --agree-tos --renew-by-default --webroot-path /var/www/vadn.ovh/ -d *.example.com --dry-run