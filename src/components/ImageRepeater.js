export class ImageRepeater {
  constructor(cardImages, imageSources) {
    this.cardImages = cardImages;
    this.imageSources = imageSources;
    this.randomIndices = [];
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.cardImages.length);
  }

  getRandomImageSource() {
    return this.imageSources[Math.floor(Math.random() * this.imageSources.length)];
  }

  repeatImage() {
    while (
      this.randomIndices.length < 2 ||
      (this.randomIndices.length < 3 && Math.random() < 0.5)
    ) {
      const randomIndex = this.getRandomIndex();
      if (!this.randomIndices.includes(randomIndex)) {
        this.randomIndices.push(randomIndex);
      }
    }

    this.randomIndices.forEach((index) => {
      const image = this.cardImages[index];
      const newImageSource = this.getRandomImageSource();
      image.style.transition = 'opacity 1s ease-in-out';
      image.style.opacity = 0;

      setTimeout(() => {
        image.src = newImageSource;
        image.style.transition = 'opacity 1s ease-in-out';
        image.style.opacity = 1;
      }, 500);
    });
    this.randomIndices = [];
  }
}
