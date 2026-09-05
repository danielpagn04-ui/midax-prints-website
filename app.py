from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")



@app.route("/products")
def products():
    return render_template("products.html")

@app.route("/products/sublimation-tote-bag")
def sublimation_tote_bag():
    return render_template("product.html")


@app.route("/products/face-caps")
def face_caps():
    return render_template("face-caps.html")

@app.route("/products/wall-clock")
def wall_clock():
    return render_template("wall-clock.html")

@app.route("/products/polymer")
def polymer():
    return render_template("polymer.html")

@app.route("/products/towel")
def towel():
    return render_template("towel.html")


@app.route("/products/jotter-design")
def jotter_design():
    return render_template("jotter-design.html")





@app.route("/products/feather-banner")
def feather_banner():
    return render_template("feather-banner.html")


@app.route("/products/branded-tshirt")
def branded_tshirt():
    return render_template("branded-tshirt.html")



@app.route("/products/rollup-banner")
def rollup_banner():
    return render_template("rollup-banner.html")

@app.route("/products/signage")
def signage():
    return render_template("signage.html")

@app.route("/products/wall-calendar")
def wall_calendar():
    return render_template("wall-calendar.html")

@app.route("/products/table-calendar")
def table_calendar():
    return render_template("table-calendar.html")

@app.route("/products/school-books")
def school_books():
    return render_template("school-books.html")

@app.route("/products/backdrop-banner")
def backdrop_banner():
    return render_template("backdrop.html")

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
