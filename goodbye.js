(function (window) {
    let goodbyeSpeaker = {};
    let speakWord = "Goodbye";

    goodbyeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
