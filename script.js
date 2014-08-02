// var links = document.getElementsByTagName('a');
// for(var i=0;i<links.length;i++){
//   console.log(links[i])
//   links[i].style.color = 'red';
// }

// var desiredIndex = Math.floor(Math.random() * array.length);
// array.splice(desiredIndex, 1);

function init(){
  // mixUpProfileNames();
  mixUpProfilePics();
  // testCode();
}

function mixUpProfilePics(){
  var userContentWrapper = document.getElementsByClassName('userContentWrapper');
  for(var i=0;i<userContentWrapper.length;i++){
    userContentWrapper[i].getElementsByTagName('img')[0].src = 'http://localhost:8000/40.jpeg';
    console.log(userContentWrapper[i].getElementsByTagName('img')[0].src);
  }
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

function testCode(){
  var fwb = Array.prototype.slice.call(document.getElementsByClassName('fwb'));
  // console.log(fwb[0].textContent);
  for(var i=0;i<fwb.length;i++){
    console.log(fwb[i].textContent);
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
