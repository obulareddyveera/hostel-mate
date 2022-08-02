export const postsTypeDef = `
type Query {
 post(postId: Int!): Post
 allPosts: [Post!]!
}
type Post {
  id: Int
  title: String
  content: String
}
`