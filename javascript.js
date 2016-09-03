var blogPosts = [];

function BlogPost(opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

//the below uses handlebars which eliminates have to write all the code below,
//I commented it out but I am leabving it in for now
var newTemplate = $('#recent-posts').html();
var recentPostsCompiled = Handlebars.compile(newTemplate);

$('[data-content=blog]').on('click', function(e) {
  $('#blogposts').show();
  $('#work, #about, #contact').hide();
  $.ajax({
    type: 'GET',
    url: 'scripts/blog.json',
    success: function(json) {
      console.log('made it here');
      var html = recentPostsCompiled({
        posts: json
      });
      $('#blogposts').html(html);
    }
  });
  e.preventDefault();
});

$('[data-content="about"]').on('click', function() {
  $('#about').show();
  $('#work, #contact, #blogposts').hide();
});
$('[data-content="work"]').on('click', function() {
  $('#work').show();
  $('#blogposts, #about, #contact').hide();
});
$('[data-content="contact"]').on('click', function() {
  $('#contact').show();
  $('#blogposts, #about, #work').hide();
});
//below shows the about page once the javascript has loaded
$('[data-content="about"]').triggerHandler('click');

$('#work').featherlightGallery({
  gallery: {
    fadeIn: 300,
    fadeOut: 300
  },
  openSpeed: 300,
  closeSpeed: 300
});
$('#submission').on('submit', function(event) {
  if (event.keyCode === 13) {
    submitComment(event);
  };
});

function submitComment(event) {
  event.preventDefault();
  var comment = $('[name="comment"]').val().trim();
  var name = $('[name="name"]').val().trim();
  var mail = $('[name="mail"]').val().trim();
  console.log(comment, name, mail);
  alert('Success!');
};
