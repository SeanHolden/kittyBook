// var links = document.getElementsByTagName('a');
// for(var i=0;i<links.length;i++){
//   console.log(links[i])
//   links[i].style.color = 'red';
// }

// var desiredIndex = Math.floor(Math.random() * array.length);
// array.splice(desiredIndex, 1);

function init(){
  // mixUpProfileNames();
  // mixUpProfilePics();
  // testCode();
  // getCommentPicsArray();
  console.log(getCommentPicsArray());
  // mixUpCommentProfilePics();
}

function mixUpCommentProfilePics(){
  var commentProfileImages = getCommentPicsArray();
  var shuffledImages = shuffle(commentProfileImages);

  var commentLists = document.getElementsByClassName('UFIList');
  for(var i=0;i<commentLists.length;i++){
    for(var j=0;j<commentLists[i].getElementsByTagName('img').length;j++){
      if(commentLists[i].getElementsByTagName('img')[j] === undefined) { continue };
      if(commentLists[i].getElementsByTagName('img')[j].src === 'https://www.facebook.com/undefined') { continue };
      if(commentLists[i].getElementsByTagName('img')[j].src.match(/.jpg$/) == null ) { continue };
      commentLists[i].getElementsByTagName('img')[j].src = shuffledImages[j];
    }
  }
}

function getCommentPicsArray(){
  var commentLists = document.getElementsByClassName('UFIList');
  var commentPicsArray = [];
  for(var i=0;i<commentLists.length;i++){
    for(var j=0;j<commentLists[i].getElementsByTagName('img').length;j++){
      if( commentLists[i].getElementsByTagName('img')[j] === undefined ){ continue };
      if( commentLists[i].getElementsByTagName('img')[j].src === 'https://www.facebook.com/undefined' ){ continue };
      if( commentLists[i].getElementsByTagName('img')[j].src.match(/.jpg$/) == null ) { continue };
       commentPicsArray.push( commentLists[i].getElementsByTagName('img')[j].src );
    }
  }
  return commentPicsArray;
}

// get each image
// if undefined, skip


function mixUpProfilePics(){
  var images = getProfilePicsArray();
  var shuffledImages = shuffle(images);

  var userContentWrapper = document.getElementsByClassName('userContentWrapper');

  for(var i=0;i<userContentWrapper.length;i++){
    userContentWrapper[i].getElementsByTagName('img')[0].src = shuffledImages[i];
  }
}

function getProfilePicsArray(){
  var userContentWrapper = document.getElementsByClassName('userContentWrapper');
  var imgSrcArray = [];
  for(var i=0;i<userContentWrapper.length;i++){
    var imgSrc = userContentWrapper[i].getElementsByTagName('img')[0].src;
    imgSrcArray.push(imgSrc);
  }
  return imgSrcArray;
}

function mixUpProfileNames(){
  var profileNames = getProfileNamesArray();
  var comments = getCommenterNameArray();

  var shuffledProfileNames = shuffle(profileNames);
  var shuffledCommentNames = shuffle(comments);
  var shuffledNames = shuffledProfileNames.concat(shuffledCommentNames);

  var profileNameElements = Array.prototype.slice.call(document.getElementsByClassName('profileLink'));
  var commentNameElements = Array.prototype.slice.call(document.getElementsByClassName('UFICommentActorName'));
  var profileAndCommentNameElements = profileNameElements.concat(commentNameElements);

  for(var i=0;i<profileAndCommentNameElements.length;i++){
    profileAndCommentNameElements[i].textContent = shuffledNames[i];
  }
}

function getProfileNamesArray(){
  profileNames = document.getElementsByClassName('profileLink');
  var profileNamesArray = [];
  for(var i=0;i<profileNames.length;i++){
    profileNamesArray.push(profileNames[i].textContent);
  }
  return profileNamesArray;
}

function getCommenterNameArray(){
  var comments = document.getElementsByClassName('UFICommentActorName');
  var commenterNameArray = [];
  for(var i=0;i<comments.length;i++){
    commenterNameArray.push(comments[i].textContent);
  }
  return commenterNameArray;
}

// shuffle an array to "randomize" it
function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

init();
