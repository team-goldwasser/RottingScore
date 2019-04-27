var dbHost, dbPassword;

if (process.env.NODE_ENV === 'production') {
  dbHost = 'db';
} else {
  dbHost = 'localhost'
}

if (process.env.NODE_ENV === 'travis') {
  dbPassword = '';
} else {
  dbPassword = 'goldwasser'
}

module.exports={
  dbHost,
  dbPassword
}