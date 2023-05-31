import {FadeInAnimation} from './FadeInAnimation.js'
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtons = this._popup.querySelector('.element_button_close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._fadeInAnimation = new FadeInAnimation(this._popup, 'left', 500);
    this._fadeOutAnimation = new FadeInAnimation(this._popup, 'left', 450);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClick);
    this._fadeInAnimation.animate();
  }

  close() {
    this._fadeOutAnimation.animate();
    setTimeout(() => {
      this._popup.classList.remove('popup_opened');
    },300);
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClick);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButtons.addEventListener('click', this.close.bind(this));
  }
}
