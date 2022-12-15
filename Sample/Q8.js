db.movies.find().forEach(function(Object){
   var userList = db.users.find({movieList: Object.movieNo});
   if (!userList) return;
   printJson(movieNo);
   printJson(movieName);
   printJson(userList);
});