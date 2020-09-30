import Img1 from "../assets/Teampage/hobbies.JPG";
import Img2 from "../assets/alex.jpg";
import Img3 from "../assets/alex.jpg";

import TeamSec1 from "../assets/Teampage/photography.JPG";
import TeamSec2 from "../assets/Teampage/journalism.JPG";
import TeamSec3 from "../assets/Teampage/hobbies.JPG";


export const HomepageData = [
    {
        key: "home1",
        type: "card",
        title: "Journey Through a Mysterious World",
        subtitle: "pancakes",
        src: Img1,
    },
    {
        key: "home2",
        type: "card",
        title: "Journey Through a Mysterious World",
        src: Img1,
    },
    {
        key: "home3",
        type: "card",
        title: "Journey Through a Mysterious World",
        src: Img1,
    },
    {
        key: "home4",
        type: "card",
        title: "Journey Through a Mysterious World",
        src: Img1,
    },
    {
        key: "home5",
        type: "card",
        title: "Journey Through a Mysterious World",
        src: Img1,
    },
];

export const TeampageData = {
    teamPageAbout:{
        key: "home1",
        type: "text",
        title: "About Me",
        text: "I'm a writer and photographer with a passion for the natural world. I focus my lens on capturing the creatures around us that so often get overlooked, and finding the beauty in the landscape that surrounds us. My writing also focuses heavily on the natural world and how our interactions with it have shaped the past and can impact the future.",
        socialMedia: [
            {type:"twitter", link:"https://twitter.com/alexbakirdan"},
            {type:"instagram", link:"https://www.instagram.com/bakirdan55/"},
            {type:"linkedin", link:"https://www.linkedin.com/in/alexander-bakirdan-6686b0176/"}
        ]
    },
    teamPageSections:[
            {
                key: "home1",
                type: "basic",
                title: "Photography",
                text: "As you explore a derelict cruiser adrift in space, discover what secrets the ship holds and learn what lead to the fate of the passengers. Earn weapons and items by exploring, and defeating enemies. Intrigue and lore is hidden around every corner, but danger is always lurking just out of sight.",
                src: TeamSec1,
                reverse: false
            },
            {
                key: "home2",
                type: "basic",
                title: "Journalism",
                text: "I chose to study journalism in college because of my belief that there are always interesting and important stories to tell no matter where you look. I've also worked to make dissect the studies told by others in various mediums, such as film and television, as I believe they often provide valuable commentary on the world around us. In my work I strive to always focus on the story yet never to be so narrowminded as to not see that story evolve and change as all stories do.",
                src: TeamSec2,
                reverse: true
            },
            {
                key: "home3",
                type: "basic",
                title: "Hobbies",
                text: "I spend my free time exploring the world, both the natural and the abandoned remnants of manmade society, hoping to capture it with my camera along the way. I am also passionate about storytelling in its various forms, and work to hone my own storytelling abilities while I study and learn from great storytellers across all mediums.",
                src: TeamSec3,
                reverse: false
            }
        ]
};



export default HomepageData;