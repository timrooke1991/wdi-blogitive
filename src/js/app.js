$(() => {
  console.log('JS Loaded');

  // Home Page - Typing animation
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

  // Image preview function
  document.getElementById('image').addEventListener('change', handleFileSelect, false);

  // Only run categories logic on relevent pages
  const tags = new TIB(document.querySelector('input[name="categories"]'));

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
