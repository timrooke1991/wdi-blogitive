const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();

User.create([{
  username: 'JohnSmith5',
  email: 'johnsmith5@gmail.com',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p64x64/10609487_10152259133751701_530836782283067901_n.jpg?oh=807fcdd4b085d125e2bf927a50535ddd&oe=59D3F9C3',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  if(users) console.log(`${users.length} users created!`);
  return Post.create([{
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

[The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

It comes as Mrs May tries to seal a deal with the DUP to govern.

Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

- [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
- [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
- [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

[According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

"It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

"Over Brexit, she is going to have to talk more widely, listen to other parties."

He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

Media captionMacron: 'Of course the door is always open'

"There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

### 'Death row'

The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

Both the Conservatives and Labour have categorically ruled this option out.

Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

[In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  }, {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

[The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

It comes as Mrs May tries to seal a deal with the DUP to govern.

Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

- [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
- [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
- [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

[According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

"It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

"Over Brexit, she is going to have to talk more widely, listen to other parties."

He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

Media captionMacron: 'Of course the door is always open'

"There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

### 'Death row'

The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

Both the Conservatives and Labour have categorically ruled this option out.

Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

[In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },{
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

[The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

It comes as Mrs May tries to seal a deal with the DUP to govern.

Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

- [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
- [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
- [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

[According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

"It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

"Over Brexit, she is going to have to talk more widely, listen to other parties."

He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

Media captionMacron: 'Of course the door is always open'

"There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

### 'Death row'

The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

Both the Conservatives and Labour have categorically ruled this option out.

Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

[In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  }, {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

[The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

It comes as Mrs May tries to seal a deal with the DUP to govern.

Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

- [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
- [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
- [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

[According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

"It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

"Over Brexit, she is going to have to talk more widely, listen to other parties."

He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

Media captionMacron: 'Of course the door is always open'

"There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

### 'Death row'

The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

Both the Conservatives and Labour have categorically ruled this option out.

Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

[In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  },
  {
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: '# Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
    image: 'https://ichef-1.bbci.co.uk/news/950/cpsprodpb/14A7F/production/_96470648_mediaitem96469131.jpg',
    body: `Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said.

  [The Financial Times](https://www.ft.com/?edition=uk) reported the former PM saying there would be pressure for a "softer" exit from the EU after his party did not win an election majority.

  Speaking in Poland, he said his successor should "consult more widely" both inside Parliament and beyond.

  It comes as Mrs May tries to seal a deal with the DUP to govern.

  Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.

  Speaking in Paris after meeting French President Emmanuel Macron, Mrs May said there was a "unity of purpose" to get on with the process, reiterating that she wanted to maintain a "close relationship" with the EU.

  - [What are the Brexit options?](http://www.bbc.co.uk/news/uk-politics-37507129)
  - [Gove says Brexit 'consensus' needed](http://www.bbc.co.uk/news/election-2017-40259111)
  - [Reality Check: Has the election changed EU views of Brexit?](http://www.bbc.co.uk/news/election-2017-40250846)

  She is currently trying to negotiate the terms of a deal with the Democratic Unionists that will give her a majority in the Commons and enable her to pass a Queen's Speech - in which Brexit legislation will figure prominently.

  The Conservatives are having to seek a guarantee of support from the Northern Ireland party after failing to win enough seats to govern on their own.

  The two sides will continue what sources have described as "positive" talks on Wednesday, with the expectation that an agreement on a so-called "confidence and supply agreement" is imminent.

  Amid calls from opposition MPs for a rethink on Brexit, ministers have pointed out that the Conservative and Labour leaderships both agree that the UK needs to leave the single market to end free movement.

  But the PM is facing growing calls for other options to be put back on the agenda, including potentially remaining in the customs union, accepting a transitional role for the European Court of Justice, ruling out leaving without a deal and seeking some concessions on immigration.

  Media captionProminent Vote Leave campaigner Gisela Stuart tells BBC Radio 4's Today party leaders need to come together

  [According to the Financial Times,](https://www.ft.com/?edition=uk) Mr Cameron, who campaigned for a Remain vote and quit after losing the referendum, told a business conference in Lodz the Tories' failure to win a majority had changed the outlook.

  "It's going to be difficult, there's no doubt about that, but perhaps an opportunity to consult more widely with the other parties on how best we can achieve it," he said.

  "Over Brexit, she is going to have to talk more widely, listen to other parties."

  He said there would be pressure from Ruth Davidson's new group of Scottish Conservative MPs - 13 of whom were elected to Parliament - to revisit aspects of Brexit to place greater emphasis on economic considerations.

  Media captionMacron: 'Of course the door is always open'

  "There's no doubt that there is a new player on the stage. Scotland voted against Brexit. I think most of the Scottish Conservatives will want to see perhaps some changes with the policy going forward."

  Leading Brexiteers in the government have insisted that there will no U-turn on the single market and they remain hopeful of getting a deal that will secure the maximum market access.

  Steve Baker, a Eurosceptic backbencher who has been made a minister in the Brexit department, said his aim was as "softest exit consistent with actually leaving and controlling laws, money, borders and trade".

  ### 'Death row'

  The Times is reporting that Chancellor Philip Hammond is pushing for the UK to remain in the customs union to minimise the impact of withdrawal on trade.

  Labour MP Hilary Benn, who is seeking re-election as chair of the Brexit select committee, told BBC's Newsnight this was "the first and clearest sensible step to take" to support business.

  Speaking on Tuesday, French President Emmanuel Macron said the possibility of the UK remaining in the EU remained an option until Brexit negotiations have concluded.

  Both the Conservatives and Labour have categorically ruled this option out.

  Speaking on BBC Radio 4's Today programme, the former Chancellor Kenneth Clarke said that the French President was "wrong" and that the UK was now destined to leave the EU.

  Former UKIP leader Nigel Farage said the British people had expressed a clear view last year that uncontrolled immigration from the EU must come to an end.

  He tweeted: "Westminster politicians are positioning for a 'soft Brexit'. That would mean the continuation of open borders."

  As the PM fights to regain the initiative after her election setback, a former colleague of hers has warned the Conservatives are on "death row" and face "years of opposition" if they don't broaden their appeal.

  [In an article for the Sun](https://www.thesun.co.uk/news/3793420/conservative-party-must-reform-its-values-to-win-back-blue-collar-votes-or-face-years-in-the-wilderness/), Robert Halfon - who was sacked as a skills minister on Tuesday - said the party's manifesto had been "devoid of ideas" to help working families burdened by years of austerity.

  Among other ideas, he said the party should change its name to the Conservative Workers Party and develop a campaigning arm along the lines of Momentum or Vote Leave.`,
    categories: 'politics, election',
    createdBy: users[0],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[0]
    }]
  }]);
})
.then((posts) => {
  if(posts) console.log(`${posts.length} posts created!`);
})
.catch(err => console.log(err))
.finally(() => {
  mongoose.connection.close();
});
