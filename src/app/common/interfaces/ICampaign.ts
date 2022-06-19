export interface ICampaign {
    img: string,
    name: string,
    desc: string,
    type: string,
    campaignId: number,
} 

export interface IBetCategories {
    id: number,
    img: string,
    bgColor: string,
    name: string,
    desc: string,
    campaignId: number,
    minSelection: number,
    maxSelection: number
}

export interface IBetOPtions {
    id: number,
    categoryId: number,
    name: string,
    odd: number,
    desc: string,
    img: string,
    instagram?: SocialMediaInfo,
    facebook?:SocialMediaInfo,
    twitter?: SocialMediaInfo
}

export interface SocialMediaInfo {
    followers: number,
    following: number,
    url: string
}