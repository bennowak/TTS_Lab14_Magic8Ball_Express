let express = require('express');
let router = express.Router();

let magic8ball = [
    {
        tone: "positive",
        color: "green",
        messages: [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes - definitely",
            "You man rely on it",
            "As I see it,yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes"
        ]
    },
    {
        tone: "negative",
        color: "red",
        messages: [
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ]
    },
    {
        tone: "neutral",
        color: "blue",
        messages: [
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again"
        ]
    }
];

/* GET home page. */
router.get('/8-ball', function (req, res, next) {
    // Get 8-ball message
    let ebReply = magic8ball[Math.floor(Math.random() * magic8ball.length)];

    res.render('magic/8-ball', {
        title: 'Magic 8 Ball',
        msg: ebReply.messages[Math.floor(Math.random() * ebReply.messages.length)],
        tone: ebReply.tone,
        bg_color: ebReply.color
    });
});

module.exports = router;
