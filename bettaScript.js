// var links = document.getElementsByTagName('a');
// for(var i=0;i<links.length;i++){
//   console.log(links[i])
//   links[i].style.color = 'red';
// }

// var desiredIndex = Math.floor(Math.random() * array.length);
// array.splice(desiredIndex, 1);

function init(){
  pollBettaReplace();
  removeSideChat();
}

function removeSideChat(){
  var sideChat = document.getElementsByClassName("fbChatSidebar")[0];
  sideChat.parentNode.removeChild(sideChat);
}

function replaceImagesWithBetta(callback){
  var images = document.getElementsByTagName('img');
  for(var i=0;i<images.length;i++){
    var width = images[i].width;
    var height = images[i].height;
    if ( images[i].src.match('placekitty')===null ){
      if( images[i].id.match('profile_pic_header') ){ continue };
      images[i].src = 'http://placekitty.artisan.io/'+width+'/'+height;
      console.log(images[i].src);
    }
  }
  callback();
}

function replaceLinksWithBetta(){
  var links = document.getElementsByTagName('a');
  for(var i=0;i<links.length;i++){
    if( links[i].innerHTML.match('img')===null ){
      if( links[i].textContent.toLowerCase() === 'photo' ){ continue };
      if( links[i].getAttribute('role')==='button' ){ continue };
      // if( links[i].getAttribute('class')==='uiLinkSubtle' ){ continue };
      if( links[i].innerHTML.match('time') ){ continue };
      links[i].textContent = 'Cristiano Betta';
    }
  }
}

function pollBettaReplace(){
  setInterval(function(){
    replaceImagesWithBetta(function(){
      replaceLinksWithBetta()
    });
    console.log('polled');
  },1000);
}

init();
