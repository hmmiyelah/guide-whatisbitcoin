import { NativeModules } from 'react-native'

global.mainColor = '#1b2229'
global.PROTOCOL = 'http'
//global.HOST = "dnsoft.loca.lt";
global.HOST = '192.168.43.182'
global.API_URL = PROTOCOL + '://' + HOST + '/pubg'
global.USERDATA_URL = PROTOCOL + '://' + HOST + '/pubg/userdata/'
global.CONTENTS = {
  newbie: [
    {
      name: 'What is Bitcoin',
      description: 'Simply Explained (2 Minutes)',
      image: 'image1',
      contents: [
        {
          content:
            'One of my fellow crypto maniaks said this:\n\n“When you decide to learn about Bitcoin, you are making a choice to expose yourself to a different way of thinking.”\n\nThat’s true. Bitcoin is different from anything else that has been created in the past.\n\nIt’s new.\n\nBitcoin (BTC) is a digital currency, or cryptocurrency, which is used by millions of people around the world and this is my Bitcoin guide for you. \n\nIt’s built on cryptography, and its main feature is its decentralization.\n\nFor the first time, you can store value and transfer value without any 3rd party acting as an intermediary.\n\n3rd parties like the central bank, financial institutions, etc.\n\nYou only rely on technology and math. And you have complete autonomy over your money.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            'This comes with many benefits. To name a few:\n\n-You aren’t reliant on banks anymore to store/transfer value.\n-You can do anything you want with your money, nobody will have a say about it.\n-You can send value anywhere with almost no fee, instantly. \n-Your government won’t print it at any time without notice, deflating its value.\n\nThere are drawbacks as well:\n\n-Nobody’s here to protect you if you send BTC to the wrong person. \n-Bitcoin’s value is mostly based on supply and demand, which makes it more volatile than conventional fiat money. \n\nTo sum it up, Bitcoin has all the properties needed to disrupt the economy. But will it?',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'The History of Bitcoin',
      description: '- Key Dates',
      image: 'image2',
      contents: [
        {
          content:
            'Rome wasn’t built in a day -- and neither was Bitcoin.\n\nHere’s a quick history lesson about the king of cryptocurrency.\n\n1. 2005 - Before Bitcoin...Bitgold was proposed. \n2. 2008 - Bitcoin’s Whitepaper is Published\n3. 2009 - Bitcoin is Launched\n4. 2010 - 10,000 Bitcoins buy 2 Pizzas.\n5. 2011 - U.S. Dollar Parity\n6. 2013 - The First Bitcoin Bubble. Bitcoin’s price reached $1,213\n7. 2014 - Mt. Gox suddenly got shut down and China banned Bitcoin\n8. 2015 - Ethereum is created and competes with Bitcoin.\n9. 2017 - Bitcoin’s Biggest Bubble: Bitcoin’s price reached $19,787.\n10. 2018 - Bitcoin’s Low Point. Bitcoin’s price reached $3,300.\n11. 2020 - CoronaVirus vs. Bitcoin. Bitcoin’s price lost ~ 60% for a few hours.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/bitcoin-timeline-compressor.png',
          poster: 'image2',
        },
      ],
    },
    {
      name: 'What Does a Bitcoin Look Like,',
      description: 'Anyway?',
      image: 'image3',
      contents: [
        {
          content:
            'No question is too silly for this Bitcoin beginners guide. \n\nSome people, after asking “what is Bitcoin?” then ask the question “is it an actual, physical coin?”\n\nThe question is no laughing matter. \n\nA man in New York conned people out of $1.1 million dollars. \n\nHe took Chuck E. Cheese tokens (physical coins from a children’s arcade), wrote the letter B on them, and sold them to people on the streets.\n\nThe answer is: No, Bitcoins are not physical.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/hardware_wallets-compressor.jpg',
          poster: 'image3',
        },
        {
          content:
            'Bitcoin lives completely online.\n\nThat said, you can store your Bitcoins and other cryptocurrencies offline (where it’s safer).\n\nThe safest way to do that is by purchasing a hardware wallet.\n\nThese wallets hold Bitcoin and many other cryptocurrencies. \n\nOnce you learn how to use them properly and store them safely, they are as close to a physical Bitcoin as you’ll ever get. ',
          image: null,
          poster: 'image3',
        },
      ],
    },
    {
      name: '12 Features',
      description: 'Giving Bitcoin Value',
      image: 'image1',
      contents: [
        {
          content:
            'There are so many factors that give Bitcoin value. \n\nSome are technical and some are more about the market. \n\nLet’s take a look at a few of them in our Bitcoin guide.\n\nPrice vs. Value\n\nFirst, you need to understand the fundamental difference between price and value.\n\nThe price of Bitcoin boils down to this: \n\nSupply and demand. \n\nBitcoin gets its market price from belief.\n\nBeliefs will determine how much people are willing to buy Bitcoin and sell it.\n\nBut that’s not the same thing as value.\n\nBitcoin gets its value from its fundamental properties. \n\nSo, what are these properties that make people believe Bitcoin has value?',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '1. Bitcoin uses blockchain technology\n\nBitcoin is built on blockchain technology, and would be nothing without it. \n\nIn short, blockchain is digital proof. \n\nBlockchain technology provides digital proof that something happened at a certain time, without any intermediary involved.\n\nFor example, when Alice pays Bob a total of 0.00212 Bitcoin, the blockchain records that transaction and when it happened. \n\nThat data is stamped into the blockchain forever and can act as proof of the transaction. \n\n',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '2. Bitcoin is transparent\n\nThere’s a famous saying in the Bitcoin community that is “don’t trust, verify.”\n\nWhen you’re using Bitcoin, you don’t need to trust any person, bank, or government.\n\nThat’s because Bitcoin is fully transparent. \n\nYou, me, anyone can look at the Bitcoin blockchain and verify that a transaction happened. \n\nWe can verify what is happening and know it is free from manipulation. ',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '3. Bitcoin is decentralized\n\nThat means that its core code and information is not stored on some central server or database where someone could hack it or manipulate the data.\n\nBitcoin’s core code and ledger (database) are run on computers all around the world.\n\nThe same code runs on all sorts of different computers -- each one verifying and checking each other. \n\nIf someone tries to hack or manipulate some data, all the other computers around the world will check and reject the change.\n\nHow does this benefit you, personally?\n\nTake for instance the time during the great depression; Democratic U.S. President Roosevelt imposed a “banking holiday” across all America. \n\nNo one could withdraw their money. It was stuck.\n\nThe same thing has happened in modern times in Venezuela. \n\nIf you had your hard-earned money in the bank, you could no longer access it.\n\nThat’s because banks are centralized.\n\nWith centralized systems, the power is not spread amongst its users.\n\nThis is why the government or even the bank itself can lock you out.\n\nDecentralized organizations don’t have a central location, CEO, employees, or anything that would allow the government or anyone to lock them down.\n\nBitcoin’s decentralization keeps the ownership of your Bitcoin 100% in your hands. ',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/Popular-Network-Architectures.png',
          poster: 'image1',
        },
        {
          content:
            '4. Bitcoin is pseudonymous \n\nIf you value financial privacy, then you can have it with Bitcoin.\n\nBitcoin is pseudonymous. That means it is not quite anonymous, or at least that you would need to work hard to use it anonymously.\n\nAll Bitcoin addresses are strings of letters and numbers. They are not linked to your identity directly, like a bank account. \n\nFor example, a typical bank account number might be: 1001001234\n\nThe only way you can get it is if you sign up with a bank, which requires submitting your ID, passport, or other approved identification documents. \n\nThen, all your financial history is accessible by the bank and can be shown to the government, the police, a lawyer, etc.\n\nWhen you use a Bitcoin wallet generator, you can make those addresses and keys yourself quite easily. No account setups or ID checks required. \n\nStill, there are companies out there that have the experience and skills to track Bitcoin’s movements across the blockchain.\n\nThey can do it because the Bitcoin blockchain is transparent. So they take a look and trace where the money flows. \n\nIf the money flows to something linked with your identity, then they can pin it on you. \n\nIf you want to use Bitcoin anonymously, you should make sure to never link your public key/address with any transfers or items linked to your identity.\n\nNote: since the creation of Bitcoin, new cryptocurrencies focused on privacy have emerged, like Monero, Zcash, and Beam.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/bitcoin-keys-public-vs-private-compressor_1.png',
          poster: 'image1',
        },
        {
          content:
            '5. Bitcoin is divisible\n\nOne of the great benefits of Bitcoin is that it’s divisible, like old fiat money. \n\nFiat money like the U.S. Dollar or the Euro can be divided into only 2 decimal points: 1.00\n\nBitcoin can be divided into 8 decimal points: 0.00000001 BTC.\n\nThe smallest unit of Bitcoin, 0.00000001 BTC, is often called a Satoshi, in honor of the inventor, some additional information from our Bitcoin beginners guide for you.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '6. Bitcoin is uncensorable\n\nBitcoin cannot be censored.\n\nChina was the first country to ban Bitcoin in 2013. \n\nSince then, China has gone through periods of banning it, allowing it, regulating things like exchanges, mining, and ICOs. \n\nOther countries have also gone through different phases of Bitcoin regulation.\n\nBut even when China banned Bitcoin mining, there were people mining it. \n\nThis is because all Bitcoin needs to function is electricity and an internet connection.\n\nThere is no company to sanction and no CEO to fine or put into prison.\n\nThe only way for the government to censor Bitcoin is to invade everyone’s home and take away their computer.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '7. Bitcoin is global\n\nBitcoin is a global phenomenon. \n\nOver 260,000 transactions happen every day. That’s over three transactions per second!\n\nThere are an estimated 150,000 Bitcoin miners around the world securing the Bitcoin blockchain. \n\nSomeone moved $445 million dollars worth of Bitcoin for a $0.25 fee, within a few minutes!\n\nThere are over 10,000 Bitcoin ATMs in over 100 countries around the world.\n\nYou can go to any of those 84 countries in the world and use these ATMs. ',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/btc-large-transaction-compressor.png',
          poster: 'image1',
        },
        {
          content:
            '8. Bitcoin is Portable\n\nBitcoin can be global only because it is lightweight.\n\nThe utility of fiat currency is your ability to stuff a few dollar bills in your pocket and go to the corner store to buy a soda. \n\nThe utility of gold is your ability to lock it away in a vault and keep it safe in case something happens to the economy.\n\nTo transport $100,000 in gold, you would need to carry around a very heavy brick of it.\n\nBut all you need to carry around $100,000 in Bitcoin is a single piece of paper, or your phone, or a hardware wallet.\n\nYou can then spend only a small portion of it, just like cash.\n\nAll you need to use Bitcoin is an internet connection to transfer it to anyone, anywhere in the world, at any time you want.\n\nPlus, with Bitcoin exchanges like Coinbase and Kraken, you can easily buy Bitcoin with just a few clicks.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '9. Bitcoin is and will be scarce\n\nThere will only ever be 21 million Bitcoin to ever exist.\n\nPeople believe Bitcoin has value because they know it has a finite supply that cannot be changed. \n\nThey know that if everyone in the world could own an equal amount of Bitcoins, there would only be enough for each person to own 0.0028 BTC.\n\nThat means if you own more than 0.0028 BTC, you own more of that scarcity.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '10. Inflation predictiability \n\nGold gets its value from being scarce. But that scarcity is not predictable. \n\nNo one knows if there will suddenly be another San Francisco gold rush where tons and tons of gold were discovered in the hills and mountains.\n\nThat event quickly increased the gold supply and put pressure on prices.\n\nBitcoin supply is carefully calculated to only emit more BTC once every ten minutes. That’s not something that can be changed.\n\nScarcity exists because new Bitcoins are being released according to a deflationary model.\n\nEvery four years (like in May 2020), a Bitcoin halving takes place.\n\nThese halvings will keep occurring until the last Bitcoin is mined in the year 2140.\n\nThis model helps Bitcoin gain adoption while keeping prices as stable as possible.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/bitcoin-supply-and-halvings-compressor.png',
          poster: 'image1',
        },
        {
          content:
            '11. Bitcoin is Durable\n\nBecause it lives on the web, Bitcoin is infinitely durable. \n\nThis means that users can spend a Bitcoin an infinite number of times without it ever wearing out.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '12. Bitcoin is not Counterfeitable\n\nFor as long as paper money and metal coins have existed, there have been counterfeits of them. \n\nBitcoin cannot be counterfeited.\n\nThat’s a driving force of value because it inspires trust in the system. \n\nThe Bitcoin blockchain makes sure that no counterfeit Bitcoins are introduced into the system. ',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'The 5 Concrete Benefits',
      description: 'of Bitcoin',
      image: 'image2',
      contents: [
        {
          content:
            'Okay, you’ve learned more about what Bitcoin is.\n\nBut when it comes to things that really matter, what is Bitcoin, exactly? \n\nWhat are some real, everyday benefits for you? \n\nLet’s take a look.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            '1. Financial Privacy (aka Private Consumption)\n\nRemember Bitcoin’s pseudonymous properties. You can have financial privacy by using Bitcoin properly.\n\nFor example, if you’re into Bitcoin betting, you can gamble on sports without fear of your bank, spouse, or government (if gambling is illegal where you live) finding out.\n\nOr if you simply don’t want your hard-earned money to be monitored by your bank, with your spending habits sold to advertising agencies.\n\nOr if the government is banning cash transactions (like the U.S. could ban cash over $10,000), and you want to keep your financial privacy -- then Bitcoin is your answer. \n\n',
          image: null,
          poster: 'image2',
        },
        {
          content:
            '2. Faster, Cheaper Remittance (Sending Money Abroad)\n\nIf you send money to friends or family in another country, those costs can stack up very high very quickly. \n\nBanks often charge $50 or more to send your money abroad, and it will take 2-5 days.\n\nBitcoin transfer fees (paid to miners) are $0.50 on average and take 10 minutes to a few hours at most.\n\nThat’s a big difference that keeps more of your hard-earned money in your own pocket, not a bank’s vault. ',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/comparing-transaction-fee-and-size-compressor_1.png',
          poster: 'image2',
        },
        {
          content:
            '3. 24/7 Speculation\n\nThe New York Stock Exchange is open from 9:30 am to 4 pm, Monday to Friday, Eastern Time.\n\nThose are the only times you’re able to trade.\n\nOn the other hand, cryptocurrency exchanges (like Coinbase) allow you to trade anytime you want, 24/7.\n\nIdeal for speculators who would rather set their own schedule, work from home when they want, or be flexible in general.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            '4. Non-Confiscatable\n\nA bad lawsuit can put a lien on your house that you must repay before selling the house.\n\nBad credit loans can garnish your bank account, taking money directly from you. \n\nEven gold can be forcibly stolen or taken from you.\n\nBut if you have Bitcoin, and only you know your private key, then no one can take it away from you.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            '5. Bitcoin Could Make You Money\n\nYou can’t argue with facts. Since 2009, the price of Bitcoin has experienced a parabolic uptrend.\n\nMany people who argue that it’s unstable simply haven’t zoomed out far enough.\n\nZooming out, we see a clear uptrend from under $0.01 to where it is today.\n\nA $50 investment in 2009 would have netted you $100 Million at Bitcoin’s peak in 2017.\n\nYou might think the price in 2017 was Bitcoin’s final “peak,” but the majority of people thought the same thing in 2011 at the ‘peak’ of $200 and in 2013 at the ‘peak’ of $1400.\n\nAnd even if you bought during those peaks and never sold... at today’s prices you’d still be in profit.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/bitcoin-price-history_0.png',
          poster: 'image2',
        },
      ],
    },
    {
      name: 'The 4 Concrete Drawbacks',
      description: 'of Bitcoin',
      image: 'image3',
      contents: [
        {
          content:
            'Despite all Bitcoin’s benefits, it’s NOT a miracle cure.\n\nIt isn’t the magic solution to everything and, in all honesty, it’s not for everyone. \n\nHere are some drawbacks that you should think about before buying any BTC that we covered in this Bitcoin beginners guide.',
          image: null,
          poster: 'image3',
        },
        {
          content:
            '1. Bitcoin can be used by scammers \n\nThe fact that Bitcoin is non-confiscatable is a big positive. You don’t want anyone taking it from you without permission. \n\nBut for some people, it’s a negative. Because it also means you can’t get it back.\n\nIf you’re scammed, you can’t ask for a chargeback, like with your credit card.\n\nAlso, since Bitcoin is partly anonymous, finding who scammed you and suing them is next to impossible.\n\nAuthorities have also found it difficult to pursue cases of crypto fraud.\n\nSo be careful out there. ',
          image: null,
          poster: 'image3',
        },
        {
          content:
            '2. Volatility\n\nBitcoin is only 10 years old. \n\nThe cryptocurrency market is still immature, and prices are highly volatile. \n\nLet’s be honest; some people are too emotional to handle it.Before you jump in, be reasonable when deciding how much to invest in Bitcoin\n\nConsider your financial situation and risk tolerance before diving in.\n\nAnd most importantly:\n\nDon’t spend more than you’re comfortable losing. \n\nIf you spend more than you’re comfortable with, then Bitcoin’s volatility might play on your emotions. \n\nYou’ll lose money because you’ll make dozens of the 50 most common mistakes cryptocurrency investors make.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/btc-will-go-to-zero-compressor_0.png',
          poster: 'image3',
        },
        {
          content:
            '3. Not the Most Beginner-Friendly\n\nThese days, trading and using Bitcoin isn’t the most beginner-friendly activity. \n\nRemember that Bitcoin doesn’t allow any chargebacks. \n\nIf you send your BTC to a legitimate seller but you type in the wrong address, your funds are lost forever. The seller can’t help you get them back. \n\nIf you sent them from an exchange, they can’t help you get your funds back. Neither can your wallet provider. \n\nPerhaps this issue could be resolved over time, but currently, there are no chargebacks, changes, or transfer freezes. ',
          image: null,
          poster: 'image3',
        },
        {
          content:
            '4. Can’t be spent everywhere\n\nThe news used to shout that Bitcoin proponents wanted to be able to spend their Bitcoin everywhere.\n\nThey wanted everyone to be able to buy a cup of coffee with their Bitcoin.\n\nBut even though there are over 10,000 Bitcoin ATMs around the world, it’s still tough to use your BTC to buy normal, everyday things. \n\nCurrently, the easiest way to spend your Bitcoin is to order some of the best Bitcoin cards out there.\n\nBasically, the card providers will provide you with an address to deposit BTC.\n\nThen, when you use your card to make a purchase, they will automatically convert some of your BTC into fiat money to cover the price of the purchase.\n\nAlthough Bitcoin cards make it convenient to spend your Bitcoin, it’s not so easy to find merchants accepting BTC.\n\nThis will likely change in the next ten years, but at the moment, it’s best not to count on spending your Bitcoin on a regular basis.',
          image: null,
          poster: 'image3',
        },
      ],
    },
    {
      name: 'Bitcoin:',
      description: 'Currency, Store Of Value, Or New Asset Class?',
      image: 'image1',
      contents: [
        {
          content:
            'So, is Bitcoin a currency?\n\nA store of value, like digital gold?\n\nOr perhaps, is Bitcoin a new asset class like stocks?\n\nFind in the next part of our Bitcoin beginners guide!',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/what-is-bitcoin-like-compressor_0.png',
          poster: 'image1',
        },
        {
          content:
            '1. Is Bitcoin a currency?\n\nYes.\n\nYou can buy things with BTC. You can sell things. You can receive your salary in BTC.\n\nEach Bitcoin can be divided into 8 decimal places.\n\nSo if something costs 0.0005 BTC but you only have 1 whole BTC, you can still buy it and get 0.9995 BTC back in change. ',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '2. Is Bitcoin like digital gold?\n\nSomehow, yes. \n\nGold is also limited in supply. \n\nWe don’t know how much gold is really out there, but we do know it’s limited. \n\nA limited supply, with steady or increasing demand, keeps prices strong.\n\nBitcoin is limited in supply. \n\nThere will only ever be 21 million Bitcoin to ever exist. \n\nPlus, they’re being released according to a deflationary model.\n\nThe Bitcoin deflationary model works like this:\n\nEvery 10 minutes, 12.5 BTC are released.\n\nEvery four years (like in May 2020), a Bitcoin halving will take place.\n\nAfter the halving, 6.25 BTC will be released every 10 minutes.\n\nThen, in 2024, another halving will take place, and only 3.125 BTC will be released.\n\nThese halvings will keep occurring until the last Bitcoin is mined in the year 2140. \n\nLess inflation means fewer new Bitcoins on the market, thus less supply than traditional fiat currencies.\n\nThis model helps Bitcoin gain adoption while keeping prices as stable as possible.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '3. Is Bitcoin a new asset class like stocks?\n\nYes.\n\nThe majority of people who buy stocks are speculating. They’re guessing/hoping that prices go up.\n\nPension funds buy steady stocks hoping they will slowly go up, so people have something to retire on.\n\nRisky traders buy penny stocks or cheap but risky stocks, hoping they skyrocket in value.\n\nSince Bitcoin’s price varies regularly, most of the people who buy Bitcoin are also speculating, hoping prices will rise over the months or years. ',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/cummulative-returns-of-bitcoin-vs-stocks-vs-gold-compressor_0.png',
          poster: 'image1',
        },
        {
          content:
            'So, what is Bitcoin?\n\nBitcoin is new. \n\nIt has the properties of different traditional assets. \n\nAnd only time will truly tell what Bitcoin ends up being.',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'What makes Bitcoin',
      description: 'go up/down?',
      image: 'image2',
      contents: [
        {
          content:
            'At the end of the day, when you see the price going up and down, it’s because of supply and demand.\n\nYou’ve seen that Bitcoin’s supply of new Bitcoins is fixed. \n\nEvery 10 minutes, more are produced, until all 21 million are created.\n\nThis is regulated by the halving, which occurs every four years. \n\nBut the overall supply is still up to people and companies in the markets.\n\nIn 2019, for example, the price of Bitcoin started fluctuating a lot.\n\nA few clever people scanned the blockchain and figured out that as much as 13,000 BTC were being dumped on the market every week. ',
          image: null,
          poster: 'image2',
        },
        {
          content:
            'They figured out that a scam called the PlusToken scam was dumping its ill-gotten gains on the market, causing downward price pressure from the big supply they were dumping. \n\nThe prices dropped because demand simply couldn’t keep up with supply.\n\nOn the other hand, in 2017, when prices were going up, Coinbase reported signing up as many as 25,000 people per day. \n\nThe demand was outpacing supply.\n\nRemember: the price of Bitcoin is the reflection of supply vs. demand.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            'What’s a Bitcoin worth right now?\n\nBitcoin is volatile.\n\nThe way it goes up and down every day will make even the most seasoned stock brokers head spin. \n\nBut things are calming down compared to the wild days of 2010-2013.\n\nKeep in mind that you may not get that price unless you’re buying or selling at one of the best cryptocurrency exchanges. \n\nIf you’re buying or selling Bitcoin from small exchanges or P2P, you’ll likely need to add on a premium.',
          image: null,
          poster: 'image2',
        },
      ],
    },
    {
      name: 'How do I Invest',
      description: 'in Bitcoin?',
      image: 'image3',
      contents: [
        {
          content:
            'Now that you know what Bitcoin is, you’re probably wondering whether or not you should invest in Bitcoin.\n\nIf you’re ready to buy a few bits, there are a few great options. \n\nThey are all outlined in our definitive Bitcoin beginners guide: The Best Ways to Buy Bitcoin. \n\nFor your security, I strongly recommend that you use one of the platforms we recommend in this guide.\n\n',
          image: null,
          poster: 'image3',
        },
        {
          content:
            'Whether you’d like to buy Bitcoin with a credit card, with your bank account, in a few minutes, with the minimum possible fee … This guide will get you covered.\n\nAnd if you have no idea how the process of buying Bitcoin is like, check out our ultimate guide on How to Invest in Bitcoin in 5 Simple Steps.',
          image: null,
          poster: 'image3',
        },
      ],
    },
    {
      name: 'Charges Against Bitcoin:',
      description: 'Are They Deserved?',
      image: 'image1',
      contents: [
        {
          content:
            'Let’s be honest; there are a number of influential people who, when asked “what is Bitcoin?” would immediately yell “Bitcoin is a scam!”\n\nIndeed, there’s an extensive list of charges against Bitcoin. \n\nLet’s not hide them under the rug. Let’s look at them and see if they are deserved.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '1. itcoin helps illegal activity prosper.\n\nThis charge against Bitcoin is valid. \n\nA Forbes article reports that as much as $70 million worth of illegal activity (gun sales, drug sales, etc) is funneled through Bitcoin every year. \n\nHowever, the same article points out that all that activity can be traced, and in fact, is being tracked by law enforcement.\n\nUnlike cash, every transaction in Bitcoin is permanently recorded and can be linked with other Bitcoin activity.\n\nThat means that as soon as law enforcement links a Bitcoin wallet used for illegal activity to someone in real life -- then the law has records to prove the illegal activity.\n\nStill, $70 million is a drop in the bucket compared to the $100 billion in cash used for illegal drugs annually. \n\nAnd that’s only on drugs.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/how-can-bitcoin-transactions-be-tracked-compressor.png',
          poster: 'image1',
        },
        {
          content:
            '2. Bitcoin mining uses as much electricity as a small country\n\nThe charge that Bitcoin wastes too much energy is valid. \n\nA BBC article compares Bitcoin’s mining electricity usage to that of Switzerland. \n\nThat may seem like a big waste. And it is.\n\nBut only in the same sense as all electricity usage should be minimized. \n\nWe should all strive for renewable, better sources of energy.\n\nAfter all, did you know that traditional banking consumes 3x as much energy?\n\nThat’s right. According to Kelly-Pitou, a clean energy technology researcher at the University of Pittsburgh:\n\n“Banking alone consumes an estimated 100 terawatts. This is a little bit more than three times the energy Bitcoin mining consumes.”\n\nAnd it makes sense when you think about banks and credit card providers needing to run brick-and-mortar offices, server farms, and so much more equipment that centralized financial providers need to run in order to function.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '3. Bitcoin price is way too volatile\n\nUnfortunately for critics, Bitcoin’s price volatility cannot be used as a charge against it.\n\nBecause for some people, like speculators, the volatility is incredible; it means they can earn money by speculating on the ups and downs.\n\nGranted, most people are not speculators.\n\nMost people think that Bitcoin is either like cash or gold. \n\nWhen they learn how volatile it is, they believe people like Warren Buffet and Charlie Munger who call Bitcoin “a tulip mania” and “worthless.”\n\nBut then, what about stocks? Some stocks have gone up and down by over 1000% on a regular basis.\n\nShould we throw them out too?\n\nBitcoin is volatile. That’s true.\n\nBut Bitcoin is a new market that is slowly maturing.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '4. Bitcoin is a bubble\n\nThis charge against Bitcoin has been around since its start.\n\nIn fact, the Bitcoin “bubble” has already “popped” about six times.\n\n2011 -- $31 down to $2\n\n2012 -- $266 down to $100\n\n2013 -- $1,242 down to $230\n\n2015 -- $760 down to $200\n\n2017 -- $19,400 down to $3,300\n\n2019 -- $14,400 down to $3,800\n\nSo it begs the question … is Bitcoin really a bubble if it keeps popping?\n\nAfter all, the definition of a bubble, like a soap bubble, is that once it pops, it’s gone forever.\n\nYou can’t re-inflate a popped soap bubble.\n\nInstead, what we could be seeing is Bitcoin emerging as a new asset class. \n\nAnd like all new things, it’s going through some growing pains.\n\nAfter all, when the internet sent dotcom stocks soaring by 1000% -- and then popped, did we stop using the internet? \n\nNot at all. It just grew bigger.\n\nSimilarly, Bitcoin and cryptocurrencies, in general, may be part of a whole new asset class.',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'How Does Bitcoin Work?',
      description: '[Technology explained]',
      image: 'image2',
      contents: [
        {
          content:
            'How does Bitcoin work, anyway?\n\nBitcoin is built on a blockchain.\n\nYou may have heard that word before: blockchain. \n\nIt’s the secret sauce; the magic technology behind Bitcoin.\n\nIf Bitcoin was a car, imagine blockchain as the roads that allow Bitcoin to travel from one user to another.\n\nBut it’s not that magical. \n\nWhile the technology is revolutionary and now used by the biggest companies in the world -- it’s actually quite boring. \n\nBlockchain is exactly as it sounds: a chain of blocks.\n\nBlocks contain digital information. In the case of Bitcoin’s blockchain, that’s your transaction data: date, amount, etc.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            'The chain is maintained by a network of computers that can be located all over the world.\n\nThis network maintains the ledger of all the digital information together. \n\nThis network ensures that the ledger won’t be hacked, taken over, or scammed.\n\nBecause the network is decentralized, it’s almost impossible to hack the ledger.\n\nIndeed, the hackers would need to successfully hack 51% or more of the network in a 51% attack. \n\nOf course, blockchain technology is much more complicated and evolved than this simple explanation.\n\nSince this is a beginner’s guide on what Bitcoin is, I wanted to keep the information here beginners-friendly.Since this is a beginner’s guide on what Bitcoin is, I wanted to keep the information here beginners-friendly.',
          image: null,
          poster: 'image2',
        },
      ],
    },
    {
      name: 'How Many People',
      description: 'Own Bitcoin?',
      image: 'image3',
      contents: [
        {
          content:
            'According to one of the largest surveys conducted, 78% of Americans have heard of Bitcoin at least once. Only 6% hold the digital currency.\n\nAnother survey showed even more interesting data when age demographics are taken into consideration. \n\nIt turns out that 68.8% of people between 55 and 64 years old do NOT plan on buying any Bitcoin.\n\nThat increases with age. 74% of people over 65 refuse to buy Bitcoin.\n\nThat’s in contrast to younger generations, where not only do 24 to 35 years olds plan on buying it, but 8.8% already own some. \n\nThe demographics were divided further when isolating male and female responders.',
          image:
            'https://cryptomaniaks.com/sites/default/files/pictures/americans-and-bitcoin-2-compressor.png',
          poster: 'image3',
        },
        {
          content:
            '11.6% of young males planned to buy BTC, whereas 8.2% of females were planning to do the same. \n\nThe statistics don’t lie. \n\nThey show that most people still think buying Bitcoin is difficult and risky.\n\nBut the truth is: buying Bitcoin is not difficult, especially this year.\n\nThese days, the best Bitcoin exchanges each have a high level of security, high liquidity and low fees.',
          image: null,
          poster: 'image3',
        },
      ],
    },
    {
      name: 'Where Can I',
      description: 'Spend Bitcoin?',
      image: 'image1',
      contents: [
        {
          content:
            'Currencies need to be accepted in order to function.\n\nBitcoin is a currency that can be spent. \n\nIn fact, we compiled dozens of quality places where you can spend Bitcoin.\n\nYou can find everything from toilet paper to N95 masks. From trinkets to necessary household items.\n\nYou can also bet on sports with Bitcoin or play on Bitcoin casinos if you’re an amateur. \n\nBut be warned: you can’t buy everyday things on a regular basis with Bitcoin.\n\nAt least, without a Bitcoin debit card.\n\nPlus, you can’t pay your taxes or utilities directly with Bitcoin.\n\nBitcoin is not the currency of the future just yet.\n\nAnd with this, we conclude our Bitcoin beginners guide!',
          image: null,
          poster: 'image1',
        },
        {
          content:
            'So, What is Bitcoin? It’s a New Era of Money.\n\nNot all revolutions need to end in war. \n\nBitcoin is the start of a financial revolution.\n\nNew methods of using money, thinking about money, and transferring value across the world have been invented back in 2009 with Bitcoin.\n\nThanks for reading this article up to its end!\n\nWhat’s the most important point of this article? What makes Bitcoin unique, in your opinion?\n\n',
          image: null,
          poster: 'image1',
        },
      ],
    },
  ],
}
global.log = (message) => {
  console.log(message)
}
global.BANNER_AD_ID = 'ca-app-pub-3950402057146083/5883645909'
global.INTERSTITIAL_AD_ID = 'ca-app-pub-3950402057146083/4570564233'
global.NATIVE_AD_ID = 'ca-app-pub-3950402057146083/6173621646'
/* TEST AD ID */
/*global.INTERSTITIAL_AD_ID = "ca-app-pub-3940256099942544/1033173712";
global.BANNER_AD_ID = "ca-app-pub-3940256099942544/6300978111";
global.NATIVE_AD_ID = "ca-app-pub-3940256099942544/2247696110";*/
global.cs_email = 'luckynine.cs@gmail.com'
global.DEVELOPER_HOME =
  'https://play.google.com/store/apps/dev?id=6323058473789380568'
global.PACKAGE_NAME = 'com.dnprod.pubg'
global.readString = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readString(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readInt = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readInt(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readBoolean = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readBoolean(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.writeString = async (name, value) => {
  NativeModules.AndroidUtil.writeString(name, value)
}
global.writeInt = async (name, value) => {
  NativeModules.AndroidUtil.writeInt(name, value)
}
global.writeBoolean = async (name, value) => {
  NativeModules.AndroidUtil.writeBoolean(name, value)
}
global.uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
global.splitByNewline = (str, maxLength) => {
  var buff = ''
  var numOfLines = Math.floor(str.length / maxLength)
  for (var i = 0; i < numOfLines + 1; i++) {
    buff += str.substr(i * maxLength, maxLength)
    if (i !== numOfLines) {
      buff += '@'
    }
  }
  return buff
}
global.string = {
  app_name: 'Guide PUBG',
  text1: 'PC & Mobile',
  text2: 'Get Tips and trick for game play from Newby to Expert.',
  text3: 'PUBG Gaming Tutorial',
  next: 'Next',
  done: 'Done',
  newbie: 'Newbie',
  advance: 'Advance',
  pro: 'Pro',
  expert: 'Expert',
  ad: 'Ad',
  share: 'Share:',
  next: 'Next',
  prev: 'Prev',
  settings: 'Settings',
  notification: 'Notification',
  allow_notifications: 'Allow Notifications',
  help: 'Help',
  how_to_use: 'How To Use',
  contact_us: 'Contact Us',
  about: 'About',
  more_apps: 'More Apps',
  share: 'Share',
  share_apps: 'Share Apps',
  give_5_stars: 'Give 5 Stars',
  how_to_use: 'How To Use',
  about_us: 'About Us',
  share_text:
    'DOWNLOAD FOR FREE: https://play.google.com/store/apps/details?id=com.al2.whatisbitcoin.treading.bullish.crypto.bitcoin',
  newbie_guide: 'Newbie Guide',
  advance_guide: 'Advance Guide',
  pro_guide: 'Pro Guide',
  expert_guide: 'Expert Guide',
}
