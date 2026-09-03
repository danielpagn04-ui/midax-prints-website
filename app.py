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





@app.route("/products/feather-banner")
def feather_banner():
    return render_template("feather-banner.html")


@app.route("/products/branded-tshirt")
def branded_tshirt():
    return render_template("branded-tshirt.html")



@app.route("/products/rollup-banner")
def rollup_banner():
    return render_template("rollup-banner.html")

@app.route("/products/backdrop-banner")
def backdrop_banner():
    return render_template("backdrop.html")

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
