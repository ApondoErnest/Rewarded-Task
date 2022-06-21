import { IBetCategories, IBetOPtions, ICampaign } from "../interfaces/ICampaign";

export const CAMPAIGN_LIST: ICampaign[] = [
    {
        type: 'bet',
        img: 'bbnaija.jpg',
        name: 'BB Naija',
        campaignId: 1,
        desc: 'Bet on your favorite bbnaija house mates and events and stand a chance to win amazing prices'
    },
    {
        type: 'bet',
        img: 'bbnaija.jpg',
        name: 'BB Naija',
        campaignId: 1,
        desc: 'Bet on your favorite bbnaija house mates and events and stand a chance to win amazing prices'
    }
]

export const BET_CATEGORIES_LIST: IBetCategories[] = [
    {    
        img: "",
        bgColor: "#91a1b4",
        name: "The Ultimate Winner",
        desc: "Select one house made to win the Ultimate price",
        campaignId: 1,
        id: 1,
        minStake: 200,
        maxStake: 5000,
        minSelection: 1,
        maxSelection: 1
    },
    {    
        img: "",
        bgColor: "#405a79",
        name: "1st Runner Up",
        campaignId: 1,
        id: 2,
        minStake: 200,
        maxStake: 5000,
        desc: "Select one house made to win the Ultimate price",
        minSelection: 1,
        maxSelection: 1
    },
    {    
        img: "",
        bgColor: "#536f91",
        name: "This Week's Nominees",
        campaignId: 1,
        id: 3,
        minStake: 200,
        maxStake: 5000,
        desc: "Select between 3 to 5 housemates you think will be up for possible eviction",
        minSelection: 3,
        maxSelection: 5
    },
    {    
        img: "",
        bgColor: "#91a1b4",
        name: "Head of House",
        campaignId: 1,
        id: 4,
        minStake: 200,
        maxStake: 5000,
        desc: "Select The housemate you think will win the head of House this week",
        minSelection: 1,
        maxSelection: 1
    },
    {    
        img: "",
        bgColor: "#1e5597",
        campaignId: 1,
        id: 5,
        minStake: 200,
        maxStake: 5000,
        name: "Deputy Head of House",
        desc: "Select The housemate you think will be selected as deputy Head of house this week",
        minSelection: 1,
        maxSelection: 1
    },
    {    
        img: "",
        bgColor: "#0553b3",
        campaignId: 1,
        id: 6,
        minStake: 200,
        maxStake: 5000,
        name: "Head of house pair",
        desc: "Select two housemates you think will rule the house this week",
        minSelection: 2,
        maxSelection: 2
    }
]


export const BET_OPTIONS: IBetOPtions[] = [
    {
        name: "JMK",
        odd: 1.8,
        desc: "A maquiagem artística é uma técnica diferente da make social, e da que usamos no nosso dia a dia.",
        img: "bbn/rsz_jmk.jpg?raw=true",
        id: 1,
        categoryId: 1,
        instagram: {
            followers: 10000,
            following: 5,
            url: ''
        },
        facebook:{
            followers: 10000,
            following: 5,
            url: ''
        },
        twitter: {
            followers: 10000,
            following: 5,
            url: ''
        }
    },
    {
        name: "WHITE MONEY",
        odd: 1.2,
        desc: "A maquiagem artística é uma técnica diferente da make social, e da que usamos no nosso dia a dia.",
        img: "bbn/whitemoney.jpg?raw=true",
        id: 2,
        categoryId: 1,
        instagram: {
            followers: 10000,
            following: 5,
            url: ''
        },
        facebook:{
            followers: 10000,
            following: 5,
            url: ''
        },
        twitter: {
            followers: 10000,
            following: 5,
            url: ''
        }
    },
    {
        name: "PERE",
        odd: 1.2,
        desc: "A maquiagem artística é uma técnica diferente da make social, e da que usamos no nosso dia a dia.",
        img: "bbn/pere.jpg?raw=true",
        id: 3,
        categoryId: 1,
        instagram: {
            followers: 10000,
            following: 5,
            url: ''
        },
        facebook:{
            followers: 10000,
            following: 5,
            url: ''
        },
        twitter: {
            followers: 10000,
            following: 5,
            url: ''
        }
    }
]