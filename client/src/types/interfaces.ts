interface IContent {
    _id : { type: object },
    title: { type: string },
    description: { type: string },
    img: { type: string },
    imgTitle: { type: string },
    imgThumb: { type: string },
    imgVertical: { type: string },
    trailerSource: { type: string },
    contentSource: { type: string },
    duration: { type: string },
    year: { type: string },
    ageLimit: { type: number },
    genre: { type: string },
    isSeries: { type: boolean },
    listNames: { type: [string], }
}

interface IUserInfo {
    _id: { type: string },
    usernames: { type: string },
    token: { type: string },
    email: { type: string },
}

export type { IContent, IUserInfo }