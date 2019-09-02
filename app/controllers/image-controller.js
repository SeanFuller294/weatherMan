import ImageService from "../services/image-service.js";

let _is = new ImageService()

function drawImage(data) {
  document.getElementById("bg-image").style.backgroundImage = `url('${data}')`
}


//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.setBgImg(drawImage)

  }
}

