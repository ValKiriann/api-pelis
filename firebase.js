var admin = require("firebase-admin");

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movies-b601d.firebaseio.com"
});

var db = admin.database();

function hola(callback) {
    var ref = db.ref("hola");

    ref.once("value", function(snapshot) {
        callback(snapshot.val());
    });
}

module.exports = {
    hola: hola
};