export const usersTypeDef = `
type Query {
 userByGoogleId(id: String!): User
 users: [User!]!
}
type User {
    id: Int
    displayName: String
    familyName: String
    givenName : String
    email: String
    photoUrl: String
    googleId: String
}
`