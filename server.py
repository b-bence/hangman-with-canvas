from flask import Flask, render_template, url_for, jsonify


app = Flask('hangman')


@app.route('/')
def index():
    return render_template('index.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
