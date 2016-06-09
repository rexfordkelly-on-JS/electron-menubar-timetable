// requires
let remote = require('electron').remote
let dialog = remote.require('electron').dialog
let image = document.getElementById('imgTT')
let path = dialog.showOpenDialog({
  properties: ['openFile', 'openDirectory', 'multiSelections']
})

function changeImg () {
  // find the image, and then change the src to the path.
  if (image.src.match(path[0])) {
    image.src = path[1]
    console.log('Swapped to image 1')
  } else {
    image.src = path[0]
    console.log('Swapped to image 2')
  }
}

console.log(path)
changeImg()
