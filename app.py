from flask import Flask, render_template, redirect, request
from pathlib import Path
import os

from views import *
app = Flask(__name__)
app.secret_key = "my_secret"


@app.route('/', methods=['GET'])
def index():
    return render_template("dashboard.html")

@app.route('/index', methods=['GET'])
def dash():
    return index_page_view()


if __name__ == "__main__":
    app.run(debug=False)
