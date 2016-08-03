var $about = $('#about');
var $work = $('#work');
var $blog = $('#blogposts');
var $contact = $('#contact');

page('/', about);
page('/work', work);
page('/blog', blog);
page('/contact', contact);

page();

function about() {
  showPage($about);
}

function work() {
  showPage($work);
}

function blog() {
  showPage($blog);
}

function contact() {
  showPage($contact);
}

function showPage($element) {
  $('[data-page]').hide();
  $element.show();
}

function fetchArticles(callback) {
  $.get('data.json').then(callback);
}
