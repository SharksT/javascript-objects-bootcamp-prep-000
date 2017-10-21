var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

var playlist = { name = '', song = ''}

function updatePlaylist(obj,name,song) {
  return Object.assing({},obj,{[name]:song})
}

function removeFromPlaylist(obj,name) {
  delete playlist[name]
}
