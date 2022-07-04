document.addEventListener('alpine:init', () => {
    Alpine.data('longestWordWidget', function () {
        return {
            sentence: '',
            word: '',
            calculate() {
                const message = longestWord(this.sentence);
                this.word = message;
            }
        }
    });
})

document.addEventListener('alpine:init', () => {
    Alpine.data('shortestWordWidget', function () {
        return {
            sentence: '',
            word: '',
            calculate() {
                const message = shortestWord(this.sentence);
                this.word = message;
            }
        }
    });
})

document.addEventListener('alpine:init', () => {
    Alpine.data('wordLengthWidget', function () {
        return {
            sentence: '',
            word: '',
            calculate() {
                const message = wordLengths(this.sentence);
                this.word = message;
            }
        }
    });
})