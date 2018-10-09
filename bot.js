const Discord = require('discord.js');
const client = new Discord.Client();
const Eris = require("eris");
var iiserver = "498956631501963264";
var smart= new Eris(process.env.BOT_TOKEN);

client.on("ready", ready => {
setInterval(function(){

client.editChannel("498972753114824714", {name : "W"})
client.editChannel("498972753114824714", {name : "We"})
client.editChannel("498972753114824714", {name : "Wel"})
client.editChannel("498972753114824714", {name : "Welc"})
client.editChannel("498972753114824714", {name : "Welcom"})
client.editChannel("498972753114824714", {name : "Welcome"})
client.editChannel("498972753114824714", {name : "Welcome T"})
client.editChannel("498972753114824714", {name : "Welcome To"})
client.editChannel("498972753114824714", {name : "Welcome To G"})
client.editChannel("498972753114824714", {name : "Welcome To Gr"})
client.editChannel("498972753114824714", {name : "Welcome To Gra"})
client.editChannel("498972753114824714", {name : "Welcome To Grap"})
client.editChannel("498972753114824714", {name : "Welcome To Graph"})
client.editChannel("498972753114824714", {name : "Welcome To Graphi"})
client.editChannel("498972753114824714", {name : "Welcome To Graphic"})


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

client.connect(process.env.BOT_TOKEN);
