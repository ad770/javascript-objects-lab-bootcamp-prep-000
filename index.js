var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  temp = Object.assign({}, object);
  delete temp[key];
  return temp;
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}



// playlist = { Kanye: "Gold Digger" };
//
// function updatePlaylist(playlist, artistName, songTitle){
//   return Object.assign({}, playlist, {[artistName]: songTitle});
// }
// function removeFromPlaylist(playlist, artistName){
//   temp = Object.assign({}, playlist);
//  delete temp[artistName];
//  return temp;
// }
