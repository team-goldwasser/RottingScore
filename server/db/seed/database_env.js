var dbHost;

if (process.env.NODE_ENV === 'travis') {
  dbHost = 'localhost'
} else {
  dbHost = 'ec2-13-57-3-67.us-west-1.compute.amazonaws.com';
}

module.exports={
  dbHost
}