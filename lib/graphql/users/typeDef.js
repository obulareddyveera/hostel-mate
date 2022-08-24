export const usersTypeDef = `
type Query {
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