from flask import Flask, render_template, url_for, jsonify

app = Flask('hangman')


@app.route('/')
def index():
    word_length = 5
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z']
    return render_template('index.html', alphabet=alphabet, word_length=word_length)


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
