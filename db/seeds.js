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
},{
  username: 'GaryOldman',
  email: 'garyoldman@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p320x320/17883748_10158677821145160_5309119492567650951_n.jpg?oh=e45fadd9fd139726ca5c9731643586a9&oe=59A2B098',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'AbbySmith',
  email: 'abbysmith5@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p480x480/18893064_320050355075011_7330023531832470711_n.jpg?oh=6642f3be305df23b888fedf3a1b760dc&oe=59CCA83E',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'Charlie555',
  email: 'chaz555@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/15727153_10153987765460836_7395759253761762348_n.jpg?oh=1e56657178932cbf819041b7ef44f0ee&oe=59E7E444',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'BeckyB',
  email: 'becky@gmail.com',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p64x64/10609487_10152259133751701_530836782283067901_n.jpg?oh=807fcdd4b085d125e2bf927a50535ddd&oe=59D3F9C3',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'HannahHill',
  email: 'hanhill@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-0/p206x206/16807247_10154562579411026_6180541764538192578_n.jpg?oh=a2ed9f122ee066b94c27edf970e9f544&oe=59E1CB7C',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'JordanJones',
  email: 'jj@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c137.0.320.320/p320x320/13769411_10154132180937911_1900006086378017073_n.jpg?oh=ba87faa4e2bbbb6ce3bc612dbc13ce8f&oe=59E0850A',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'StuartJones',
  email: 's.jones555@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c52.0.320.320/p320x320/14463308_10157751224540495_1859844391752152078_n.jpg?oh=3a472d66caff24394a410190454e1d6d&oe=59E255CF',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'CaptainMarvel',
  email: 'micky.golash@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c124.0.320.320/p320x320/15541189_10158255392375221_2744795801733635907_n.jpg?oh=a1830802ca755e43dca766b73b688ae8&oe=59E21157',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'BenBritton',
  email: 'benbrits@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1606905_10153790409865179_356802976_n.jpg?oh=dbf1a380f61033e8243f03842e84a66e&oe=59DDF38E',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'ilovecricket',
  email: 'manny@gmail.com',
  image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/558351_739368949407624_1606782207_n.png?oh=6939d85940ab6f990b738145f5ad5fe1&oe=59E12562',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  if(users) console.log(`${users.length} users created!`);
  return Post.create([{
    title: 'PM "must listen" to other parties over Brexit says Cameron',
    tagline: 'Theresa May will have to "listen to other parties" as she reviews her Brexit strategy in the wake of the election, David Cameron has said',
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
      createdBy: users[2]
    }]
  },{
    title: `'Sweeping' new powers for Scottish head teachers`,
    tagline: 'The reforms give sweeping new powers to head teachers',
    image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/0865/production/_96494120_dsc_9059.jpg',
    body: `The Scottish government has set out "sweeping new powers" for schools as part of a shake-up of education.

Education Secretary John Swinney said his reforms were aimed at "freeing our teachers to teach". The reforms will see head teachers take responsibility for closing the attainment gap, choosing school staff and deciding curriculum content. They also aim to give schools more direct control over funding, with a consultation on fair funding launched.

There was a mixed response from opposition parties, who welcomed parts of the plan, but said others did not go far enough. And local government organisation Cosla said the plan "erodes local democratic accountability".

- [Look back on the education statement on Holyrood Live](http://www.bbc.co.uk/news/live/uk-scotland-scotland-politics-40247558)

The government has been consulting on a review of the education system, amid concerns over an [attainment gap](http://www.bbc.co.uk/news/uk-scotland-38816114) between pupils from different backgrounds and declining [performance in international rankings](http://www.bbc.co.uk/news/uk-scotland-scotland-politics-38207729). Mr Swinney said the "simple plan" at the heart of his reforms was to "free our teachers to teach" and "put new powers in the hands of head teachers".

These new powers will be set out in a statutory charter for head teachers, and will include:

- responsibility for raising attainment and closing the poverty-related gap in schools
- choosing school staff and management structure
- deciding curriculum content, within a broad national framework
- direct control over more school funding, with a consultation on fair funding launched

However, Mr Swinney said he was "acutely conscious that schools also need support frameworks to function well", insisting councils would still have a "vital" role in education.

The reforms will establish "regional improvement collaboratives" to "pool and strengthen resources to support learning and teaching in schools". These will be led by a regional director, who will report to the chief inspector of education. The plans will also see a "significant change" to Education Scotland, which will have a "renewed focus on professional learning and leadership" along with "strengthened inspection and improvement functions".

Schools will also have access to a "home to school link worker" to support parents and families.

Image captionJohn Swinney set out the reforms in a statement at Holyrood

The education secretary said: "Improving the education and life chances of our children and young people is the defining mission of this government. While there are many strengths in Scottish education, recent Pisa and [literacy scores](http://www.bbc.co.uk/news/uk-scotland-scotland-politics-39856284)underline that we can, and we must, achieve more.

"We will reform the system so that the key decisions in a child's education are taken by schools.

"Schools will have the freedom to make their own decisions to improve learning and teaching. Everyone else within the education system will have a collective and shared responsibility to support schools.

"We will free teachers to teach. We will put new powers in the hands of head teachers. And we will all - government, councils and public bodies - support our schools."

Cosla, an umbrella group representing local authorities, said the government had "endeavoured to pull off a conjuring trick by pretending councils still have a role in the delivery of education".

A spokesman said: "We will embrace change which promotes better outcomes, but we will resist any change which does not.

"We are clear that what has been announced today erodes local democratic accountability and most certainly will not close the attainment gap."

Responding, Scottish Conservative education spokeswoman Liz Smith welcomed the steps to empower head teachers, but said Mr Swinney's reforms did not go far enough.

She said they were "half-baked and only pay lip service to real devolution", calling them "not enough to deal with the root cause of the problems faced". Labour's Iain Gray meanwhile said the first reform needed was to have more teachers, properly supported and resourced.

He welcomed the fact Mr Swinney had decided against having a centralised national funding solution, but questioned whether the regional organisation board plans would just add another layer of bureaucracy. Mr Swinney said a formal procurement process for new routes into teaching would begin shortly, although he stressed that any new route would need to meet General Teaching Council for Scotland tests "to maintain credibility and academic rigour".

GTCS Chief Executive Kenneth Muir welcomed the announcement, saying the body was "committed to offering new, flexible routes into teaching" while maintaining that it was "imperative that new teachers are properly qualified and registered".

Image captionA central aim of the reforms is to improve the attainment gap

Green MSP Ross Greer said the "huge changes simply aren't what teachers, pupils and parents have been asking for", criticising the regional organisational bodies in particular.

He said: "The government's own analysis of the consultation even says there was a 'lack of appetite' for these unaccountable regional bodies."

And Lib Dem Tavish Scott singled out the fact the government was not separating the inspection and curriculum functions of Education Scotland. He said: "Pupils are let down when the Scottish government is allowed to mark its own homework in this way. Combined with regional boards that shift control towards ministers in Edinburgh, these proposals risk continuing the failed, top down solutions of the past."

The largest teachers' union, the EIS, said in its response to the government's review that the main challenges facing schools were related to funding, resources and staffing.

General secretary Larry Flanagan said: "While it is early in the process, this Review provides an opportunity for a more constructive and consensual approach to education to be re-established which would be a positive step for schools, teachers and pupils.

"It is by schools, local authorities and politicians of all parties, at local and national level, working constructively together, that we can deliver enhancements to our comprehensive education system to ensure it continues to meet the needs of Scotland's young people long into the future."`,
    categories: 'politics',
    createdBy: users[0],
    comments: [{
      content: `I respect your remarks, and in part agree with your observations, I would observe that the SNP do not have a monopoly on (not) dealing with the issues they were elected to deal with (or which they stood for election on). Perhaps Theresa May should not have been so naive or greedy as to have counted on votes for her single issue "hard Brexit" either? touche.`,
      createdBy: users[3]
    },{
      content: `SNP freeze C Tax restricting councils ability to assist schools, then raise C Tax bands and give the £120M raised to Heads and repeat the £120M figure over and over to take credit! Our schools "share" of £120m is £2K, a joke when teacher numbers are way down and class sizes are high or growing. SNP now have the cheek to try to abrogate responsibility for closing attainment gap to Heads!`,
      createdBy: users[4]
    },{
      content: `Schools doing badly under government control - SNP bad. Schools doing badly when self-governed - SNP bad. Roman Catholic schools in Scotland allowed to exist - SNP bad. Considering abolishing RC schools - SNP bad`,
      createdBy: users[8]
    }]
  },{
    title: 'Jeremy Corbyn demands to know contents of Tory-DUP deal',
    tagline: 'Jeremy Corbyn is demanding details of the deal the Tories are striking with the DUP',
    image: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/DB40/production/_96482165_fostermay.jpg',
    body: `Jeremy Corbyn is demanding details of the deal the Tories are striking with the DUP to form a minority government, calling it a "nonsense situation".

The Labour leader also called for a date for the Queen's Speech, saying it "was the very least we need to know".

He said Labour was "united" and "ready" to form an alternative government.

DUP sources have told the BBC an announcement on a deal with the Conservatives has been delayed because of the Grenfell Tower blaze.

They said the two parties were now finalising the "terms and conditions" of an agreement after Mrs May and DUP leader Arlene Foster met on Tuesday.

But they added that the London tower block fire made an announcement on Wednesday "inappropriate" and diary commitments meant a final deal could be delayed until next week.

- [Election Live - rolling text and video updates](http://www.bbc.co.uk/news/live/election-2017-40231623)
- [Quick guide to what's going on](http://www.bbc.co.uk/news/election-2017-40245514)
- [Who are the DUP's 10 MPs?](http://www.bbc.co.uk/news/election-2017-40220397)

If a deal was to be delayed it would mean the Queen's Speech, which had originally been planned for next Monday, could be delayed by at least a week.

It could also delay the start of Brexit talks.

The Conservatives are having to rely on the support of 10 DUP MPs after they fell eight seats short of winning an overall majority at the general election.

It means that Mrs May will remain as prime minister and the DUP MPs will be central to the survival of a Conservative Party administration.

Mrs May is to meet the leaders of Northern Ireland's other main political parties on Thursday in a bid to allay fears a deal with the Democratic Unionists will undermine the peace process.

Image captionArlene Foster and Theresa May have been holding talks

Sinn Fein, the SDLP and Alliance have all said Northern Ireland Secretary James Brokenshire cannot chair the ongoing process to restore power-sharing at Stormont due to their perception he has a conflict of interest.

Sinn Fein's Stormont leader Michelle O'Neill said: "I will be making it very clear that any deal between the Tories and the DUP cannot be allowed to undermine the Good Friday and subsequent agreements."

In addition to Sinn Fein, whose seven MPs will not take up their seats at Westminster, Mrs May will meet representatives from three Northern Irish parties who did not win any seats at the general election - the Ulster Unionists, the SDLP and Alliance Party - in separate meetings at Downing Street.

### 'Clear programme'

Labour has joined former Conservative Prime Minister Sir John Major in expressing concern that deal with the DUP will undermined the "rigorous impartiality" the UK government is meant to demonstrate under the terms of the 1998 Good Friday Agreement.

Mr Corbyn is also calling on the government to end the "nonsense situation" of the public not knowing what kind of deal was on the table. He said: "We want to know what is in the deal they are offering to the DUP and we want to know when it is going to be put before Parliament. We still haven't been given a date for the Queen's Speech."

He said Parliament "could not function until it is formally opened and I think the very least we need to know is when that is going to happen". He added that Labour was "ready as a strong, united party with a clear programme of what we want to offer to the British people to improve their lives and end this miserable period of austerity".

* * *

### What's in the deal?

![Arlene Foster and the 10 MPs Theresa May hopes will keep them in power](https://ichef.bbci.co.uk/news/624/cpsprodpb/C0F4/production/_96469394_dup.jpg)Image copyrightREUTERS

Image captionArlene Foster and the 10 MPs Theresa May hopes will keep them in power

### By BBC Northern Ireland political editor Mark Devenport

The DUP have been playing their cards close to their chest, but we know the areas they're talking about because of a DUP [plan drawn up in 2015 in anticipation of a hung Parliament](http://www.mydup.com/publications/view/the-northern-ireland-plan). Things have moved on a bit since then with Brexit, but we do know they're looking at trying to lower the cost to the Northern Ireland executive of any move on corporation tax.

They've been of the view that leaving the EU should lessen some of the stipulations in relation to state aid that were being applied by the Treasury to Northern Ireland, and that might take down the bill that the Treasury would put on the executive if corporation tax was lowered.

We know other matters, such as cutting air passenger duty and increased infrastructure spending, have been discussed, but we haven't got any sense of the exact details of the deal.

I suspect it will be top loaded with economic rather than political matters. Some political issues, such as altering the definition of a Troubles victim or doing away with allowances for MPs who don't take up their seats, might be included.

Other legacy matters, such as protecting former soldiers or police officers from prosecution, may feature at a later stage. The DUP will offer support for key votes, such as backing the Queen's Speech and the Budget and opposing any votes of no confidence. The DUP campaigned for Brexit but is also conscious that 56% of people in Northern Ireland voted to remain in the EU.

They are thought to be advocating a Brexit that does not disrupt the "frictionless border" with the Republic of Ireland.

They are also opposed to Conservative polices such as means-testing the winter fuel allowance and have campaigned for a higher National Living Wage and to restore the spare room subsidy. Prime Minister Theresa May said on Tuesday that talks with the DUP had been productive and that Brexit negotiations would begin as planned next week.

"I think there is a unity of purpose among people in the United Kingdom," Mrs May said, following a meeting with French President Emmanuel Macron in Paris.

![Theresa May and Emmanuel Macron](https://ichef-1.bbci.co.uk/news/624/cpsprodpb/C696/production/_96483805_e17942e5-8468-4d34-85ee-9b1df1fbdb92.jpg)

On Tuesday, ex-Conservative Prime Minister Sir John Major said he was "dubious" about the idea of a deal and its potential impact on the peace process.

Media captionI am "concerned" about a deal with the DUP, says former prime minister Sir John Major

Sir John told BBC Radio 4's World at One programme there was a danger the government would no longer be seen as an "impartial honest broker" in restoring the power-sharing arrangements and upholding Northern Ireland institutions.

Asked about Sir John's comments, Mrs May said she was "absolutely steadfast" in her support for the 1998 Good Friday agreement - which created the Northern Ireland Assembly - and efforts to revive the power-sharing executive.`,
    categories: 'election',
    createdBy: users[3],
    comments: [{
      content: 'Downing Street has so far rebuffed calls for major changes to its Brexit blueprint and ruled out the prospect of cross-party talks ahead of the start of official negotiations with the EU next week.',
      createdBy: users[5]
    },{
      content: `What's cynical is Labour bought the student vote on promises they knew they'd never have to keep. They knew they were never going to win the general election and therefore knew they could promise what the young and gullible wanted to hear.`,
      createdBy: users[3]
    },{
      content: `I don't doubt for one minute that Corbyn's "friends" within the IRA have instructed him to find out as much as he can about any deal the Tory's plan so that they can do their best to sabotage it. Of course, being a sympathiser, he do as instructed. Its nothing to do with the Labour party, they are not in power, they are of no consequence in these negotiations.`,
      createdBy: users[9]
    },{
      content: `Clearly Corbin has never changed his spots. An out and out trotskyite... thinks it alright to meddle in anything because they know best...... or in other words Stalin Russia or worse still the basket case that is Venezuela. When will the follows actually open their eyes and see through all his unattainable promises and interference to create his non existent world. But gullible people exist.`,
      createdBy: users[6]
    },{
      content: 'Wind it in Corbyn your presidential pose is fooling no one. You are an absolute disgrace with your PR posturing.',
      createdBy: users[1]
    }]
  },{
    title: `Facebook reveals measures to remove terrorist content`,
    tagline: 'Facebook has been criticised for not doing enough to remove terror-related content',
    image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/0865/production/_96494120_dsc_9059.jpg',
    body: `[Facebook has announced details of steps](https://newsroom.fb.com/news/2017/06/how-we-counter-terrorism/) it is taking to remove terrorist-related content.

The move comes after growing pressure from governments for technology companies to do more to take down material such as terrorist propaganda.

In a series of blog posts by senior figures and an interview with the BBC, Facebook says it wants to be more open about the work it is doing.

The company told the BBC it was using artificial intelligence to spot images, videos and text related to terrorism as well as clusters of fake accounts.

"We want to find terrorist content immediately, before people in our community have seen it," it said.

### No safe space

The ability of so-called Islamic State to use technology to radicalise and recruit people has raised major questions for the large technology companies.

They have been criticised for running platforms used to spread extremist ideology and inspire people to carry out acts of violence.

Governments, and the UK in particular, have been pushing for more action in recent months, and across Europe talk has been moving towards legislation or regulation.

![A smartphone](https://ichef.bbci.co.uk/news/624/cpsprodpb/1017B/production/_95851956_handsonphonegetty.jpg)

Image captionMPs have said the government should consider making sites pay to help police what people post

Earlier this week in Paris, the British prime minister and the president of France launched a joint campaign to ensure the internet could not be used as a safe space for terrorists and criminals.

Among the issues being looked at, they said, was creating a new legal liability for companies if they failed to remove certain content, which could include fines.

Facebook says it is committed to finding new ways to find and remove material - and now wants to do more than talk about it.

"We want to be very open with our community about what we're trying to do to make sure that Facebook is a really hostile environment for terror groups," Monika Bickert, director of global policy management at Facebook, told the BBC.

One criticism British security officials make is of the extent to which companies rely on others to report extremist content rather than acting proactively themselves.

Facebook has previously announced it is adding 3,000 employees to review content flagged by users.

But it also says that already more than half of the accounts that it removes for supporting terrorism are ones that it finds itself.

It says it is also now using new technology to improve its proactive work.

"We know we can do better at using technology - and specifically artificial intelligence - to stop the spread of terrorist content on Facebook," the company says.

![Emmanuel Macron and Theresa May](https://ichef-1.bbci.co.uk/news/624/cpsprodpb/11E40/production/_96508237_040041184-1.jpg)Image copyrightAFP

Image captionFrance and the UK want to ensure terrorists have no safe spaces online

### Automatic analysis

One aspect of the novel technology it is talking about for the first time is image matching.

If someone tries to upload a terrorist photo or video, the systems look to see if this matches previous known extremist content to stop it going up in the first place.

A second area is experimenting with AI to understand text that might be advocating terrorism.

This is analysing text previously removed for praising or supporting a group such as IS and trying to work out text-based signals that such content may be terrorist propaganda.

That analysis goes into an algorithm learning how to detect similar posts.

Machine learning should mean that this process will improve over time.

The company says it is also using algorithms to detect "clusters" of accounts or images relating to support for terrorism.

This will involve looking for signals such as whether an account is friends with a high number of accounts that have been disabled for supporting terrorism.

The company also says it is working on ways to keep pace with "repeat offenders" who create accounts just to post terrorist material and look for ways of circumventing existing systems and controls.

"Our technology is going to continue to evolve just as we see the terror threat continue to evolve online," Ms Bickert told the BBC.

"Our solutions have to be very dynamic."

One of the major challenges in automating the process is the risk of taking down material relating to terrorism but not actually supporting it - such as news articles referring to an IS propaganda video that might feature its text or images.

Whereas any image of child sexual abuse is illegal and can be taken down, an image relating to terrorism - such as an IS member waving a flag - can be used to glorify an act in one context or be used as part of a counter-extremism campaign in another.

"Context is everything," Ms Bickert said.

![Mark Zuckerberg](https://ichef-1.bbci.co.uk/news/624/cpsprodpb/F88C/production/_94682636_zuckerberg.jpg)Image copyrightAP

Image captionIn February, Mark Zuckerberg said Facebook was looking to AI to help it police its site

### Caught out

The company says its algorithms are not yet as good as people at understanding the context that helps distinguish between the different categories.

Facebook says it has grown its team of specialists so that it now has 150 people working on counter-terrorism specifically, including academic experts on counterterrorism, former prosecutors, former law enforcement agents and analysts, and engineers.

Ms Bickert said: "We have to have people who can review it.

"I like to think of it as using the computers to do what computers do well and using people to do what people do well."

Challenges remain. A few minutes after creating an account in a made-up name, I was able to find complete versions of IS propaganda videos that included the beheading of Western hostages.

Critics argue that the challenges may be enormous in a site with two billion users but the company makes billions of dollars from the content on its site and could devote more resources - and more of its best engineers - to dealing with the issue.

The company says it has begun focusing its "most cutting edge techniques" to combat the problem and clearly now believes it needs to be seen to be acting.`,
    categories: 'tech',
    createdBy: users[0],
    comments: [{
      content: `This is a really important issue - it's important that it is now getting mainstream attention!!`,
      createdBy: users[9]
    },{
      content: `Facebook are taking over the world - we're DOOMED!!!`,
      createdBy: users[7]
    }]
  },{
    title: `Microsoft AI plays a perfect game of Ms Pac-Man`,
    tagline: 'Ms Pac-Man has been difficult for AI to crack to date',
    image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/B54A/production/_96501464_pacman2.gif',
    body: `One of Microsoft's artificial intelligence systems has conquered the 1980s video game Ms. Pac-Man.

The team, from Microsoft-owned Canadian AI firm Maluuba, achieved the perfect score of 999,990. The software giant said that the method deployed in the game could also be used for teaching AI agents to perform complex tasks to help humans. However, Prof Nello Cristianini, a computer scientist from University of Bristol, sounded a note of caution.

"It is exciting that so much progress is happening today in AI, however we should remember that historically AI has not always been able to replicate results in games when transferring methods to real world problems. This should be kept in mind whether we talk about Jeopardy, Chess, Go or Ms. Pac-Man."

Google's DeepMind AI, [which has beaten the complex game of Go,](http://www.bbc.co.uk/news/technology-40042581) is widely seen as leading the pack on AI research.

### 'Senior manager'

Doina Precup, an associate professor of computer science at McGill University in Montreal, said Microsoft's win was a significant achievement.

"Lots of firms experimenting with AI test their system using video games, but Ms. Pac-Man has been among the most difficult to crack," she said.

[In a blogpost,](https://blogs.microsoft.com/next/2017/06/14/divide-conquer-microsoft-researchers-used-ai-master-ms-pac-man/#sm.00ie0kr2127lemc11cl1nqpuv81qz) Microsoft explained that the team used an AI technique known as reinforcement learning to master the Atari 2600 version of the game. To achieve the high score, the team divided the problem into small pieces which were distributed among AI agents. The system used more than 150 agents, each of which worked in parallel with other agents to master the game. Some were rewarded for successfully finding one specific pellet, while others were tasked with staying out of the way of ghosts.

Then the researchers created a "senior manager" agent which took suggestions from all the others and used them to decide where to move Ms. Pac-Man.

![Pac-Man ghosts](https://ichef-1.bbci.co.uk/news/624/cpsprodpb/17AF2/production/_96501079_pac-man.gif)Image copyright

Image captionSome AI agents concentrated on avoiding ghosts

Its decision-making was complex so, for example, if 100 agents wanted to go right because that was the best path to their pellet, but three wanted to go left because there was a deadly ghost on the right, it would give more weight to the ones who had noticed the ghost. Harm Van Seijen, a research manager with Maluuba, said the best results were achieved when each agent acted very egotistically while the top agent took into account the best move for everyone.

"There's this nice interplay between how they have to, on the one hand, co-operate based on the preferences of all the agents, but at the same time each agent cares only about one particular problem," he said.

He has[ published a paper](https://arxiv.org/abs/1706.04208) about the technique - known as Hybrid Reward Architecture - which has yet to be peer-reviewed.

### 'Ka-ching'

Some might question why a cutting-edge technology such as AI is training itself on games designed in the 1980s.

Rahul Mehrotra, a program manager at Maluuba, explained that it is because such games are very complex and said: "A lot of companies working on AI use games to build intelligent algorithms because there's a lot of human-like intelligence capabilities that you need to beat the games." Steve Golson, one of the co-creators of the arcade version of the game, said in the blog that Ms. Pac-Man had been designed to be simple to play but nearly impossible to conquer, in order for people to put more money in the machines.

"You want [them to think] 'Oh, oh, I almost got it! I'm going to try again'. Ka-ching! Another quarter."

The reinforcement learning technique used by the team is increasingly being favoured by AI researchers. The other main method of teaching AI is via supervised learning, in which systems get better at doing something as they are fed more examples of good behaviour.

### Mount Everest

With reinforcement learning, an agent gets both positive and negative responses and learns through trial and error to maximise the positive ones. Increasingly, reinforcement learning is being seen as a way to create AI that can make more autonomous decisions and perform more complex tasks. Computer scientist at Sheffield University, Prof Noel Sharkey said the fact AI had conquered another human game was "excellent" but echoed Prof Cristianini's point.

"The claim that this is another step towards a general AI is like climbing mount Everest and claiming that this is another step towards travelling to distant galaxies."

Microsoft has had past problems when it comes to AI. [A chatbot dubbed Tay](http://www.bbc.co.uk/news/technology-35890188) that was released on Twitter in 2016 was hastily removed after it was taught to swear and make racist comments.`,
    categories: 'tech',
    createdBy: users[3],
    comments: [{
      content: `Microsoft are declining, no matter how Pac-Man games they beat`,
      createdBy: users[2]
    }]
  },{
    title: `Champions Trophy 2017: England's bad day comes at worst possible time`,
    tagline: 'The Champions Trophy semi-final defeat by Pakistan, an eight-wicket hammering, was one of those bad days',
    image: 'http://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/64F9/production/_96494852_morganpa.jpg',
    body: `For all of the good limited-overs cricket that England have played over the past two years, we know they are capable of some pretty bad days.

It was just over two weeks ago that they found themselves 20-6 against South Africa. The odd collapse must be expected in this era of ultra-aggressive batting.

The Champions Trophy semi-final defeat by Pakistan, an eight-wicket hammering, was one of those bad days. England simply did not know what was a good total on a used Cardiff surface. As a result, they chased an impossible dream and fell well short. The problems for Eoin Morgan's men began the day before this match. They were clearly concerned about the pitch and talked about it a lot on Tuesday.

Each venue is only permitted to use three different pitches for the tournament, so that is why an old one was used for the semi-final. You wonder why that rule is in place, but that is not to make an excuse for England. They allowed it to get into their minds.

- [Pakistan shock England to reach final](http://www.bbc.co.uk/sport/cricket/40278085)
- [Pitch brought Pakistan 'closer to home' - Morgan](http://www.bbc.co.uk/sport/cricket/40281393)
- [India wary of Bangladesh threat in semi-final](http://www.bbc.co.uk/sport/cricket/40279965)

We were all surprised when Pakistan choose to bowl first - normal cricketing logic says you bat first in these circumstances, knowing that surface will get slower and harder to bat on.

However, the counter to that is fielding first means you don't have to worry about calculating what a good score might be. You simply have to chase what the opposition make. That is exactly what Pakistan did.

England were well placed at 128-2, but batted themselves into a hole.

Morgan maybe felt they were behind and played a rash shot; Ben Stokes wasn't able to play with freedom because wickets were falling around him. The hosts were completely squeezed by brilliant Pakistan bowling and fielding.

When England came out to field, they knew they had no other option than to bowl Pakistan out. They pushed and pushed, and that can lead to some loose bowling. In those situations, well-laid plans can quickly go out of the window, which is part of the reason why the game sped away.

#### Do England have a problem in crunch games?

Eoin Morgan has transformed England's one-day fortunes. And so England go out of a tournament they looked well placed to win. They had all bases covered: powerful batting and a bowling attack full of variety and wicket-takers - a team of match-winners. They will be bitterly disappointed. Plenty of times before, England teams have had chances to end the hunt for a global 50-over trophy, a search that goes back to 1975. On this occasion, like the near-misses that have gone before, England failed to click when it mattered most.

Recently, England lost the 2013 Champions Trophy final and the 2016 World T20 final, two games they had the chance to win. Now this. Are they developing a problem in crunch contests? I don't think so. Indeed, it is an achievement for them to be getting to these knockout matches, especially after the shambolic World Cup campaign two years ago.

They will now set their sights on the 2019 World Cup, where once again they will be the hosts.

Two years out, they look in good shape to do well in that tournament. Most of this squad will still be around and the England hierarchy will want Morgan to remain in the job, even if Joe Root is about to take over as Test captain. Some skippers want to be in charge of the whole lot, but Morgan has done a good job and is batting well.

#### Electric Pakistan deserve their praise

England will dissect this defeat, but huge credit must go to Pakistan, a team transformed from the one humbled by India in their first game. Just as the nature of one-day cricket can see a very good side like England fall flat, so too can a team rise from nowhere to potential champions. Their bowling was terrific, led by the pace of Hasan Ali, who is fully deserving of his place as the tournament's leading wicket-taker.

He is in your face and aggressive, backed up by the left-armers of Junaid Khan and the precocious leg-spin of 18-year-old Shadab Khan. Another left-armer, Rumman Raes, came in and performed excellently on his ODI debut, perhaps helped by the fact that England had never seen him before. Pakistan are so mercurial, you often look to their fielding as a sign of where the team is at. In Cardiff, after some tough drops, they were electric, most notably Fakhar Zaman's catch to dismiss Moeen Ali - watch the video above - and substitute Ahmed Shehzad's run-out of Adil Rashid.

And, with the bat, the attacked the new ball, because that was the best time to look to score runs. In the end, they romped to victory. They have picked themselves up after that loss to India, upset world number ones South Africa, eked past Sri Lanka in order to make the semi-finals and have now dumped out the hosts and favourites. They will go to Sunday's final full of confidence.

Most would probably like that final to be against India, but a clash against Bangladesh comes with a similar amount of historical meaning. Pakistan matches against either India or Bangladesh do not come too often outside of these events. It's disappointing that England will not be in that final, but the occasion will not be harmed by their absence.`,
    categories: 'sport',
    createdBy: users[3],
    comments: [{
      content: `England always bottle it at the crucial moments! They will never win anything ... I am dreading the ashes.`,
      createdBy: users[5]
    },{
      content: `Think that was a hammering? If they'd tried to play India's spinners, we would have been seriously embarrassed. India will win it.`,
      createdBy: users[7]
    }]
  },{
    title: `Jordan Pickford: Everton confirm £25m, rising to £30m, deal with Sunderland`,
    tagline: 'Jordan Pickford impressed for Sunderland despite the club finishing bottom of the Premier League',
    image: 'http://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/18240/production/_96508889_pickford-main.jpg',
    body: `Jordan Pickford has become the most expensive British keeper in history after Everton paid £25m - rising to what would be a club record £30m - to sign him from Sunderland.

The 23-year-old, who is on duty with England Under-21s, has signed a five-year contract at Goodison Park.

"It is a great club, a massive club and it is a great opportunity," [he said.](http://www.evertonfc.com/news/2017/06/15/pickford-signs)

Pickford made 29 Premier League appearances last season but could not prevent Sunderland being relegated.

He joined the Black Cats' academy in 2010 and had spells on loan at Darlington, Alfreton Town, Burton Albion, Carlisle United, Bradford City and Preston.

Pickford made his first-team debut for Sunderland in a 3-1 FA Cup defeat by Arsenal in January 2016.

- ['Everton's £30m Pickford deal is not a lot of money'](http://www.bbc.co.uk/sport/football/40264952)

He added: "Last season was my first in the Premier League so to get this opportunity with Everton now, to be able to go forward with my career and show everyone what I can do with Everton is unbelievable.

"This is an exciting time for the club and for me, too, with the ambition being shown. I just want to be the best I can be to help."

Manager Ronald Koeman added: "Jordan is a very talented young professional who also has a real hunger for success, and that's important for us as we now look to make further progress in the seasons ahead."

The deal is an initial £25m transfer fee with £5m of potential add-ons, making him the third most expensive keeper ever.

Gianluigi Buffon's move from Parma to Juventus in 2001 was reported to be worth 53m euros, or £32.6m at the time, while at current exchange rates, [Ederson's 40m euros transfer to Manchester City last week](http://www.bbc.co.uk/sport/football/40080163) is equivalent to £35m, which is a world record in sterling, but not euros.

Pickford's fee smashes the previous record for a British goalkeeper, when Koeman - then Southampton boss - paid [£10m to sign Fraser Forster](http://www.bbc.co.uk/sport/football/28729222) from Celtic in 2014.

Despite being 23, Pickford is eligible to play for the Under-21s as rules allow a select number of over-aged players in the squad.`,
    categories: 'sport',
    createdBy: users[0],
    comments: [{
      content: `Farcical. A keeper who is special (for PNE GeoffD) does not make him any good against the best players in the English leagues. 25m for a goalkeeper is ridiculous. They are shot stoppers when their defense cock things up. Spend your money on havind a strong defense. The keeper is the last line of this and no keeper warrants that sort of price tag.`,
      createdBy: users[1]
    },{
      content: `I would rather have Heaton tbh - half the price, incredible form, has leadership qualities (captain for Burnley) and he still has a few years in him as most goalkeepers play untill they are very old (Buffon, Cassillas, Cech, etc) Hes not on the same level as these players but I would honestly prefer him to Pickford as good as Pickford looks. Best of luck to him and Everton anyway.`,
      createdBy: users[3]
    },{
      content: `By the time this transfer window closes this deal will not even be in the top ten price range,as an Everton fan I have been crying out for years for investment in players infrastructure etc,but we are in danger of losing our identity by pushing out local talent like Barkley in our pursuit to become a "big" club.`,
      createdBy: users[6]
    },{
      content: `I remember Alan Sugar at Tottenham declining the chance to bid for Shearer on the grounds that (as he claimed) even winning the CL wouldn't justify an outlay of £15m, and of course, that "the bubble will burst". All these years later we're still waiting for the pop and Spurs are still waiting for the title that Shearer helped Blackburn gain all those years ago!`,
      createdBy: users[8]
    },{
      content: `that's another young English player added to the Everton squad along with half the England u20's, Everton doing more for English football than the rest of the prem, who just over spend on some unknown young french or spanish player that never plays and gets loaned out, well done Everton, keep it going`,
      createdBy: users[7]
    }]
  },{
    title: `EU mobile roaming charges scrapped`,
    tagline: 'A European Union (EU) law to abolish roaming charges for people using mobile phones abroad comes into force today',
    image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/11A12/production/_93901227_phoneonbeachbbc.jpg',
    body: `A European Union (EU) law to abolish roaming charges for people using mobile phones abroad comes into force today.

The new rules mean that citizens travelling within the EU will be able to call, text and browse the internet on mobile devices at the same price they pay at home.

The European Commission said the end of roaming charges was one of the [greatest successes of the EU](http://europa.eu/rapid/press-release_STATEMENT-17-1590_en.htm).

But a UK consumer group warned phone users could face "unexpected charges". Until now roaming, or connection, charges have been added to the cost of calls, texts and internet browsing when consumers from one EU country travelled to another and connected to a mobile network there.

In some cases, mobile users have faced bills of hundreds of pounds if, for example, they have downloaded a film. In a statement the European Commission said: "Each time a European citizen crossed an EU border, be it for holidays, work, studies or just for a day, they had to worry about using their mobile phones and a high phone bill from the roaming charges when they came home."

It had been working hard over the last ten years to fix this "market failure", it said.

"Eliminating roaming charges is one of the greatest and most tangible successes of the EU," the Commission added.

The new legislation means travellers can use their regular data allowance anywhere in the EU.

But consumer organisation [Which? warned](http://www.bbc.co.uk/news/business-40248007) that exceeding data allowances would still be chargeable. Exceeding agreed minutes, texts and data would still be charged in the EU as it would in the UK, with providers charging different rates, said Which?

In addition, different providers included different countries in their roaming territories, such as the Channel Islands and Switzerland. Which? said mobile users should check the detail of their tariffs with their phone providers to avoid being caught out by surprise charges.

* * *

### Analysis: Rory Cellan-Jones, technology correspondent

Just a few years ago, European mobile phone users travelling across the EU could face a nasty bill when they got home.

Over the ten year period that the European Commission has been bearing down on roaming charges, that risk has receded, and from today customers can call, text or download data on the same basis as they do at home. But the Roam like at Home legislation only applies to travellers - calling another EU country from home will still incur extra charges.

The mobile phone industry battled long and hard with Commission over the details of the plan to end roaming, warning it could mean higher prices at home. The Commission saw it as a vital part of creating a digital single market - but also as one of the few examples of an EU policy which would resonate with the public.

* * *

### Brexit question mark

It would be up to a future UK government to decide whether to have the EU price restrictions on roaming or not after the UK leaves the EU. They are contained within a European regulation, not a directive, so they have not been incorporated into UK law.`,
    categories: 'tech',
    createdBy: users[3],
    comments: [{
      content: `I remember crossing Ireland a few years after they joined. Each small farmstead was in the process of moving from a stone hovel to a new-build bungalow. All down to access to EU single market, grants and funds. I know I paid for it, but it was fantastic`,
      createdBy: users[10]
    },{
      content: `A bit late answering I know. I am outing myself now as an expat in the EU (of 33 years). You say Romania is years behind in its development. The idea of their membership was to help them get up to date. As they get more affluent, they will contribute more. There is a certain solidarity involved. For me, Schengen and the Euro are the most practical advantages of the EU.`,
      createdBy: users[4]
    },{
      content: `Are we? The Tories disagree with themselves, Farage thought we should be in Norway - pay in, no say - Gove thought we should be out, out and export to India. FTSE250 now falling as consumer confidence finally dries up. Now should businesses invest or not? Minor bump or train wreck?`,
      createdBy: users[2]
    },{
      content: `Since U.K. likely to stay in the single market, this benefit could carry on after 2019`,
      createdBy: users[9]
    },{
      content: `Good to see the mantra Vodafone don't pay tax , yes they do but lets not let the facts get in the way of not understanding business and taxes. Read this article ... you may understand it, as both HMRC and Vodafone have articulated this ad nauseum.`,
      createdBy: users[10]
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
