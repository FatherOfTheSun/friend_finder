
var friends = require('../data/friends.js');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };


        var userData = req.body;
        var userScores = userData.scores;

        var userName = userData.name;
        var userPhoto = userData.photo;

        // calculate the difference 
        var totalDifference = 0;

        //loop through array of objects for the scores
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through calculate the absolute difference, push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // difference between into totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // If the sum of "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);


        res.json(bestMatch);
    });
}