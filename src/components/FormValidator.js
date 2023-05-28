export class FormValidator {
  constructor(checkbox, submitButton, checkboxIcon, errorMessage, emailInput) {
    this.checkbox = checkbox;
    this.submitButton = submitButton;
    this.checkboxIcon = checkboxIcon;
    this.errorMessage = errorMessage;
    this.emailInput = emailInput;

    this.checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    this.emailInput.addEventListener('input', this.handleEmailInput.bind(this));
  }

  handleCheckboxChange() {
    this.submitButton.disabled = !this.checkbox.checked;
    if (this.checkbox.checked) {
      this.checkboxIcon.style.stroke = '#FFFFFF';
      this.errorMessage.style.visibility = 'hidden';
    } else {
      this.checkboxIcon.style.stroke = '#0A0A0A';
      this.errorMessage.textContent = 'Please consent to the Privacy Policy';
      this.errorMessage.style.visibility = 'visible';
    }
  }

  handleEmailInput() {
    if (this.emailInput.validity.typeMismatch) {
      this.errorMessage.textContent = 'Please enter a valid email address';
      this.errorMessage.style.visibility = 'visible';
    } else if (this.emailInput.value.trim() === '') {
      this.errorMessage.style.visibility = 'hidden';
      this.errorMessage.textContent = '';
      this.submitButton.setAttribute('disabled', 'disabled');
    } else {
      this.errorMessage.style.visibility = 'hidden';
      this.errorMessage.textContent = '';
      this.submitButton.removeAttribute('disabled');
      this.submitButton.disabled = !this.checkbox.checked;
    }
  }
}
