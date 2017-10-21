
var playlist = { name = '', song = ''}

function updatePlaylist(obj,name,song) {
  return Object.assing({},obj,{[name]:song})
}

function removeFromPlaylist(obj,name) {
  delete obj[name]
  return obj
}
