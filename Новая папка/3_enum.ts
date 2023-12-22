enum Membership {
    Simple,
    Standard,
    Premium
};

const membership2 = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership2);
console.log(membershipReverse);


enum SocialMedia {
    TikTok = "TikTok",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.FACEBOOK

console.log(social);
