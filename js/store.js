//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("BTR", "Miuyas Laytsas", "Start your day with the coffee you love.", 123, 90, 0, 2, 0, 1, 2),
        new product("KET", "Ketyasas Vtreasas", "Excellent way to jump-start your day", 169, 90, 0, 1, 1, 1, 2),
        new product("KTT", "Ketyasas Vtreasas", "A name known the world over for great coffee", 141, 120, 0, 2, 1, 2, 2),
        new product("MIU", "Yapuytasa", "Delicious and refreshing.", 238, 50, 4, 4, 1, 2, 0),
        new product("MLA", "Btrease Vaers", "OK, not that nutritious, but sooo good!", 310, 100, 0, 0, 0, 1, 2),
        new product("TAS", "Miuyas Laytsas", "Start your day with the refreshing taste of Folgers Classic Roast Ground Coffee", 311, 50, 4, 4, 1, 1, 1),
        new product("VAE", "Yapuytasa", "Smooth and light with an irresistable vanilla flavor", 218, 100, 0, 3, 0, 1, 1),
        new product("YAP", "Vtreasas", "Exotic, fragrant, tasty!", 138, 50, 4, 4, 0, 1, 2),
        
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
