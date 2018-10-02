// Juan Aguirre

var key = "dict.1.1.20181001T220504Z.6f3a1193928611af.be0a30f3d064d3f9f0bd14d6f8911b5816a2a448";
var lang = "en-es";
var url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup";

function getTranslate(text) {
  $.getJSON(url, {
    key: key,
    lang: lang,
    text: text }).
  done(setResponse);
  console.log(url);
}

function setResponse(response) {
  console.log(response);
  if (response.def.length === 0) {
    $('input:text').val('');
    $('.translation').text('');
    $('.Bravo').hide();
    $('.not-found').show();
  } else {
    $(".not-found").hide();
    $(".translation").text(response.def[0].tr[0].text);
    $(".Bravo").show();
  };
};

$(function () {
  $("#translate").on("submit", function (e) {
    e.preventDefault();
    getTranslate(this.word.value);
  });

  $('button:reset').bind('click', function () {
    $('input:text').val('');
    $('.translation').text('');
    $('.not-found').hide();
  });
});

