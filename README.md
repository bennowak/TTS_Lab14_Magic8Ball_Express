# Magic 8 Ball
## Logic/Data Considerations
- To minimize on duplicate data, I chose a simple JSON object structure to encapsulate the complete set of potential states for the magic 8-ball. The top level of the object is an array of objects.  Each object element in the array has the following attributes
    - tone: A string that indicates a tone of "positive", "neutral", or "negative"
    - color: A string that corresponds to the color of the tone.
    - messages[]: An array of possible messages that correspond to the tone.
### Steps
- To produce a random message, a top-level object is selected from the list using

`let ebReply = magic8ball[Math.floor(Math.random() * magic8ball.length)]`
- Then a random message is selected from the available array using

`eb.messages[Math.floor(Math.random() * eb.messages.length)]`
- All of the required data is passed to the view. This is done in the route file at `routes/magic.js'

```
router.get('/8-ball', function (req, res, next) {
    // Get 8-ball message
    let ebReply = eightBall[Math.floor(Math.random() * 3)];

    res.render('magic/8-ball', {title: 'Magic 8 Ball', msg: ebReply.messages[Math.floor(Math.random() * ebReply.messages.length)], tone: ebReply.tone, bg_color: ebReply.color});
});
```

### JSON Object representation of Magic 8-Ball
```
[
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
```

![Magic 8-Ball](/public/images/8ball.png "Magic 8-Ball using Express/Node.")

