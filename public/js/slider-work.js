let imgs = {
  'imgs': [
    {
      'name': 'E-commercer Quantom',
      'date': 'January 2019',
      'work': 'Development',
      'type': 'Node.js, HTML, CSS',
      'alt': 'Project E-commercer Quanton created using Node.js and Mysql',
      'urlImg': './img/works/quantom-slider.jpg',
      'url': 'https://github.com/RafaelGoulartB/Ecommerce-Quantum',
    },
    {
      'name': 'Marketica LandingPage',
      'date': 'January 2019',
      'work': 'Development',
      'type': 'Front-End',
      'alt': 'Project Marketica landingpage created using HTML, CSS',
      'urlImg': './img/works/marketica-slider.jpg',
      'url': 'https://rafaelgoulartb.github.io/Marketika-LandingPage/',
    },
    {
      'name': 'Memesum LandingPage',
      'date': 'January 2019',
      'work': 'Development',
      'type': 'Front-End',
      'alt': 'Project Memesum landingpage created using HTML, CSS',
      'urlImg': './img/works/memesum-slider.jpg',
      'url': 'https://rafaelgoulartb.github.io/Memesan-LandingPage/',
    },
  ]};


function updateSlider(array) {
  // Imagems in slider
  document.getElementById('slider-next').innerHTML = createImg(array.imgs[0].urlImg, array.imgs[0].alt);
  document.getElementById('slider-current').innerHTML = createImg(array.imgs[1].urlImg, array.imgs[1].alt);
  document.getElementById('slider-pre').innerHTML =createImg(array.imgs[2].urlImg, array.imgs[2].alt);
  // Text in slider hover
  document.getElementById('project-name-label').innerHTML = array.imgs[1].name;
  document.getElementById('date-label').innerHTML = array.imgs[1].date;
  document.getElementById('work-label').innerHTML = array.imgs[1].work;
  document.getElementById('type-label').innerHTML = array.imgs[1].type;
  document.getElementById('link-label').href = array.imgs[1].url;
}

function createImg(src, alt) {
  return `<img src="${src}" alt="${alt}"></img>`;
}

updateSlider(imgs);

function previous_slider() {
  const new_imgs = {
    'imgs': [
      imgs.imgs[1], imgs.imgs[2], imgs.imgs[0],
    ],
  };
  updateSlider(new_imgs);
  imgs = new_imgs;
}

function next_slider() {
  const new_imgs = {
    'imgs': [
      imgs.imgs[2], imgs.imgs[0], imgs.imgs[1],
    ],
  };
  updateSlider(new_imgs);
  imgs = new_imgs;
}
