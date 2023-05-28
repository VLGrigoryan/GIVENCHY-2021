import './pages/style.css';
import { Popup } from './components/Popup.js';
import { FadeInAnimation } from './components/FadeInAnimation.js'
import { ImageRepeater } from './components/ImageRepeater.js'
import { FormValidator } from './components/FormValidator.js'
import {
  modalOverlay,
  menuButton,
  aboutSectionCardList,
  cardLeft,
  cardRight,
  looksSectionCardList,
  cardImages,
  checkbox,
  checkboxIcon,
  emailInput,
  submitButton,
  errorMessage,
  imageSources
} from './components/constants.js'



const formValidator = new FormValidator(checkbox, submitButton, checkboxIcon, errorMessage, emailInput);


const menu = new Popup('.popup');
menu.setEventListeners();

menuButton.addEventListener('mousedown', () => {
  menu.open();
});


cardRight.forEach(card => {
  const cardLeftFade = new FadeInAnimation(card, 'right', 1000);
  cardLeftFade.animate();
});

cardLeft.forEach(card => {
  const cardLeftFade = new FadeInAnimation(card, 'left', 1000);
  cardLeftFade.animate();
});



const repeaterLooksCards = new ImageRepeater(cardImages, imageSources);

window.onload = function () {
  repeaterLooksCards.repeatImage();
};

setInterval(() => {
  repeaterLooksCards.repeatImage();
}, 3000);

// const validateFormAvatar = new FormValidator(profileAvatarForm, validationSettings);
// validateFormAvatar.enableValidation();
