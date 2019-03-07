var dbHost, dbPassword;

if (process.env.NODE_ENV === 'production') {
  dbHost = 'db';
} else {
  dbHost = 'localhost'
}

if (process.env.NODE_ENV === 'travis') {
  dbPassword = '';
} else {
  dbPassword = 'password'
}

module.exports={
  dbHost,
  dbPassword
}