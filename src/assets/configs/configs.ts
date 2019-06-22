export class BaseUrls {

  apiUrl = 'http://demo.sylius.com/api/v1/';
  imagesUrl = '';

  get baseUrl() {
    return this.apiUrl;
  }

  get baseImagesUrl() {
    return this.imagesUrl;
  }
}
