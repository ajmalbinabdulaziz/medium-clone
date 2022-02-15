export interface Post {
    _id: String
    _createdAt: String
    title: String
    author: {
        name: String
        image: String
    }
    comments: Comment[]
    description: String
    mainImage: {
        asset: {
            url: String
        }
    }
    slug: {
        current: String
    }
    body: [object]
}

export interface Comment {
    approved: boolean
    comment: String
    email: String
    name: String
    post: {
        _ref: String
        _type: String
    }
    _createdAt: String
    _id: String
    _rev: String
    _type: String
    _updatedAt: String   
}