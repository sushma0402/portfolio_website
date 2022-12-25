var innerHtml_ui_ux, innerHtml_web_dev;

$(".frnt-dev").mouseenter(function () {
  innerHtml_web_dev = $(this).html();
  $(this).html(
    "<ul class='frnt-dev-skills'><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>JQuery</li>"
  );
});

$(".frnt-dev").mouseleave(function () {
  $(this).html(innerHtml_web_dev);
});

$(".ui-ux").mouseenter(function () {
  innerHtml_ui_ux = $(".ui-ux").html();
  $(".ui-ux").html(
    "<ul class='ui-ux-skills'><li>Adobe XD</li><li>Figma</li><li>Wireframing</li><li>Prototyping</li>"
  );
});

$(".ui-ux").mouseleave(function () {
  $(".ui-ux").html(innerHtml_ui_ux);
});

// line animation

$(".name")
  .mouseenter(function () {
    $(".name .line").animate({ width: "40%" });
  })
  .mouseleave(function () {
    $(".name .line").animate({ width: "0" });
  });

$("#myskills")
  .mouseenter(function () {
    $(".skill-h .line").animate({ width: "40%" });
  })
  .mouseleave(function () {
    $(".skill-h .line").animate({ width: "0" });
  });

$("#projects")
  .mouseenter(function () {
    $(".project-h .line").animate({ width: "40%" });
  })
  .mouseleave(function () {
    $(".project-h .line").animate({ width: "0" });
  });
