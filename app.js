$(document).ready(function(){



  // Defines application space
  var $app = $('#app');
  $app.html(''); // removes HTML from the page

  // Adds title to the app page
  var $title = $('<h1>Twiddler</h1>');
  $title.appendTo($app);

  // Gives an alert for when the title/logo is clicked on
  $title.on("click", function(event) {
    console.log(event);
    alert('The title of this page is: ' + event.target.innerText)
  });

  // Creates button to update the Twiddler feed.
  var $updateFeed = $('<button id="update-feed">Update Feed</button>');
  $updateFeed.appendTo($app);
  $updateFeed.on("click", function() {
    refreshFeed();
  });

  // Puts the Twiddler feed onto the app.
  var $feed = $('<div id="feed"></div>')
  $feed.appendTo($app);


  function refreshFeed() {
    $("#feed").empty();
    tweetData()
  }

  refreshFeed();



  function filterFeed(username) {
    $("#feed").empty();

    if (streams.home) {
      console.log("filter feed our username")
      for (i in streams.home){
        if ("@"+streams.home[i].user == username ){
          console.log(streams.home[i])
        var tweet = streams.home[i]; // most recent tweet that was ever pushed to the stream.home array.
    var $tweet = $('<div class="tweet"></div>'); // jQuery! UI element that we can see. Creates a new div.
    $tweet.appendTo($feed); // gotta put the div into the body. DOM is like a lego board and the div is a single lego

    var $photoContainer = $('<div class="photo-container"></div>');
    $photoContainer.appendTo($tweet);

    var $information = $('<div class="information-container"></div>');
    $information.appendTo($tweet);

    // Creates profile photo and adds to the tweet.
    var $profilePhoto = $('<img class="profile-photo"></img>');
    $profilePhoto.attr("src", tweet.profilePhotoURL);
    $profilePhoto.appendTo($photoContainer);


    // Creates username and adds to the tweet
    var $username = $('<div class="username"></div>');
    $username.text('@' + tweet.user);
    $username.on("click", function(event) {
      // console.log(event);
      // console.log(event.target.innerText)
      filterFeed(event.target.innerText);
    });

    $username.appendTo($information);


    // Creates timestamp and adds to the tweet
    var $timestamp = $('<div class="timestamp"></div>');
    $timestamp.text(jQuery.timeago(tweet.created_at));
    console.log('Time created at: ' + tweet.created_at)
    $timestamp.appendTo($information);
    jQuery.timeago(tweet.created_at);

    // Creates message and adds to the tweet
    var $message = $('<div class="message"></div>');
    $message.text(tweet.message);
    $message.appendTo($information);

    //Creates icons and adds them to the tweet
    var $icon1 = $('<i class="far fa-comment icon comment"></i>');
    $icon1.attr("src", './assets/icons/placeholder.png');
    $icon1.appendTo($information);
    var $icon2 = $('<i class="fas fa-retweet icon retweet"></i>');
    $icon2.attr("src", './assets/icons/placeholder.png')
    $icon2.appendTo($information);
    var $icon3 = $('<i class="far fa-heart icon like"></i>');
    $icon3.attr("src", './assets/icons/placeholder.png')
    $icon3.appendTo($information);
    var $icon4 = $('<i class="far fa-share-square icon share"></i>');
    $icon4.attr("src", './assets/icons/placeholder.png')
    $icon4.appendTo($information);

        }
      }

    }
    document.getElementById("update-feed").innerText = "Back"
  }


function tweetData(){
  document.getElementById("update-feed").innerText = "Update Feed"

  var index = streams.home.length - 1; // last tweet in the collection
  while(index >= 0){

    // Creates array of tweets and adds them to the feed.

    var tweet = streams.home[index]; // most recent tweet that was ever pushed to the stream.home array.
    var $tweet = $('<div class="tweet"></div>'); // jQuery! UI element that we can see. Creates a new div.
    $tweet.appendTo($feed); // gotta put the div into the body. DOM is like a lego board and the div is a single lego

    var $photoContainer = $('<div class="photo-container"></div>');
    $photoContainer.appendTo($tweet);

    var $information = $('<div class="information-container"></div>');
    $information.appendTo($tweet);

    // Creates profile photo and adds to the tweet.
    var $profilePhoto = $('<img class="profile-photo"></img>');
    $profilePhoto.attr("src", tweet.profilePhotoURL);
    $profilePhoto.appendTo($photoContainer);


    // Creates username and adds to the tweet
    var $username = $('<div class="username"></div>');
    $username.text('@' + tweet.user);
    $username.on("click", function(event) {
      // console.log(event);
      // console.log(event.target.innerText)
      filterFeed(event.target.innerText);
    });

    $username.appendTo($information);


    // Creates timestamp and adds to the tweet
    var $timestamp = $('<div class="timestamp"></div>');
    $timestamp.text(jQuery.timeago(tweet.created_at));
    console.log('Time created at: ' + tweet.created_at)
    $timestamp.appendTo($information);
    jQuery.timeago(tweet.created_at);

    // Creates message and adds to the tweet
    var $message = $('<div class="message"></div>');
    $message.text(tweet.message);
    $message.appendTo($information);

    //Creates icons and adds them to the tweet
    var $icon1 = $('<i class="far fa-comment icon comment"></i>');
    $icon1.attr("src", './assets/icons/placeholder.png');
    $icon1.appendTo($information);
    var $icon2 = $('<i class="fas fa-retweet icon retweet"></i>');
    $icon2.attr("src", './assets/icons/placeholder.png')
    $icon2.appendTo($information);
    var $icon3 = $('<i class="far fa-heart icon like"></i>');
    $icon3.attr("src", './assets/icons/placeholder.png')
    $icon3.appendTo($information);
    var $icon4 = $('<i class="far fa-share-square icon share"></i>');
    $icon4.attr("src", './assets/icons/placeholder.png')
    $icon4.appendTo($information);

    index -= 1;
  }


}


});

window.isItBeautifulYet = true;