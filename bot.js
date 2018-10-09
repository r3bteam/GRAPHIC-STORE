const Discord = require('discord.js');
const client = new Discord.Client();
const Eris = require("eris");
const BT  = new Eris(process.env.BOT_TOKEN);
BT.connect(process.env.BOT_TOKEN)
var iiserver = "498956631501963264";
var smart= new Eris(process.env.BOT_TOKEN);

BT.on("ready", ready => {
setInterval(function(){

BT.editChannel("498972753114824714", {name : "W"})
BT.editChannel("498972753114824714", {name : "We"})
BT.editChannel("498972753114824714", {name : "Wel"})
BT.editChannel("498972753114824714", {name : "Welc"})
BT.editChannel("498972753114824714", {name : "Welcom"})
BT.editChannel("498972753114824714", {name : "Welcome"})
BT.editChannel("498972753114824714", {name : "Welcome T"})
BT.editChannel("498972753114824714", {name : "Welcome To"})
BT.editChannel("498972753114824714", {name : "Welcome To G"})
BT.editChannel("498972753114824714", {name : "Welcome To Gr"})
BT.editChannel("498972753114824714", {name : "Welcome To Gra"})
BT.editChannel("498972753114824714", {name : "Welcome To Grap"})
BT.editChannel("498972753114824714", {name : "Welcome To Graph"})
BT.editChannel("498972753114824714", {name : "Welcome To Graphi"})
BT.editChannel("498972753114824714", {name : "Welcome To Graphic"})


}, 6000);
});

var eris = new Eris(process.env.BOT_TOKEN);
 
eris.on("ready", ready => {
setInterval(function(){
 
            var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();
           
             
 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }

eris.editChannel("499232099577102357", {name : "Time   [" + hours + ":" + minutes  +" " + suffix + "]"}) 
eris.editChannel("499232123207548942", {name : "Date " + "[" + day + "-" + month + "-" + years + "]"})




}, 6000);
 
});
client.login(process.env.BOT_TOKEN);
