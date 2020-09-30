import Img1 from "../assets/welcome1.png";
import Img2 from "../assets/welcome2.png";
import Img3 from "../assets/welcome3.png";

import Jul from "../assets/team/jul.jpg";
import Rahul from "../assets/team/rahul.jpg";
import Jen from "../assets/team/jen.jpg";
import Bun from "../assets/team/bun.jpg";
import Alex from "../assets/team/alex.jpg";
import Charlie from "../assets/team/charlie.jpg";
import Isabelle from "../assets/team/isabelle.jpg";

import Bleats2k10 from "../assets/testers/Bleats2k10.png";
import Chillbytes from "../assets/testers/Chillbytes.jpg";
import Gheiste from "../assets/testers/Gheiste.jpg";
import Pizzadave from "../assets/testers/Pizzadave.jpg";
import RosieRiots from "../assets/testers/RosieRiots.jpg";
import ItsQuipz from "../assets/testers/itsQuipz.jpg";

import KarateKid from "../assets/testers/KarateKid.jpeg";
import Nezuyaki from "../assets/testers/Nezuyaki.JPG";
import SirPugs from "../assets/testers/Sirpugs.jpg";
import Rasbi from "../assets/testers/Rasbi.jpg";
import Khaotic from "../assets/testers/Khaotic.JPG";

export const HomepageData = [
    {
        key: "home1",
        type: "basic",
        title: "Journey Through a Mysterious World",
        text: "As you explore a derelict cruiser adrift in space, discover what secrets the ship holds and learn what lead to the fate of the passengers. Earn weapons and items by exploring, and defeating enemies. Intrigue and lore is hidden around every corner, but danger is always lurking just out of sight.",
        src: Img1,
        reverse: false
    },
    {
        key: "home2",
        type: "basic",
        title: "Fight for Survival",
        text: "Battle the ARCADIA, an evil AI network, in a unique spin on strategic turn-based combat built from the ground up to feel engaging and exciting. Choose your fights carefully, however. As you delve deeper and deeper into the ship, enemies will appear in greater numbers and death will come with a great cost.",
        src: Img2,
        reverse: true
    },
    {
        key: "home3",
        type: "basic",
        title: "Unlock Powerful Rewards",
        text: "Mirastell features a diverse set of quests that will guide you through your experience. These quests will force you outside of your comfort zone, expanding your mastery of the game and rewarding you with exciting weapons, consumables, and more. Rewards can also be found on your expeditions, and will be hidden throughout the ship for keen players to discover.",
        src: Img3,
        reverse: false
    }
];

export const TeampageData = {
    teamPageAbout:{
        key: "home1",
        type: "text",
        title: "About Mirastell",
        text: "Mirastell is made by a small group of indie developers, college students and fresh college graduates alike, who are passionate about the story they have to tell and the world they are telling it in. The team has worked together closely on every aspect of Mirastell to create an experience that is intriguing and beautiful with its own unique flair and style. Each member of the Mirastell team is an important piece, without whom this game and the experience it gives would not be possible.",
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/mirastellGame"},
            {type:"instagram", link:"https://www.instagram.com/mirastellgame/"},
            {type:"facebook", link:"https://www.facebook.com/MirastellGame/"},
            {type:"linkedin", link:"https://www.linkedin.com/company/trexus183"}
        ]
    }
};

export const TeamData = [
    {
        key: "team1",
        type: "profile",
        title: "Julius Condemi",
        subtitle: "Co-Owner",
        text: "Julius has been designing/developing games for over 6 years! He's an avid gamer whose commited 100s hours into games like: Destiny, Titanfall, & Fallout. While working, he's always jamming out to rock. If ya ever invite him over for movie night, know his favorite movie hands down is Birdman.",
        src: Jul,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/Trexus183"},
            {type:"instagram", link:"https://www.instagram.com/Trexus183/"},
            {type:"linkedin", link:"https://www.linkedin.com/in/julius-condemi-111a31159"},
            {type:"website", link:"https://www.trexus183.com/"}
        ],
        reverse: false
    },
    {
        key: "team2",
        type: "profile",
        title: "Rahul Sondhi",
        subtitle: "Co-Owner",
        text: "Rahul is an MBA grad student at Stony Brook University, with a BS in Computer Science. Back in the day he managed several school organizations, such as the computing society, and ran several events, including a hackathon he founded. Now he spends his day on Mirastell and his nights streaming on Twitch. He hates going to bed and hates getting up. His best friend is a cup of coffee loaded with sugar.",
        src: Rahul,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/hungryhul"},
            {type:"instagram", link:"https://www.instagram.com/hungryhul/"},
            {type:"linkedin", link:"https://www.linkedin.com/in/rahul-sondhi"},
            {type:"linktree", link:"https://linktr.ee/HungryHooligan"}
        ],
        reverse: true
    },
    {
        key: "team3",
        type: "profile",
        title: "Alexander Bakirdan",
        subtitle: "Social Media Manager",
        text: "Alex is a writer with a passion for fantasy and science-fiction. He spends most of his time glued to his desk writing, but when he’s not he enjoys playing games as well, especially Nintendo titles and strategy games. He’s also a huge fan of the outdoors and likes to hike and practice nature photography.",
        src: Alex,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/alexbakirdan"},
            {type:"instagram", link:"https://www.instagram.com/bakirdan55/"}
        ],
        reverse: false
    },
    {
        key: "team4",
        type: "profile",
        title: "Alana Sun",
        subtitle: "Character Designer",
        text: "Alana is a small cosplayer/streamer with big dreams to grow her own community. She's been practicing fine arts throughout most of her educational years. You can always catch her online playing MapleStory and if you ask her about her favorite cosplay it's hands down Panther from Persona 5.",
        src: Bun,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/ribunbun"},
            {type:"instagram", link:"https://www.instagram.com/ribunbun/"},
            {type:"linktree", link:"https://linktr.ee/ribunbun"},
            {type:"twitch", link:"https://www.twitch.tv/ribunbun"}
        ],
        reverse: true
    },
    {
        key: "team5",
        type: "profile",
        title: "Jen Bradley",
        subtitle: "Digital Artist",
        text: "Jen is a student studying her way to become a wildlife biologist (her love for animals is her main fuel source). When not hitting the books or drawing, she plays on her school's TESPA Overwatch League team as a support main. Her future dreams always include her driving her dream Tesla.",
        src: Jen,
        socialMedia: [
            {type:"instagram", link:"https://www.instagram.com/inquisitiveaardvark/"}
        ],
        reverse: false
    },
    {
        key: "team6",
        type: "profile",
        title: "Charlie Diaz",
        subtitle: "Internal QA",
        text: "Charlie is a computer science major and a streamer on twitch at gryffinboredd. The three things he loves most in the world are Kiley(His GF), Pandora (their mischievous cat) and Liverpool F.C. His favorite game series is hands down Assassin’s Creed and he says he sometimes completes living in a cabin in the woods, just as long as he could still have video games!",
        src: Charlie,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/gryffinboredd"},
            {type:"instagram", link:"https://www.instagram.com/gryffinboredd_/"},
            {type:"twitch", link:"https://www.twitch.tv/gryffinboredd"}
        ],
        reverse: true
    },
    {
        key: "team7",
        type: "profile",
        title: "Isabelle Greenberg",
        subtitle: "Voice Actor of Alana",
        text: "Isabelle is a Senior at Stony Brook University, where she is completing a Computer Science major with a Theatre minor. Outside of her coursework, she is the President of Stony Brook Computing Society and also performs in various campus plays. In her free time, she enjoys swimming and reading comics.",
        src: Isabelle,
        socialMedia: [
            {type:"linkedin", link:"https://www.linkedin.com/in/isabelle-greenberg"},
            {type:"instagram", link:"https://www.instagram.com/rings.an.isabelle/"},
            {type:"twitter", link:"https://twitter.com/rings_a_belle"}
        ],
        reverse: false
    }
];

export const AlphaData = [
    {
        key: "atest1",
        type: "card",
        title: "bleats2k10",
        subtitle: "Twitch Streamer",
        src: Bleats2k10,
        socialMedia: [
            {type:"twitch", link:"https://www.twitch.tv/bleats2k10"},
            {type:"instagram", link:"https://www.instagram.com/bleats2k10_vk/"},
        ],
        reverse: false
    },
    {
        key: "atest2",
        type: "card",
        title: "Gheiste",
        subtitle: "Twitch Streamer",
        text: "",
        src: Gheiste,
        socialMedia: [
            {type:"twitter", link:"https://www.twitter.com/gheiste "},
            {type:"instagram", link:"https://www.instagram.com/gheistespiele/"},
            {type:"facebook", link:"https://www.facebook.com/Gheiste-521476478318780"}
        ],
        reverse: true
    }
    ,
    {
        key: "atest3",
        type: "card",
        title: "Chillbytes",
        subtitle: "Twitch Streamer",
        text: "",
        src: Chillbytes,
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/chillbytes"},
            {type:"facebook", link:"https://www.facebook.com/chillbytes"},
            {type:"website", link:"http://smughaven.com"}
        ],
        reverse: true
    },
    {
        key: "atest4",
        type: "card",
        title: "RosieRiots",
        subtitle: "Twitch Streamer",
        text: "",
        src: RosieRiots,
        socialMedia: [
            {type:"instagram", link:"https://www.instagram.com/rosieriotsttv/"},
            {type:"twitter", link:"https://twitter.com/RosieRiotsTTV"},
            {type:"twitch", link:"https://www.twitch.tv/rosieriots"}
        ],
        reverse: true
    },
    {
        key: "atest5",
        type: "card",
        title: "Pizza Dave",
        subtitle: "Twitch Streamer",
        text: "",
        src: Pizzadave,
        socialMedia: [
            {type:"twitch", link:"https://twitch.tv/1pizzadave "},
            {type:"twitter", link:"https://twitter.com/Rateddg3"}
        ],
        reverse: true
    },
    {
        key: "atest6",
        type: "card",
        title: "itsQuipz",
        subtitle: "Twitch Streamer",
        text: "",
        src: ItsQuipz,
        socialMedia: [
            {type:"twitch", link:"https://www.twitch.tv/itsquipz"},
            {type:"twitter", link:"https://twitter.com/ItsQuipz"},
            {type:"instagram",link:"https://www.instagram.com/itsquipz/"}
        ],
        reverse: true
    }
];

export const BetaData = [
    {
        key: "btest1",
        type: "card",
        title: "KarateKid",
        subtitle: "Twitch Streamer",
        text: "",
        src: KarateKid,
        socialMedia: [
            {type:"twitch", link:"https://www.twitch.tv/karatekid12549"},
            {type:"instagram", link:"https://www.instagram.com/matthewm12549/"}
        ],
        reverse: true
    },
    {
        key: "btest2",
        type: "card",
        title: "Nezuyaki",
        subtitle: "Twitch Streamer",
        text: "",
        src: Nezuyaki,
        socialMedia: [
            {type:"linktree", link:"https://linktr.ee/Nezuyaki"}
        ],
        reverse: true
    },
    {
        key: "btest3",
        type: "card",
        title: "SirPugs",
        subtitle: "Twitch Streamer",
        text: "",
        src: SirPugs,
        socialMedia: [
            {type:"twitch", link:"https://twitch.tv/sirpugs"},
            {type:"instagram", link:"https://www.instagram.com/pgscosplay"}
        ],
        reverse: true
    },
    {
        key: "btest4",
        type: "card",
        title: "Rasbi",
        subtitle: "Twitch Streamer",
        text: "",
        src: Rasbi,
        socialMedia: [
            {type:"twitter", link:"https://https://twitter.com/RasbiYT"},
            {type:"twitch", link:"https://twitch.tv/rvsbi"},
            {type:"youtube", link:"https://youtube.com/rasbi"}
        ],
        reverse: true
    },
    {
        key: "btest5",
        type: "card",
        title: "Khaotic",
        subtitle: "Twitch Streamer",
        text: "",
        src: Khaotic,
        socialMedia: [
            {type:"linktree", link:"https://linktr.ee/Khaotic_Live"}
        ],
        reverse: true
    }
];

export default HomepageData;