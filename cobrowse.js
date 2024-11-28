function startCobrowsing() {
(function (s, u, r, f, l, y) {
    s[f] = s[f] || { init: function () { s[f].q = arguments } };
    l = u.createElement(r); y = u.getElementsByTagName(r)[0]; l.async = 1;
    l.src = 'https://surfly.com/surfly.js'; y.parentNode.insertBefore(l, y);
    }) (window, document, 'script', 'Surfly');
    
    var SurflySession;
    var settings = {
      widget_key: '6b4b4f028ebd4d3ea426133f243f9fa4',
      tags: ["Session-Builder"],
    };
    
    Surfly.init(settings, function (init) {
        if (init.success && !Surfly.isInsideSession) {
            console.log("init success");
            SurflySession = Surfly.session()
              .create()
              .on("session_created", function (session, event) {
                SurflySession.startLeader();
              })
              .on("session_started", function (session, event) {
                //enable popup
                console.log("popup code triggered");
              })
              .on("participant_joined", function (session, event) {
                console.log(
                  "Participant ",
                  event.clientIndex,
                  "joined the session"
                );
                // 0 is agent
                if (event.clientIndex === 0) {
                  //hide pop up
                  console.log("agent joined");
                } else {
                  //don't hide it
                }
              });
        }
    });
};
