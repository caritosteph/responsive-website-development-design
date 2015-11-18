// put your javascript code here
var albums_template, slidePhoto_template, photoDetail_template,photoTab_template,about_template;
var current_album = animals_data.category[0];
var current_animal = current_album.animals[0];


function showTemplate(template, data) {
    var html = template(data);
    $('#content').html(html);
}

function showSliderPhoto() {
    $(".album-thumbnail").click(function() {
        var index = $(this).data("id");
        current_album = animals_data.category[index];
        $("#header-title").text(current_album.name);
        $("#bread ol").append('<li class="slide">Slide Photo '+current_album.name+'</li>');
        showTemplate(slidePhoto_template, current_album);
        $(".navbar-right .active").removeClass("active");
        $("#photos-tab").addClass("active");
        showPhotoDetail();
    });
}

function showPhotoDetail() {
    $(".imageSlide").click(function() {
        var index = $(this).data("id");
        current_animal = current_album.animals[index];
        $("#header-title").text(current_animal.name);
        $("#bread ol").append('<li>'+current_animal.name+' Description</li>');
        showTemplate(photoDetail_template, current_animal);
    });
}


$(document).ready(function() {
    var source = $("#albums-template").html();
    albums_template = Handlebars.compile(source);

    source = $("#slidePhoto-template").html();
    slidePhoto_template = Handlebars.compile(source);

    source = $("#photoDetail-template").html();
    photoDetail_template = Handlebars.compile(source);

    source = $("#photoTab-template").html();
    photoTab_template = Handlebars.compile(source);

    source = $("#about-template").html();
    about_template = Handlebars.compile(source);

    $("#home-tab").click(function() {
        showTemplate(albums_template, animals_data);
        $("#bread ol").html('');

        $("#bread ol").append('<li><a href="index.html">Home</a></li>');
        $(".navbar-right .active").removeClass("active");
        $("#home-tab").addClass("active");
        showSliderPhoto();
    });

    $("#photos-tab").click(function() {
        $("#header-title").text("ANIMAL'S LIFE");
        $("#bread ol").html('');
        $("#bread ol").append('<li><a href="index.html">Home</a></li>');
        $("#bread ol").append('<li><a href="#">Photos</a></li>');
        showTemplate(photoTab_template, animals_data);
        $(".navbar-right .active").removeClass("active");
        $("#photos-tab").addClass("active");
    });

    $("#about-tab").click(function() {
        showTemplate(about_template, animals_data);
        $("#bread ol").html('');
        $("#bread ol").append('<li><a href="index.html">Home</a></li>');
        $("#bread ol").append('<li><a href="#">About</a></li>');
        $(".navbar-right .active").removeClass("active");
        $("#about-tab").addClass("active");
    });

    $("li .slide").click(function() {
        alert('asdasda')
    });

    $("#home-tab").click();
});
