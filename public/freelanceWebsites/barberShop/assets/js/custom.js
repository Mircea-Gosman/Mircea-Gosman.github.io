$( document ).ready(function() {
  if(window.matchMedia("(max-width: 991px)").matches){
    $( ".swap-mobile" ).replaceWith('<div class="row"><div class="col-md-12"><h3>Nouvelles</h3><img src="img/lines.svg" class="img-lines" alt="lines"></div></div><div class="row"><div class="col-12"><iframe style="width:auto" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUnique-elle-et-lui-875276205995895&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=226261855132248" width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></div></div>');
  }
})

function reserve(button) {
  for (i = 0; i < button.childNodes.length; i++){
    child = button.childNodes[i]
    if(child.tagName == 'P' || child.tagName == 'SPAN') {
      if(child.className.includes("reserve-disappear")) {
        child.style.display = "none";
      } else if(child.className.includes("reserve-appear")) {
        child.style.display = "inline-flex";

        if(child.className.includes("front-action-btn") && !child.className.includes("fa")) {
          $(button).find('span').addClass('fa')
        }
      }
    }
  }
}

function retractChat(button){

  $(button).find('span').toggleClass('fa-caret-down fa-phone')
  if ( $('.talk-bubble').css('opacity') == '0' ) {
    $('.talk-bubble').children().css('height','auto');
    $('.talk-bubble').fadeTo(300, 1, ()=>{
      $('.talk-bubble').children().prop("disabled", false)
      $('.talk-bubble').children().css('pointer-events','');
      $('.talk-bubble').css('pointer-events','');
    });
  }
  else {
    $('.talk-bubble').fadeTo(400, 0, ()=>{
      $('.talk-bubble').children().prop("disabled", true)
      $('.talk-bubble').children().css('pointer-events','none');
      $('.talk-bubble').css('pointer-events','none');
      $('.talk-bubble').children().css('height','0px');
    });
  }

  if (window.matchMedia("(max-width: 700px)").matches){
    if($('.chat').find('.talk-bubble').length !== 0) {
      $(".chat").replaceWith('<div class="chat" data-anchor-target=".hero" data-top="opacity:0;" data-top-bottom="opacity:1;"><div class="sticky-action-wrapper" style="left: -75%" onclick="retractChat(this)"><div class="sticky-action"><span class="sticky-action-content fa fa-phone"></span></div></div></div>');
    } else {
      $(".chat").replaceWith('<div class="chat" data-anchor-target=".hero" data-top="opacity:0;" data-top-bottom="opacity:1;"><div class="talk-bubble tri-right round btm-right"><div class="talktext"><h4 class="content">Rendez-vous</h4><img src="img/lines.svg" class="img-lines content" alt="lines"><button type="button" name="button" class="btn-fill content"><span class="fa fa-phone nav-phone-item"></span><p class="nav-phone-item">450-471-2242</p></button></div></div><div class="sticky-action-wrapper" onclick="retractChat(this)"><div class="sticky-action"><span class="sticky-action-content fa fa-caret-down"></span></div></div></div>');
    }
  }
}


function showModal(modalTarget) {
  $(modalTarget).modal('show');
}
