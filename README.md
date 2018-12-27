# Lab 2018-12-26
## MongoDB
### Database Map
![Basic Ticket object for TicketSystem MongoDB database](/public/images/db.png "A basic map of TicketSystem database.")
### All records

- `db.Tickets.find()` : All records

### Queries
Determining what records to perform specific actions on is at the heart of effective database usage and manipulation.  Basic query construction allows the developer to target records based on a wide array of concerns and requirements.  The following queries demonstrate some probable usages against the `TicketSystem.Tickets` collection.
1. `db.Tickets.find({title:{$regex:'assignment'}})` : Shows documents whose `title` matches a regular expression.

2. `db.Tickets.find({submitted_by: 1002})` : Search for ticket submitted by a particular user.

3. `db.Tickets.find({open_date: {$lt:"2018-12-25"}})` : find tickets submitted before a specific date

4. `db.Tickets.find({open_date: {$gt:"2018-12-25"}, status: "closed"})` : Find all tickets that were opened after a particular date, whose status is closed.

5. `db.Tickets.find({assigned_to: 1002, status: "open"})` : show open tickets for a particular assignee

6. `db.Tickets.find({notes: {$size: 0}})` : Find tickets that have no notes attached to them.

7. `db.Tickets.find({status: "open"})` : Find all tickets whose status is open.

8. `db.Tickets.find({category: "internal", status: "open"})` : find all tickets with a category of `internal` and a status of `open`.

9. `db.Tickets.find({category: { $in: [ "protected", "personal"] }})` : Find documents whose category matches an entry in the `$in:` array

10. `db.Tickets.find({category: { $in: [ "protected", "internal"] }, assigned_to: 1001})` : Find documents that match a list of categories and are assigned to a particular team member

### Updates
Selectively performing updates is a very important skill.  The following updates demonstrate some probable usages against the `TicketSystem.Tickets` collection.
1. `db.Tickets.updateOne({id: 5}, {$set : {status: "open", close_date: null}})` : Update fields `status` and `close_date` for ticket `id:5` to reopen the ticket.

1. `db.Tickets.updateMany({status: "open"}, {$set : {assigned_to: 1001}})` : Assign all open tickets to a single team member.

## Magic 8 Ball
### Logic/Data Considerations
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

