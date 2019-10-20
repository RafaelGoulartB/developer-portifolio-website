const services = document.querySelectorAll('#service');

for (let i = 0; i < services.length; i++) {
  services[i].addEventListener('mouseover', () => {
    // Add class in clicked div
    services[i].classList.add('service-active');
    // Remove of outhers
    if (i == 0) {
      services[1].classList.remove('service-active');
      services[2].classList.remove('service-active');
    }
    if (i == 1) {
      services[0].classList.remove('service-active');
      services[2].classList.remove('service-active');
    }
    if (i == 2) {
      services[0].classList.remove('service-active');
      services[1].classList.remove('service-active');
    }
  });
}
