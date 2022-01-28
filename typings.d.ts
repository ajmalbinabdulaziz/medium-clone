export interface Post {
    _id: String
    _createdAt: String
    title: String
    author: {
        name: String
        image: String
    }
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