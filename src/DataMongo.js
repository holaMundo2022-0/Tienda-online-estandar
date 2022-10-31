var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/*MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo =db.db("tienda_verduras");
    dbo.createCollection("Clientes", function(err,res){
        if (err) throw err;
        console.log("Database created!");
        db.close;})
});*/


/* agregar a colección
MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo =db.db("tienda_verduras");
    var myobj = 
    {
        id: 1,
        title: "Remolacha",
        price: 900,
        image: ('./images/remolacha.jpg'),
        category: "Tuberculo",
        stock: 1 
      };
  
    dbo.collection("Productos").insertOne(myobj, function(err,res){
        if (err) throw err;
        console.log("Producto insertado!");
        db.close;
    });
});*/

/* buscar por key
MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo = db.db("tienda_verduras");
    dbo.collection("Productos").findOne({}, function(err,result){
        if (err) throw err;
        console.log(result.stock);
        db.close;
    });
});
*/

/*
MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo = db.db("tienda_verduras");
    var myquery ={title:"Remolacha"};
    dbo.collection("Productos").deleteOne(myquery, function(err,obj){
        if (err) throw err;
        console.log("Articulo borrado");
        db.close;
    });
});
*/