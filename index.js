
var innerHtml_ui_ux, innerHtml_web_dev;

$(".web-dev").mouseenter(function(){
  innerHtml_web_dev = $(this).html();
  $(this).html(
  "<ul class='web-dev-skills'><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>JQuery</li>"
  );
});

$(".web-dev").mouseleave(function(){
  $(this).html(innerHtml_web_dev);
})


$(".ui-ux").mouseenter(function(){
  innerHtml_ui_ux = $(".ui-ux").html();
  $(".ui-ux").html(
  "<ul class='ui-ux-skills'><li>Adobe XD</li><li>Figma</li><li>Ideation</li><li>Creating Sitemaps</li><li>Wireframing</li><li>Prototyping</li>"
  );
});

$(".ui-ux").mouseleave(function(){
  $(".ui-ux").html(innerHtml_ui_ux);
})
