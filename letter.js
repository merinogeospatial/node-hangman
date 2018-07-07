const Letter = function(value) {
    this.value = value;
    this.guessed = false;
    this.letterAction = function() {
        if (!this.guessed) {
            return "_";
        }
        else {
            return this.value;
        }
    }
    this.check = function(guess) {
        if (guess === this.value) {
            this.guessed = true;
        }
    }
}

a = new Letter('a');

result = a.letterAction();
console.log(result);
console.log(a.guessed);

a.check('a');
console.log(a.guessed);
console.log(a.letterAction());

