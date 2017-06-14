$(() => {
  console.log('JS Loaded');

  // Home Page - Typing animation
  if ($('.txt-rotate')) typeAnimation();

  // Image preview function
  // if ($('form'))

  // Only run categories logic on relevent pages
  if ($('input[name="categories"]').length > 0) {
    console.log('running');
    document.getElementById('image').addEventListener('change', handleFileSelect, false);
    const tags = new TIB(document.querySelector('input[name="categories"]'));
  }

  var chartValues = $('#myChart').data('value').split(',').map((value) => { return parseFloat(value) });
  var labelValues = $('#myChart').data('labels').split(',').map((value) => { return value });
  console.log(chartValues);
  console.log(labelValues);
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelValues,
      datasets: [{
        label: 'Sentiment',
        data: chartValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

});

function handleFileSelect(evt) {
  const files = evt.target.files;
  const listContainer = document.getElementById('list');
  console.log('I made it!');
  listContainer.innerHTML = '';
  // Loop through the FileList and render image files as thumbnails.
  for (let i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    const reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        const span = document.createElement('span');
        span.innerHTML =
        [
          '<img class="image is-2by1" src="',
          e.target.result,
          '" title="', escape(theFile.name),
          '"/>'
        ].join('');

        listContainer.insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

function typeAnimation() {
  const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class=\'wrap\'>'+this.txt+'</span>';

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting)  delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  };
}
