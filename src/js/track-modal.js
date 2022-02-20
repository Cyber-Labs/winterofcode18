(function($) {
  "use strict"; // Start of use strict

  var tracks = [
    {
      id: "cybers",
      title: "Infosec",
      body:
        '<div class="card my-3"><div class="card-header collapsed" id="is1" data-toggle="collapse" data-target="#isOne" aria-expanded="true" aria-controls="collapseIs1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Semi-Smart Esolang Decryptor</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="isOne" class="collapse" aria-labelledby="is1" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description: </strong><a target="_blank" href="https://en.wikipedia.org/wiki/Esoteric_programming_language">Esoteric programming language.</a> The idea is to make a working application that will detect with high accuracy the type of esolang and then will proceed to decrypt it. Not all esolangs even have interpreters.</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>Semi-smart in nature, no ML required (will give the actual result in amongst the top 10)</li><li>Basic stats like frequency analysis</li><li>Local Storage for fast access to the charsets</li><li>Integration with websites that decrypts some common esolangs</li><li>Few self made interpreters for random esolangs</li><li>Fun Randomizer</li></ul></li><br/><li><p><strong>Tech Stack:</strong></p><ul><p><li>Python (Preferred)</li></p><p><li>Any web-scraping library</li></p><p><li>Linux</li></p></ul></p><p></li></p><p></ul></p></div></div></div>\
         <div class="card my-3"><div class="card-header collapsed" id="is2" data-toggle="collapse" data-target="#isTwo" aria-expanded="true" aria-controls="collapseIs2"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">File Forensics Reporter</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="isTwo" class="collapse" aria-labelledby="is1" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description:</strong>Your day to day files can hide a lot within them, secret messages or even malicious code. When given a file, your application should generate a detailed report after analysing each aspect of how things can be embedded in it, even displaying the things it found.</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>CLI nature in general</li><li>Must include:<ol><li>Office files (.pdf,.docx,.ppt,.xlsx etc)</li><li>Image files (.png, .jpg, .bmp etc)</li><li>Audio/ Video files (.mp3,.wav,.mp4 etc)</li><li>Other common files that may hide code (.pcap,.sql,.zip,.7z etc)</li></ol></li><li>report in markdown(.md) format</li><li>Custom as well as tool-based analysis</li><li>Threading for simultaneous and fast inspection</li></ul></li><br/><li><p><strong>Tech Stack:</strong></p><ul><p><li>Python (Preferred)</li></p><p><li>File Forensic tools (binwalk, hexedit, etc.)</li></p><p><li>Linux (any distro)</li></p></ul></p><p></li></p><p></ul></p></div></div></div>\
         <div class="card my-3"><div class="card-header collapsed" id="is3" data-toggle="collapse" data-target="#isThree" aria-expanded="true" aria-controls="collapseIs3"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Custom Steg Implementation</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="isThree" class="collapse" aria-labelledby="is3" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description: </strong>A custom library or application, implementing a steganography technique based on research papers. Must involves techniques which requires a special in-depth custom tool to break or better unbreakable</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>Must have replica of some other popular implementations like-<ol><li>RGB bit plane manipulation</li><li>LSB steganography</li><li>Whitespace steganography</li><li>Error correction</li></ol></li><li>Preferable GUI project</li><li>Your own custom implementation (PVD, PRNG based etc)</li></ul></li><br/><li><p><strong>Tech Stack:</strong></p><ul><p><li>Python (Preferred)</li></p><p><li>GUI with Python (PyQt5, tkinter etc)</li></p><p><li>Steganography tools (stegsolve, stegsnow etc)</li></p><p><li>Linux</li></p></ul></p><p></li></p><p></ul></p></div></div></div>\
         <div class="card my-3"><div class="card-header collapsed" id="is4" data-toggle="collapse" data-target="#isFour" aria-expanded="true" aria-controls="collapseIs4"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Web Crawler</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="isFour" class="collapse" aria-labelledby="is4" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description: </strong>The main aim of the project is to create an active reconnaissance tool (CLI Tool) which can automate the recon process on the given domain or URL and make a report of its findings. This will help us in gathering much more information about the domain without actually visiting the website and saves a lot of time.</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>Command Line Interface (CLI) Tool where we need to only provide domain and other parameters as an input.</li><li>Captures screenshot of Web Pages, Admin Panel etc.</li><li>Harvest Email Addresses, Links, Contact Detail, Social Media Accounts and other Juicy Information.</li><li>Subdomain Hunting and Directory brute-forcing</li><li>Capture HTTP Headers for Web Pages.</li><li>Gather DNS information for each Subdomain</li><li>Record and save the result of each findings.</li><li>P.S-The project must include these functionality but is not limited to these as it may include other interesting things.</li></ul></li><br/><li><p><strong>Tech Stack:</strong></p><ul><p><li>Python</li></p><p><li>Web library such as Requests, Beautiful Soup, Selenium etc</li></p></ul></p><p></li></p><p></ul></p></div></div></div>',
      img: "img/tracks-infosec.png"
    },
    {
      id: "iot",
      title: "Web Development",
      body:
        '<div class="card my-3"><div class="card-header collapsed" id="web1" data-toggle="collapse" data-target="#webOne" aria-expanded="true" aria-controls="collapseWeb1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">GameBase-An Online Gaming Website</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="webOne" class="collapse" aria-labelledby="web1" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description:</strong>A large database of Online games from which user can also search games using search bar and also category-wise.These features are expected(but not limited to) -</li></ul><ol><li>A sign in-signup landing page for user authentication.</li><li> A search(by their names) feature for games(using Search bar).</li><li>Tategory-wise distribution of games(or we can say category filter).</li><li>New Game upload feature for admin.(admin can change a normal user to an admin from database).</li></ol><ul><li><p><strong>Goals:</strong> </p><ul><li>Build a basic frontend layout of the website using HTML, CSS (or bootstrap).</li>	<li>Integrate the website with Firebase in order to build sign-in and sign-up system (basically using firebase authentication).</li><li>After successful sign-in, redirect the user to the home page, where all the games(most popular games on top(optional)) will be displayed. The page should also have a search bar on the top for dynamic searching of games and a dropdown for category filtering.(You can pick games from website given in requirements).</li><li>There should be a separate page for admins to upload new games.</li></ul></li><li><p><strong>Requirements:</strong> </p><ul><p><li>Basic knowledge of HTML, CSS and JavaScript</li></p><p><li> Basic knowledge of firebase, how to use its features, etc.<b>(firebase is not necessary, you can use alternatives like local storage or cookies)</b></li></p><p><li>Knowledge of bootstrap (not necessary, but would be an advantage)</li></p><p><li>Games\' iframe <a href="https://html5games.com/">links</a>(please go through all types of usages of iframes in website for better understanding of implementation).</li></p></ul></p><p></li></p><p></ul></p></div></div></div>\
        <div class="card my-3"><div class="card-header collapsed" id="web2" data-toggle="collapse" data-target="#webTwo"aria-expanded="true" aria-controls="collapseWeb1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">PenName Chooser</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div id="webTwo" class="collapse" aria-labelledby="web1" data-parent="#accordion"><div class="card-body pt-2"><ul><li><strong>Description:</strong>A pen name chooser website to select a suitable common pen name for different Having features but not limited to -</li></ul><ol><li>A form to enter desired pen name. Option to select multiple platform out of the given list of websites.</li><li>It should show that in which platform the user name is available and in which it is not.</li></ol><ul><li><p><strong>Goals:</strong> </p><ul><li>Build a basic frontend layout of the website using HTML, CSS (or Bootstrap).</li><li>To create a form displaying a list of websites (gaming, coding, freelancing and social media platforms).</li><li>Saving the previously shown result in firebase database and/or local storage</li></ul></li><li><p><strong>Requirements:</strong> </p><ul><p><li>Basic knowledge of HTML, CSS and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li></p><p><li>Basic knowledge of API and status codes</li></p><p><li> Basic knowledge of <a href="https://www.tutorialspoint.com/firebase/">firebase</a>, how to use its features, etc.<b>(firebase is not necessary, you can use alternatives like local storage or cookies)</b></li></p><p><li>Knowledge of <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">bootstrap</a> (not necessary, but would be an advantage)</li></p></ul></li></ul></div></div></div>\
        <div class="card my-3"> <div class="card-header collapsed" id="web3" data-toggle="collapse" data-target="#webThree" aria-expanded="true" aria-controls="collapseWeb3"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Notes App</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="webThree" class="collapse" aria-labelledby="web3" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong>A simple website to login,view all the notes written previously,add new notes to the database.The application is expected(but not limited to) to have following features : </li> </ul> <ol> <li>A signin-signup landing page for user authentication.</li> <li>Home page showing all the previously added notes by the user.</li> <li>User should be able to add new note,edit and delete a note.</li> <li>User should be able to see the date and time of creation of the note.</li> </ol> <ul> <li> <p><strong>Goals:</strong> </p> <ul> <li>Build a basic frontend layout of the website using HTML, CSS (and/or Bootstrap).</li> <li>Integrate the website with Firebase in order to build sign-in and sign-up system (basically using firebase authentication).</li> <li>fter successful sign-in, redirect the student to the home page, where previously added notes will be displayed.</li> <li>On the home page itself,make a button to create a new note.Clicking on the button will lead the user to a new webpage contaning a form to create a note.</li> <li>For every note in the home page ,add the feature to edit or delete.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Basic knowledge of HTML, CSS and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li></p> <p><li> Basic knowledge of <a href="https://www.tutorialspoint.com/firebase/">firebase</a>, how to use its features, etc.<b>(firebase is not necessary, you can use alternatives like local storage or cookies)</b></li></p> <p><li>Knowledge of <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">bootstrap</a> (not necessary, but would be an advantage)</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-3"> <div class="card-header collapsed" id="web4" data-toggle="collapse" data-target="#webFour" aria-expanded="true" aria-controls="collapseWeb4"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">College Petition Writing Website</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="webFour" class="collapse" aria-labelledby="web4" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong>The application is expected(but not limited to) to have following features : </li> </ul> <ol> <li>A signin-signup landing page for user authentication.</li> <li>The person after logging should be able to write and post the petition.</li> <li>Can share the petition on the social media handles.</li> <li>There should be an option to upvote/downvote the petition.</li> <li>Also implement that if the no. of upvotes increases certain limit, an alert/mail shoul be sent to the head/person concerned of senate.</li> <li>If time permits can add a text editor for writing up the petitions.</li> <li>Since it will be college petition page , can add details about college , administration etc.</li> </ol> <ul> <li> <p><strong>Goals:</strong> </p> <ul> <li>Build a basic frontend layout of the website using HTML, CSS (and/or Bootstrap).</li> <li>Integrate the website with Firebase in order to build sign-in and sign-up system (basically using firebase authentication).</li> <li>Create a page to add/write a petition.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Basic knowledge of HTML, CSS and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li></p> <p><li> Basic knowledge of <a href="https://www.tutorialspoint.com/firebase/">firebase</a>, how to use its features, etc.<b>(firebase is not necessary, any other database can also be used)</b></li></p> <p><li>Knowledge of <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">bootstrap</a> (not necessary, but would be an advantage)</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-3"> <div class="card-header collapsed" id="web5" data-toggle="collapse" data-target="#webFive" aria-expanded="true" aria-controls="collapseWeb5"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">To Do List Browser Extension</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="webFive" class="collapse" aria-labelledby="web5" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> A chrome extension which can be used to create and manage to-dos.This extension would integrate on the top right side of the browser and no other page would be required to create and handle to-dos </li> </ul> <ol> </ol> <ul> <li> <p><strong>Goals:</strong> </p> <ul> <li>Build a nice looking popup html file with CSS.</li> <li>Use check boxes and delete button for organising to-dos.</li> <li>Use localStorage provided by extension for storing the list.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Basic knowledge of HTML, CSS and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li></p> <p><li><a href="https://developer.chrome.com/docs/extensions/mv2/getstarted/">Chrome Extension Development Tool</a></li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-3"> <div class="card-header collapsed" id="web6" data-toggle="collapse" data-target="#webSix" aria-expanded="true" aria-controls="collapseWeb6"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Video Searching Website</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="webSix" class="collapse" aria-labelledby="web6" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> A Video searching website to search across the whole video with the help of the video\'s transcript. The features must include : </li> </ul> <ol> <li>A sign in-sign up landing page.</li> <li>After successful login, users dashboard must contain the categorized uploaded YouTube links.</li> <li>User must have the privilege to add/delete categories as well as links uploaded.</li> <li>A voice-search feature to search for the keywords in the transcript of the particular video and seek to the desired point.</li> </ol> <ul> <li> <p><strong>Goals:</strong> </p> <ul> <li>Build a basic frontend layout of the website using HTML, CSS (and/or Bootstrap).</li> <li>Integrate the website with Firebase in order to build sign-in and sign-up system (basically using firebase authentication).</li> <li>Use firebase database to store user data.</li> <li>Use Google\'s Text to Speech API to implement voice search functionality.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Basic knowledge of HTML, CSS and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li></p> <p><li>Basic knowledge of API (<a href="https://cloud.google.com/text-to-speech/docs/quickstart-protocol">Google\'s Text to Speech API</a>)</li></p> <p><li> Basic knowledge of <a href="https://www.tutorialspoint.com/firebase/">firebase</a>, how to use its features, etc.(firebase is not necessary, any other database can also be used)</li></p> <p><li>Knowledge of <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">bootstrap</a> (not necessary, but would be an advantage)</li></p> </ul> </li> </ul> </div> </div> </div>',
      img: "img/tracks-webd.png"
    },
    {
      id: "fintech",
      title: "App Development",
      body:
        '<div class="card my-4"> <div class="card-header collapsed" id="android1" data-toggle="collapse" data-target="#androidOne" aria-expanded="true" aria-controls="collapseAndroid1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Online Tic-Tac-Toe with Blogs</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="androidOne" class="collapse" aria-labelledby="android1" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> The proposed idea is an Android App that allows users to create an ID and see the list of registered users with an option to play tic-tac-toe with them online and an option to share your thoughts with everyone using a blogging service. </li> </ul> <ul> <li> <p><strong>Features:</strong> </p> <ul> <li>Firebase Auth to provide authentication protection.</li> <li>Three tabs on Main Screen <ol type="a"> <li>Pending request to play a game.</li> <li>List of Registered users.</li> <li>Blog page where you can see others thoughts.</li> </ol> </li> <li>Clicking on any user will send a request to that user, once he accepts it, a room will be created in the firebase with both of them and they can play. </li> <li>After the match is done, that room will be destroyed.</li><li>Attractive UI is to be looked after.</li><li>In blogs section, <ol type="a"><li>You will see list of all thoughts in recycler view.</li><li>A floating action button which allows you to create one and POST it among friends.</li></ol></li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Android</li></p> <p><li>Java, XML</li></p> <p><li>Firebase authentication system to create user\'s profile.</li></p> <p><li>Front-End Components: NavigationDrawer/TabLayout, RecyclerView, FloatingActionButtons</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-4"> <div class="card-header collapsed" id="android2" data-toggle="collapse" data-target="#androidTwo" aria-expanded="true" aria-controls="collapseAndroid2"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Link Shortener App</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="androidTwo" class="collapse" aria-labelledby="android2" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> A very basic app that uses one of the link shortening services available on the web and returns a shortened link for the URL entered. The app also saves the history of all the generated links for easy reference of the user. </li> </ul> <ul> <li> <p><strong>Features:</strong> </p> <ul> <li>The App can be used only by Authenticated users using FirebaseAuth service. A sign in and sign up screen are present in the app for this purpose.</li> <li>The main function of the app will be to generate Shortened URLs for any given link, by making use of any one of the various <b>APIs</b> available for the purpose on the internet.</li> <li>The app should also have the features to save and delete the records of all the links generated by a particular user in FIREBASE along with all the details like original link, time and date of generation, etc.</li> <li>The app should also show the saved records using RecyclerView on a separate history page.</li> <li>The app should also feature a Profile page with options to view his personal details, like his name, no of URLs generated till date, etc, and possibly edit those details which can be.</li> <li>Any more features you’d like to implement and incorporate into your app are welcome.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Android Studio</li></p> <p><li>Java, XML</li></p> <p><li>Firebase authentication system to create user\'s profile.</li></p> <p><li>Front-End Components: NavigationDrawer/TabLayout, RecyclerView, FloatingActionButtons</li></p> <p><li>Firebase auth service</li></p> <p><li>Firebase realtime database</li></p> <p><li>RETROFIT</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-4"> <div class="card-header collapsed" id="android3" data-toggle="collapse" data-target="#androidThree" aria-expanded="true" aria-controls="collapseAndroid3"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Movie Maniac / Podcast Maniac</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="androidThree" class="collapse" aria-labelledby="android3" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> The proposed idea is an Android app that will keep you updated with the latest movies/podcast. This should also provide their ratings on various platforms, description, and actors,etc. And can directly get you to the booking website. </li> </ul> <ul> <li> <p><strong>Features:</strong> </p> <ul> <li>Create user profile after authentication</li> <li>It should show the list of latest movies under different categories.</li> <li>Pass intent to move from one activity to another and create a web view to display full movie details.</li> <li>Retrofit pipelines to fetch data from API.</li> <li>It should directly take you to the booking page if you want to book a seat (available from API).</li> <li>An attractive UI for better user experience.</li> <li>Additional features and Ideas are welcome.</li> <li>Notifications are OPTIONAL.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Android</li></p> <p><li>Java, XML</li></p> <p><li>Firebase authentication system to create user\'s profile.</li></p> <p><li>Hetero Recycler View to show all the movies under different categories in the home screen.</li></p> <p><li>Retrofit networking to fetch data from the api\'s.</li></p> <p><li>Front-End Components: NavigationDrawer/TabLayout, RecyclerView, FloatingActionButtons</li></p> <p><li>Notification System to give notifications about new releases.</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-4"> <div class="card-header collapsed" id="android4" data-toggle="collapse" data-target="#androidFour" aria-expanded="true" aria-controls="collapseAndroid4"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Health Companion</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="androidFour" class="collapse" aria-labelledby="android4" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> The proposed idea is an Android app that will help users monitor and take care of their health according to various pointers such as adequate sleep, exercise, water intake and step-count. Authentication is necessary using firebase. </li> </ul> <ul> <li> <p><strong>Features:</strong> </p> <ul> <li>The app should keep records of sleeping time and waking-up time (with alarm) as entered by the user. It should notify the user about oversleeping and undersleeping.</li> <li>It should keep records of the time spent daily on exercise, as well as the weekly and monthly average.</li> <li>It should help ensure daily intake of water, through timely reminders (notifications) throughout the day. Inadequate water intake should be reported.</li> <li>A pedometer should be implemented in the app to count the number of steps walked.</li> <li>Additional features are welcome after due discussion with the mentors.</li> <li>Notifications are OPTIONAL.</li> </ul> </li> <li> <p><strong>Requirements:</strong> </p> <ul> <p><li>Android Studio</li></p> <p><li>Java, XML</li></p> <p><li>Front-End Components: NavigationDrawer/TabLayout, RecyclerView, FloatingActionButtons</li></p> <p><li>Firebase auth service</li></p> <p><li>ROOM library / SQLDatabase</li></p> <p><li>Notification system</li></p> <p><li>Using Accelerometer Sensor for Step-Counting</li></p> </ul> </li> </ul> </div> </div> </div>\
        <div class="card my-4"> <div class="card-header collapsed" id="android5" data-toggle="collapse" data-target="#androidFive" aria-expanded="true" aria-controls="collapseAndroid5"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Dictionary App</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="androidFive" class="collapse" aria-labelledby="android5" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong> This application will help the user to get meanings of new words. Improve their vocabulary. Get a wikipedia link for detailed information.The user has to select the word and use share to share that word with the application and get its meaning.The user can also type in the word he wants to get the meaning of. </li> </ul> <ul> <li> <p><strong>Features:</strong> </p> <ul> <li>Login Using Name and Activity.</li> <li>The History of Words searches displayed using recycler view.</li> <li>Wikipedia Reference if the user makes a choice.</li> <li>Each term and its meaning using Google webpage or can use a database.</li> <li>can add pronounciations of the word.</li> </ul> </li> <li> <p><strong>TechStack:</strong> </p> <ul> <p><li>Android Studio</li></p> <p><li>Firebase Authentication</li></p> <p><li>WebPage</li></p> <p><li>SQLite Database, EngDictionary database</li></p> <p><li>RecyclerView</li></p> </ul> </li> </ul> </div> </div> </div>',
      img: "img/tracks-ad.png"
    },
    {
      id: "ml",
      title: "Machine Learning",
      body:
      '<div class="card my-4"> <div class="card-header collapsed" id="ml1" data-toggle="collapse" data-target="#mlOne" aria-expanded="true" aria-controls="collapseMl1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">ML Bootcamp</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div> <div id="mlOne" class="collapse" aria-labelledby="ml1" data-parent="#accordion"> <div class="card-body pt-2"> <ul> <li> <strong>Description:</strong>To build your own Machine Learning Library </li> </ul> <ul> <li> <p><strong>Objectives:</strong> </p> <ul> <li>Implement Linear (and Polynomial) Regression, Logistic Regression, KNN, K-Means Clustering and Neural Networks from <b>scratch</b>.</li> <li>Evaluate the implemented algorithms on various datasets provided to you. Evaluate how different models perform on different datasets.</li> <li>Prepare a report elaborating your work and findings.</li> </ul> </li> <li> <p><strong>Implementation Details:</strong> </p> <ul> <li>All algorithms have to be coded from scratch in python. </li> <li>Only Jupyter notebooks or Google Colaboratory can be used for demonstration of your algorithms</li> <li>The report should contain the training logs, hyperparameters, and concerned training visualisations</li> <li>No ML related library except NumPy, Pandas and Matplotlib should be used</li> <li>A baseline score will be provided. Your model must out-perform the given score.</li> </ul> </li> </ul> </div> </div> </div>',
    },
    {
      id: 'gd',
      title: 'Graphics Designing',
      body:
        '<div style="width: 100%;" class="card my-3"><div style="width: 100%;" class="card-header collapsed" id="gd1" data-toggle="collapse" data-target="#gdOne" aria-expanded="true" aria-controls="collapseGd1"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Favourite Music Band</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div style="width: 100%;" id="gdOne" class="collapse" aria-labelledby="gd1" data-parent="#accordion"><div style="width: 100%;" class="card-body pt-2"><ul><li><strong>Description: </strong>Design the official website of your favorite music band (you can think about a hypothetical band too).</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>A music player UI for streaming music on the website itself.</li><li>Facts/blogs/news/videos/films about the band.</li><li>Ticket booking for concerts (if the band is still active).</li><li>Merchandise store of the band.</li><li>Social media links.</li><li>Any other features that you consider necessary.</li></ul></li> <br><li><p><strong>Points to be taken care of:</strong></p><ul><li>The specific genre/vibe of the band should be reflected in the design of the website.</li><li>Try to maintain consistency of the design (consistency with the use of colors, typography, styling) across the website.</li><li>Easy navigation across the website.</li><li>Design at least 4-5 scrollable pages.</li></ul></li> <br><li><p><strong>Basic steps in UI/UX design:</strong></p><ul><p><li><strong>Understanding: </strong>Write down about the target audience/users, know about what the user wants in the website (user journey map).</li></p><p><li><strong>User flow/Navigation: </strong>Make a simple flow chart of pages of the website.</li></p><p><li><strong>Wireframing : </strong>Simple outlining and structuring of elements on pages. You can refer to <a href="https://medium.com/@RBBideas/wireframes-101-a-beginners-guide-7b248788d37c">https://medium.com/@RBBideas/wireframes-101-a-beginners-guide-7b248788d37c</a> <br> Tools: <a href="https://balsamiq.com/">Balsamiq</a>, <a href="http://figma.com/">Figma</a>, or even pen and paper.</li></p><p><li><strong>Designing : </strong>deciding of logo, color palettes, typography, icons etc. <br> Tools: <a href="http://figma.com/">Figma</a>, <a href="https://fonts.google.com/">Google Fonts</a>, <a href="https://www.flaticon.com/">Icons</a></li></p><p><li><strong>UI Designing : </strong> <br> Tools: <a href="http://figma.com/">Figma</a>, Adobe XD</li></p></ul></li><li><p><strong>Useful Websites to explore Graphic Designing: </strong> <a target="_blank" href="https://dribbble.com/">https://dribbble.com/</a></p> <br><ul> <strong>Example Projects:</strong><li><a target="_blank" href="https://www.behance.net/gallery/104498073/e-commerce-store-%28ux-case-study%29">e-commerce store - UX Case Study</a></li><li><a target="_blank" href="https://www.behance.net/gallery/104578369/Spotto-%28The-event-app%29-UI-Case-Study?tracking_source=search_projects_recommended%7Cmusic%20ui%20case%20study">Spotto (the event app) - UI Case Study</a></li><li><a target="_blank" href="https://www.behance.net/gallery/104614331/Reimagining-LinkedIn-UIUX-Case-Study?tracking_source=search_projects_recommended%7Cui%20case%20study">Reimagining LinkedIn - UX/UI Case Study</a></li></ul></li> <br><p><strong>Present your project in the form of a PDF</strong>, in which you can show all the steps of ui/ux designing mentioned above along with the final designs.</p></li></p><p></ul></p></div></div></div>\
        <div style="width: 100%;" class="card my-3"><div style="width: 100%;" class="card-header collapsed" id="gd2" data-toggle="collapse" data-target="#gdTwo" aria-expanded="true" aria-controls="collapseGd2"><div style="margin:0px; padding: 0px;" class="container"><div style="margin:0px; padding: 0px;" class="row"><div class="col-11"><h3 id="1newsroom">Organic Travel App</h3></div><div class="col-1"><span class="chevron-icon"></span></div></div></div></div><div style="width: 100%;" id="gdTwo" class="collapse" aria-labelledby="gd2" data-parent="#accordion"><div style="width: 100%;" class="card-body pt-2"><ul><li><strong>Description: </strong>Design a Travel app which aims to reduce the carbon footprint as the users travel across different places (Organic Travel App - travelling with less carbon footprint).</li></ul><ul><li><p><strong>Features:</strong></p><ul><li>A guide to all sustainable modes of travel (like Trekking, Hiking, Public Transport)</li><li>Interactive Map for guidance.</li><li>Route & Mode of Travel - Time Calculator Screen</li><li>Places of Attraction, Local Eateries, Night Life, Tour Guide - Discover Screen</li><li>Chat Feature with Local Guide</li><li>Fun Facts about the places the user visits.</li><li>Any other features that you consider necessary.</li></ul></li> <br><li><p><strong>Points to be taken care of:</strong></p><ul><li>The motive of this app is to reduce the carbon footprint while travelling, so the theme must be maintained all throughout.</li><li>Try to maintain consistency of the design (consistency with the use of colors, typography, styling) across the app.</li><li>Easy navigation across all the features in the app.</li><li>Design as many screens required to bring forth the idea of the app (minimum 8).</li></ul></li> <br><li><p><strong>Basic steps in UI/UX design:</strong></p><ul><p><li><strong>Understanding: </strong>Write down about the target audience/users, know about what the user wants in the website (user journey map).</li></p><p><li><strong>User flow/Navigation: </strong>Make a simple flow chart of pages of the website.</li></p><p><li><strong>Wireframing : </strong>Simple outlining and structuring of elements on pages. You can refer to <a href="https://medium.com/@RBBideas/wireframes-101-a-beginners-guide-7b248788d37c">https://medium.com/@RBBideas/wireframes-101-a-beginners-guide-7b248788d37c</a> <br> Tools: <a href="https://balsamiq.com/">Balsamiq</a>, <a href="http://figma.com/">Figma</a>, or even pen and paper.</li></p><p><li><strong>Designing : </strong>deciding of logo, color palettes, typography, icons etc. <br> Tools: <a href="http://figma.com/">Figma</a>, <a href="https://fonts.google.com/">Google Fonts</a>, <a href="https://www.flaticon.com/">Icons</a></li></p><p><li><strong>UI Designing : </strong> <br> Tools: <a href="http://figma.com/">Figma</a>, Adobe XD</li></p></ul></li><li><p><strong>Useful Websites to explore Graphic Designing: </strong> <a target="_blank" href="https://dribbble.com/">https://dribbble.com/</a></p> <br><ul> <strong>Example Projects:</strong><li><a target="_blank" href="https://www.behance.net/gallery/104498073/e-commerce-store-%28ux-case-study%29">e-commerce store - UX Case Study</a></li><li><a target="_blank" href="https://www.behance.net/gallery/104578369/Spotto-%28The-event-app%29-UI-Case-Study?tracking_source=search_projects_recommended%7Cmusic%20ui%20case%20study">Spotto (the event app) - UI Case Study</a></li><li><a target="_blank" href="https://www.behance.net/gallery/104614331/Reimagining-LinkedIn-UIUX-Case-Study?tracking_source=search_projects_recommended%7Cui%20case%20study">Reimagining LinkedIn - UX/UI Case Study</a></li></ul></li> <br><p><strong>Present your project in the form of a PDF</strong>, in which you can show all the steps of ui/ux designing mentioned above along with the final designs.</p></li></p><p></ul></p></div></div></div>',
      img: "img/tracks-gd.png"
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
