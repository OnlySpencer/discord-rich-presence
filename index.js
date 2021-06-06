var rpc = require('discord-rpc');

const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.sendJoinRequest('SET_ACTIVITY', {
        pid: process.pid,

        activity : {
            details : 'Details',
            assets : {
                large_image : "name_of_image",
                large_text : 'text_in_large_image',
            },
            buttons : [{
                label : 'button 1',
                url : 'link 1'
            },
            {
                label : 'Button 2',
                url : 'link 2'
            }]
        }
    })
})
client.login({ clientId : 'Application ID' }).catch(console.error);r);
