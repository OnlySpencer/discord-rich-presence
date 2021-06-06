var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Details text",
assets : {
large_image : "Image",
large_text : Text in image"
},
buttons : [{label : "Button 1" , url : "link"},{label : "Button2",url : "link"}]
}
})
})
client.login({ clientId : "Application ID" }).catch(console.error);
