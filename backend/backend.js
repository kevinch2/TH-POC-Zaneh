const http = require('http');
const port = 3001;

const express = require('express');
const app = express();

var amqp = require('amqplib/callback_api');
var amqp_url = 'amqp://dywnibnv:2seG_JlWA4HhezPdivmicDLmgpmmb5w1@frosty-dinosaur.rmq.cloudamqp.com/dywnibnv';

var conn = amqp.connect(amqp_url, (err, conn) => {

    //output queue
    var outq_name = 'toZaneh';
    var chan_out = conn.createChannel((err, ch) => {
      chan_out.assertQueue(outq_name);
    });

    //input queue
    var inq_name = 'fromZaneh';
    var chan_in = conn.createChannel((err, ch) => {
      chan_in.assertQueue(outq_name);
      chan_in.consume(inq_name, function(msg) {
        chan_in.ack(msg);
        chan_out.sendToQueue(outq_name, Buffer.from('this is a backend response.'));
      });
    });
});


  


//});
