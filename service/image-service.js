class ImageService {
  static isImgExists(string) {
    if (typeof string !== 'string') {
      console.error(`Expected string but received - ${typeof string}`);
      return { error: `Expected string but received - ${typeof string}`, result: false };
    }
    // This pattern matches image tag with source in body of issue
    const regex = new RegExp(/<img[^>]*src="([^"]+)"[^>]*>/);
    const exist = regex.test(string);
    return { error: null, result: exist };
  }
}

module.exports = ImageService;
