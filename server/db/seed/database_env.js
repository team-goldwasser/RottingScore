var dbHost, dbPassword;

if (process.env.NODE_ENV === 'travis') {
  dbHost = 'localhost'
  dbPassword = '';
} else {
  dbHost = 'ec2-13-57-3-67.us-west-1.compute.amazonaws.com';
  dbPassword = 'password';
}

module.exports={
  dbHost,
  dbPassword
}