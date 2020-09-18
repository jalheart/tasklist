const express = require("express");
const app = express();

//CRUD
app.get("/", function (req, res) {
    //Función callback
    res.status(200).send("API tasklist");
});

app.get("/users", function (req, res) {
    //Debemos obtener los usuarios de la colección en mongo    
    let users = [
        {nickname: "jhernandez", password: "1234567890"},
        {nickname: "fulano", password: "12345"}
    ];
    res.status(200).send(users);
});
app.get("/songs", function (req, res) {
    //Obtenemos las canciones de la colección en mongo
    let songs = [
        {_id: "u4i5u2o31p2o2p2", nombre: "La gallina turuleca", duracion: "5:30", id_autor: "p5p8o0k2k1k3n5"},
        {_id: "o2p4o6m7n2233k4", nombre: "La iguana tomaba café", duracion: "2:45", id_autor: "p5p8o0k2k1k3n5"}
    ];
    res.status(200).send(songs);
});
app.get("/songs/:id", function (req, res) {
    let { id } = req.params;
    //Busco en la colección de canciones la que coincida con la id suministrada.(Mongo)
    let song;
    if(id==="u4i5u2o31p2o2p2"){
        song = {_id: "u4i5u2o31p2o2p2", nombre: "La gallina turuleca", duracion: "5:30", id_autor: "p5p8o0k2k1k3n5"}
    }else if(id === "o2p4o6m7n2233k4"){
        song = {_id: "o2p4o6m7n2233k4", nombre: "La iguana tomaba café", duracion: "2:45", id_autor: "p5p8o0k2k1k3n5"}
    }else{
        res.status(404).send({message: "La canción no está registrada en la base de datos."})
    }
    res.status(200).send(song);
});
exports.app = app;
