"use strict"

$( document ).ready(function() {

    var footerHandler = function(){
        var $el = $('.footer-adjust');
        var footerTop = $el.offset().top + $el.outerHeight(true);

        if((footerTop + $('footer').height() + 60) <  $(window).innerHeight()){
          $('footer').addClass('footer-fixed');
        }
        else{
          $('footer').removeClass('footer-fixed');
        }
    }
    var previousWork = function(){
        if(currentWork === 0){
            currentWork = totalWork;
        }
        currentWork--;
        $('.portfolio-work').addClass('work-hidden');
        $('.work-' + currentWork).removeClass('work-hidden');
        footerHandler();
    }

    var nextWork = function(){
        $('.portfolio-work').addClass('work-hidden');
        currentWork = (currentWork + 1) % totalWork;
        $('.work-' + currentWork).removeClass('work-hidden');
        footerHandler();
    }

    var works = [
        {
            img : "plinth2017.jpg",
            altImg : "Plinth 2017 | Home Page",
            name : "Plinth, The LNMIIT 2017",
            stack : "jQuery • Foundation • Nodejs • Expressjs • MongoDB • Sketch",
            what : "Designed and Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "",
        },
        {
            img : "mun2017.jpg",
            altImg : "MUN 2017",
            name : "MUN, The LNMIIT 2017",
            stack : "jQuery • Foundation • Nodejs • Expressjs • Sketch",
            what : "Designed and Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "",
        },
        {
            img : "timespread.jpg",
            altImg : "Time Spread Android app Image",
            name : "Time Spread",
            stack : "Nodejs • Expressjs • MongoDB • Sketch",
            what : "Designed and Developed Backend",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "gray29",
        },
        {
            img : "zento.jpg",
            altImg : "Zento Gallery",
            name : "Zento, Pure JS Gallery",
            stack : "Vanilla JavaScript",
            what : "Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "gray29",
        },
        {
            img : "flash.jpg",
            altImg : "Chatbot Flash",
            name : "Flash - Chatbot",
            stack : "Python • AIML • PyAMIL • Bash",
            what : "Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "",
        },
        {
            img : "plinth2016.jpg",
            altImg : "Plinth 2017 | Home Page",
            name : "Plinth, The LNMIIT 2016",
            stack : "jQuery • Materializecss • AngularJS",
            what : "Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "gray29",
        },
        {
            img : "event-graphia.jpg",
            altImg : "Event Graphia",
            name : "Event Graphia",
            stack : "BootStrap • JS • jQuery",
            what : "Designed and Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "",
        },
        {
            img : "event-graphia-dropped.jpg",
            altImg : "Event Graphia(Uncomplete) Image",
            name : "Event Graphia(Uncomplete)",
            stack : "AngularJS • jQuery • Materializecss",
            what : "Designed and Developed",
            githubLink : "#",
            websiteLink : "#",
            detailLink : "#",
            detailTextColor : "",
        },
    ]

    var totalWork = works.length;
    var currentWork = 0;

    var renderHTML = `<div class="work-nav work-nav-left">
                        <img src="media/parent/images/left.svg" alt="left arrow for navigation" />
                      </div>`;

    for(var i=0; i<totalWork; i++){

        renderHTML = renderHTML
        + '<div class="column small-10 small-centered medium-9 card work-hidden portfolio-work work-' + i + '">'
        + '<div class="work-showcase-img-container">'
        + '<img class="work-showcase-img" src="media/parent/images/work/' + works[i].img + '" alt="' + works[i].altImg  + '" />'
        + '<div class="work-showcase-img-detail text-center ' + works[i].detailTextColor + '">'
        + '<a class="hollow button work-showcase-img-button" href="' + works[i].detailLink + '">View Project</a>'
        + '<p class="roboto weight-medium">' + works[i].what + "</p>"
        + '<p class="roboto weight-medium">' + works[i].stack + "</p>"
        + '</div>'
        + '</div>'
        + '<div class="work-title-div row">'
        + '<div class="column small-12 medium-6">'
        + '<p class="roboto">' + works[i].name + '</p>'
        + '<p class="roboto weight-light">' + works[i].stack + '</p>'
        + '</div>'
        + '<div class="column small-12 medium-6 text-right">'
        + '<p class="roboto">&nbsp;</p>'
        + '<p class="roboto weight-light"><a href="' + works[i].githubLink + '">Github</a> | '
        + '<a href="' + works[i].websiteLink + '">Website</a> | '
        + '<a href="' + works[i].detailLink + '">View Project</a></p>'
        + '</div>'
        + '</div>'
        + '</div>';
    }

    renderHTML += `<div class="work-nav work-nav-right">
                            <img src="media/parent/images/left.svg" alt="right arrow for navigation" />
                        </div>`;

    $(".work-row").html(renderHTML);
    $('.work-0').removeClass('work-hidden');
    $('footer').removeClass('footer-fixed');

    //navigation for work
    $('.work-nav-right').click(function(){
        nextWork();
    })

    $('.work-nav-left').click(function(){
        previousWork();
    })

    //Navigation throgh key
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            previousWork();
            break;

            case 39: // right
            nextWork();
            break;

            case 13: // enter
            // nextWork();
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });


    //hover effect on showcase

    $('.work-showcase-img-detail, .work-showcase-img').mouseenter(function(){
        $('.work-showcase-img').addClass('work-showcase-img-hover');
        $('.work-showcase-img-detail').css('display','block');
    });
    $('.work-showcase-img').mouseleave(function(){
        $('.work-showcase-img').removeClass('work-showcase-img-hover');
        $('.work-showcase-img-detail').css('display','none');
    });

});
