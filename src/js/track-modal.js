(function($) {
  "use strict"; // Start of use strict

  var tracks = [
  
    {
      id: "iot",
      title: "Web Development",
      body:
        "<h3 id=\"1bookmarkmanagerwebextension\">1. Bookmark Manager Web extension</h3><ul><li><strong>Suggested Audience:</strong> First years and above.</li><li><strong>Description:</strong> A web extension which is used to manage bookmarks having these features (but not limited to)-</li></ul><ol><li>The user can search in bookmarks (for the title, URL)</li><li>User can save notes along with bookmarks for future references.</li><li>Users can export all the data (including notes) to a separate json file.</li></ol><ul><li><p><strong>Goals:</strong> </p><ul><li>Build the chrome extension up to completion/adequate progress.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Basic knowledge of HTML, CSS and JavaScript</li></p><p><li>Fuzzy search can be implemented for searching</li></ul><p></p></li></p><p><li><p><strong>Resources:</strong></p></p><p><ul><li>Refer the tutorial <a href=\"https://developer.chrome.com/extensions/getstarted\">here</a> on how to build a chrome extension.</li></ul></p><p></li></ul></p><h3 id=\"2noteboard\">2. Note Board</h3><ul><li><strong>Suggested Audience:</strong> First years.</li><li><strong>Description:</strong> A note scribbling website which will just be a full size textfield with a save button having these features (but not limited to) -</li></ul><ol><li>Clicking anywhere should start typing from that point (similar to One Note).</li><li>A save button will persist the text to a Database.</li><li>Visiting the website from anywhere should show the same text.</li></ol><ul><li><p><strong>Goals:</strong> </p><ul><li>Phase 1: Build the frontend UI and logic for the application.</li><li>Phase 2: Add users and database persistance feature to the application.</li></ul></li><li><p><strong>Requirements:</strong> </p><ul><li>Basic knowledge of HTML, CSS and JavaScript</li><li>Basic knowledge of database persistance.</li></ul></li><li><p><strong>Resources:</strong></p><p><ul><li>Firebase Database can be used. It persists data without having to write backend code (<a href=\"https://firebase.google.com/docs/database/web/start\">docs</a>, <a href=\"https://www.tutorialspoint.com/firebase/\">tutorial</a>).</li></ul><p></p></li></ul></p>",
      img: "img/tracks-webd.png"
    },
   
    {
      id: "fintech",
      title: "App Development",
      body:
        "<h3 id=\"1sharedcalendar\">1. Shared Calendar</h3><ul><li><p><strong>Suggested Audience:</strong> Second years</p></li><li><p><strong>Description:</strong> Shared calendar is an android app to solve the problem of clashes of student activities in the college. You will design a calendar that will be readable.</p></li><li><p><strong>Goals:</strong> </p><ul><li>Build the shared calender up to completion/adequate progress.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Knowledge of Java, XML and Android basics.</li></p><p><li>Knowledge of database persistence.</li></ul><p></p></li></ul></p>",
      img: "img/tracks-ad.png"
    },
    
    {
      id: "ml",
      title: "Machine Learning",
      body:
        "<h3 id=\"1yourownmachinelearninglibrary\">1. Your Own Machine Learning Library</h3><ul><li><p><strong>Suggested Audience:</strong> First years</p></li><li><p><strong>Description:</strong> One of the crucial things in machine learning is to understand the inner working of the  algorithms being used. In this project, you will develop a machine learning library consisting of various machine learning algorithms built without using any ready-to-use library. A tentative list of algorithms can be discussed later with the mentors.</p></li><li><p><strong>Goals:</strong> </p><ul><li>Phase 1: Implementation of linear regression, logistic regression, decision tree, k-nearest neighbours, K-means clustering, neural networks.</li><li>Phase 2: Implementation of more advanced algorithms and techniques, if time permits.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Basic knowledge of machine learning algorithms.</li></p><p><li>Basic knowledge of Python, object-oriented programming and Numpy.</li></ul><p></p></li></p><p><li><p><strong>Resources:</strong> </p></p><p><ul><li>A basic overview of the algorithms is given <a href=\"https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/\">here</a>.</li></ul></p><p></li></ul></p><h3 id=\"2machinelearningmodelzoo\">2. Machine Learning Model Zoo</h3><ul><li><p><strong>Suggested Audience:</strong> First years</p></li><li><p><strong>Description:</strong> A model zoo is a collection of machine learning models trained and applied for various problems ranging from simple regression to large scale vision problems. In this project, you will create machine learning models for various regression as well as classification tasks. </p></li><li><p><strong>Goals:</strong> </p><ul><li>Phase 1: Implementation of machine learning models for various regression tasks. You can choose tasks of your own or discuss with the mentors.</li><li>Phase 2: Implementation of more advanced machine learning models for classification tasks on image data.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Implementation knowledge of machine learning algorithms.</li></p><p><li>Knowledge of Python, basic understanding of Numpy and Scikit-Learn. Knowledge of Pandas would be an  advantage.</li></ul><p></p></li></p><p><li><p><strong>Resources:</strong> </p></p><p><ul><li>A basic overview of the algorithms is given <a href=\"https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/\">here</a>.</li></p><p><li>An article on difference between regression and classification is given <a href=\"https://www.geeksforgeeks.org/regression-classification-supervised-machine-learning/\">here</a>.</li></ul></p><p></li></ul></p><h3 id=\"3sentimentanalysisonmetootweets\">3. Sentiment Analysis on #MeToo tweets</h3><ul><li><p><strong>Suggested Audience:</strong> First years and above</p></li><li><p><strong>Description:</strong>  Sentiment analysis is the process of identifying and categorizing opinions expressed in a piece of text. #MeToo spread virally in October 2017 as a hashtag on social media in an attempt to demonstrate the widespread prevalence of sexual assault and harassment. This project will try to predict the sentiment from the tweets with the #MeToo hashtag.</p></li><li><p><strong>Goals:</strong> </p><ul><li>Phase 1: Scrape the tweets from Twitter with the hash tag #MeToo and store the data locally.</li><li>Phase 2: Train a sentiment analysis model separately and use it to predict the sentiments for the gathered tweets. Additionally, you can try to suggest if a user requires social counselling based on the intensity of the sentiment.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Knowledge of scraping tools such as scrapy, BeautifulSoup and advanced string matching tools like regex.</li></p><p><li>Conceptual knowledge of Natural Language Processing.</li></p><p><li>Programming skills in Python and ready-to-use machine learning libraries like scikit-learn.</li></ul><p></p></li></ul></p><h3 id=\"4styletransferonimages\">4. Style Transfer on Images</h3><ul><li><p><strong>Suggested Audience:</strong> Second years</p></li><li><p><strong>Description:</strong> Ever wished you could paint like Picasso or Van Gogh? Now, it is possible for a Deep Learning enthusiast like you by using the art of Neural Style Transfer. Style transfer is the technique of recomposing images in the style of other images.</p></li><li><p><strong>Goals:</strong> </p><ul><li>Phase 1: Implementation of the paper “A Neural Algorithm of Artistic Style” by Leon A. Gatys et al.</li><li>Phase 2: Implement Neural Style Transfer for a practical use.</li></ul></li><li><p><strong>Requirements:</strong> </p><p><ul><li>Conceptual knowledge of Deep Learning, specifically Convolutional Neural Networks.</li></p><p><li>Strong programming skills in Python and knowledge of a Deep Learning framework (Tensorflow/ Keras/ PyTorch) would be helpful.</li></ul><p></p></li></p><p><li><p><strong>Resources:</strong> </p></p><p><ul><li><a href=\"https://arxiv.org/pdf/1508.06576.pdf\">Link</a> to the paper \"A Neural Algorithm of Artistic Style” by Leon A. Gatys et al.</li></p><p><li>A working demo of Neural Style Transfer can be found <a href=\"https://deepart.io/\">here</a>.</li></ul></p><p></li></ul></p>",
      img: "img/tracks-ml.png"
    }
    
  ];

  function getNextTrackIndex(currentTrackId) {
    var currentIndex = tracks
      .map(function(track) {
        return track.id;
      })
      .indexOf(currentTrackId);

    return currentIndex === tracks.length - 1 ? 0 : currentIndex + 1;
  }

  function setTrackData(track) {
    var modal = $("#trackModal");
    modal.find(".modal-title").text(track.title);
    modal.find(".modal-body .modal-inner").html(track.body);
    modal.find(".track-img").css("background", 'url("' + track.img + '")');
    modal.data("id", track.id);
  }

  $("#trackModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var selectedTrackId = button.data("track"); // Extract info from data-* attributes

    var selectedTrack = tracks.filter(function(track) {
      return track.id === selectedTrackId;
    })[0];

    setTrackData(selectedTrack);
  });

  $("#nextTrack").on("click", function() {
    var currentTrackId = $("#trackModal").data("id");

    setTrackData(tracks[getNextTrackIndex(currentTrackId)]);
  });
})(jQuery); // End of use strict
