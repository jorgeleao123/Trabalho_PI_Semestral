process.env.NODE_ENV = 'dev'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');    // importando funcionalidades do usuário (o usuário é definido pelas routes)
var usuariosRouter = require('./routes/usuarios'); 
var leiturasRouter = require('./routes/leituras');

var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);

module.exports = app;

// O ARQUIVO APP É O PRINCIPAL DO SISTEMA, PORQUE É ONDE AS FUNCIONALIDADES SÃO IMPORTADAS E USADAS NA APLICAÇÃO 
