// Клас Button
class Button {
    constructor(text, border, color, background) {
      this.text = text;
      this.border = border;
      this.color = color;
      this.background = background;
    }
  
    render() {
      const button = document.createElement('button');
      button.textContent = this.text;
      button.classList.add(this.color);
      button.style.border = this.border;
      button.style.backgroundColor = this.background;
  
      button.addEventListener('click', () => {
        console.log(`${this.text}. Колір кнопки - ${this.background}`);
      });
  
      document.querySelector('.button-container').appendChild(button);
    }
  }
  
  class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
      super(text, border, color, background);
      this.borderRadius = borderRadius;
    }
  
    render() {
      const button = document.createElement('button');
      button.textContent = this.text;
      button.classList.add(this.color);
      button.style.border = this.border;
      button.style.backgroundColor = this.background;
      button.style.borderRadius = `${this.borderRadius}px`;
  
      button.addEventListener('click', () => {
        console.log(`${this.text}. Колір кнопки - ${this.background}`);
      });
  
      document.querySelector('.button-container').appendChild(button);
    }
  }
  
  const redButton = new Button('Click me', '1px solid black', 'button-red', 'red');
  const blueButton = new Button('Press here', '2px solid blue', 'button-blue', 'blue');
  const greenButton = new Button('Click here', '1px solid green', 'button-green', 'green');
  const roundedPurpleButton = new RoundedButton('Rounded_1', '1px solid black', 'rounded-purple', 'purple', 15);
  const roundedOrangeButton = new RoundedButton('Rounded_2', '2px solid orange', 'rounded-orange', 'orange', 20);
  const roundedPinkButton = new RoundedButton('Rounded_3', '1px solid pink', 'rounded-pink', 'pink', 25);
  
  redButton.render();
  blueButton.render();
  greenButton.render();
  roundedPurpleButton.render();
  roundedOrangeButton.render();
  roundedPinkButton.render();
  