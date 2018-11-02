(function($) {
  "use strict"; // Start of use strict

  var tracks = [
    // {
    //   id: "ai",
    //   title: "Artificial Intelligence",
    //   body:
    //     "From bots, to personal assistants, and shopping automation, what the future holds for artificial intelligence can be described for sure with at least one word; Exciting. Our machines and devices are getting faster, more efficient and slowly learning to do things on their own.",
    //   img: "img/track-ai.png"
    // },
    // {
    //   id: "blockchain",
    //   title: "Blockchain",
    //   body:
    //     'Today\'s most exciting use cases for blockchain technology extend far beyond payments and digital currency. With the advent of "smart contracts" and turing-complete frameworks, blockchain technology has evolved far beyond just bitcoins. It is time to join the Web 3.0 revolution!',
    //   img: "img/track-blockchain.png"
    // },
    {
      id: "iot",
      title: "Web Development",
      body:
        "Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.Web development is also known as website development.",
      img: "img/tracks-wd.png"
    },
    // {
    //   id: "algorithm",
    //   title: "Algorithm",
    //   body:
    //     "Ever wondered why is there a price hike while we hunt for the same flight over and over? Algorithms do it for the Airlines. This concept of Algorithms has existed for centuries; from increasing your flight fares to making your work easier online, algorithms are an integral part of how computers process data. With this track, you challenge world's best programmers and put your coding skills at their best!",
    //   img: "img/track-algorithm.png"
    // },
    {
      id: "fintech",
      title: "App Development",
      body:
        "One of the more popular forms of coding in recent times is the creation of applications, or apps, that run on mobile devices like phones and tablets. You probably use a range of different apps in your everyday life. Wouldn’t it be cool to create one of your own?",
      img: "img/tracks-ad.png"
    },
    // {
    //   id: "future-mobility",
    //   title: "Future Mobility",
    //   body:
    //     "From self driving cars to smart cities software and sensor technology is changing the way we move around. Hate traffic? We too. Hate pollution? Same. Hate finding a parking spot? Yep. Join the Future Mobility track and solve these problems.",
    //   img: "img/track-future-mobility.png"
    // },
    // {
    //   id: "healthtech",
    //   title: "HealthTech",
    //   body:
    //     "None of us need to search far for a friend or family member impacted by sickness or injury. At our most vulnerable moments, we are confronted with a healthcare system woefully incapable of meeting the current demands. We are calling on all hackers and sponsors to innovate for a healthier future.",
    //   img: "img/track-healthtech.png"
    // },
    {
      id: "ml",
      title: "Machine Learning",
      body:
        "Are you fascinated by how Netflix recommends the movies you’ll like? Have you wondered what is the Google algorithm that shows you such accurate search results? Machine Learning is behind these innovations. It represents a key evolution in the fields of computer science, data analysis, software engineering, and artificial intelligence.",
      img: "img/tracks-ml.png"
    }
    // {
    //   id: "ar-vr",
    //   title: "AR/VR",
    //   body:
    //     "VR and AR is the extension of our minds, and is meant for those interested in building immersive, engaging experiences for real industry applications. From fashion and sports to data visualisation and engineering to education and healthcare, every sector will be impacted by the rise of VR & AR.",
    //   img: "img/track-ar-vr.png"
    // }
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
