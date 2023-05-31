export class FadeInAnimation {
  constructor(element, side, duration) {
    this.element = element;
    this.side = side;
    this.duration = duration;
    this.initialPosition = this.side === 'left' ? '-500px' : '500px';
    this.finalPosition = '0';
  }

  animate() {
    this.element.style.opacity = '0';
    this.element.style.transform = `translateX(${this.initialPosition})`;
    this.element.style.transition = `opacity ${this.duration}ms ease-out, transform ${this.duration}ms ease-out`;

    setTimeout(() => {
      this.element.style.opacity = '1';
      this.element.style.transform = `translateX(${this.finalPosition})`;
    }, 300);
  }
}
