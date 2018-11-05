(function($) {
  "use strict"; // Start of use strict

  var tracks = [
  
    {
      id: "iot",
      title: "Web Development",
      body:
        "Practically every organization in existence is interacting with people via the web, making the position of a web developer one of the most sought after. Companies are investing in and expanding their online presence and this gives one an excellent opportunity to find position in any location around the world in the field of web development.",
      img: "img/tracks-webd.png"
    },
   
    {
      id: "fintech",
      title: "App Development",
      body:
        "The world is officially mobile and almost every major company with an internet presence also has an associated app that trailors and extends its services to the mobile user. A lucrative and in-demand skill to work upon.",
      img: "img/tracks-ad.png"
    },
    
    {
      id: "ml",
      title: "Machine Learning",
      body:
        "What future holds for machine learning can be described for sure with one word;Exciting. From ranking sports teams and plotting the path of movie zombies, from identifying trending news topics to building recommendation engines, machine learning can be much more fascinating.",
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
    modal.find(".modal-body").text(track.body);
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
