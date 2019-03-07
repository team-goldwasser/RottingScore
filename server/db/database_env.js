var dbHost;

if (process.env.NODE_ENV === 'production') {
  dbHost = 'db';
} else {
  dbHost = 'localhost'
}

module.exports={
  dbHost
}