const express = require("express");
const path = require("path");

var MongoClient = require("mongodb").MongoClient
const assert = require("assert");
const dbName="heroku_bfgczx4s";
var DB_URI=process.env.MONGODB_URI;
 console.log(DB_URI);

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

// Create the db connection
MongoClient.connect(DB_URI, function(err, database) {  
    assert.equal(null, err);
    mongodb=database.db(dbName).collection("scores");
    //console.log(mongodb.find());
    console.log("Mongo está corriendo");
    }
); 



function getTopTen(callback)
{
	findDocuments(mongodb,callback);
}


const findDocuments=function(db,callback)
{
	mongodb.find().sort( { score: -1 } ).limit(10).toArray(function(err,docs)
	{

		assert.equal(null,err);
		callback(docs);
	});
};

function saveScore(user, score, callback)
{
		insert(mongodb, user, score, callback);
}

const insert=function(db, user, score, callback)
{
	var scoreObj={user:user, score:parseInt(score,10)};
	mongodb.insertOne(scoreObj, (err, res)=>
	{
		if (err) throw err;
	    console.log("1 document inserted");
		callback("Done!");
	});
};



// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under "/api"
app.get("/api/gettop", (req, res) => 
{
 	getTopTen((top)=>{
		res.send(top);
	});
});

app.post("/api/savescore", (req, res) => 
{
	//console.log(req);
 	saveScore(req.body.user, req.body.score,(msj)=>{
		res.redirect("/#/top");
	});
});

// The "catchall" handler: for any request that doesn"t
// match one above, send back React"s index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+"/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(" listening on " +port);
