class ImageService {

  /**
   * 
   * @param dataUrl data:image/png;base64,
   * @param maxWidth max width that the image can have
   * @param maxHeight max height the the image can have
   */
  public resizeImageWithinBoundries(dataUrl, maxWidth: number, maxHeight: number): Promise<string> {
    let img = new Image();
    img.id = 'image-resizer';
    img.src = dataUrl;
    img.style.position = 'fixed';
    img.style.maxHeight = maxHeight + 'px';
    img.style.maxWidth = maxWidth + 'px';
    img.style.top = '-100000px';
    document.body.appendChild(img);
    return new Promise((resolve, reject) => {
      img.onload = () => {
        let resizedDataUrl = this.imageToDataUri(img, img.width, img.height);
        img.remove();
        resolve(resizedDataUrl);
      }
      img.onerror = () => {
        reject('could not complete');
      }
    });
  }
  private imageToDataUri(img, width, height) {

    // create an off-screen canvas
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

    // set its dimension to target size
    canvas.width = width;
    canvas.height = height;

    // draw source image into the off-screen canvas:
    ctx.drawImage(img, 0, 0, width, height);

    // encode image to data-uri with base64 version of compressed image
    return canvas.toDataURL();
  }
}

const imageService = new ImageService();

export { imageService };
