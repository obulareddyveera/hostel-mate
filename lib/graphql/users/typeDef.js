export const usersTypeDef = `
type Query {
    orgUserByGoogleId(googleId: String!): OrgUsers
    users: [User!]!
}
type OrgUsers {
    id:     Int
    userId: Int
    Users:  User
    roleId: Int
    Roles:  Roles
}
type Roles {
    id:          Int
    name:        String
    description: String
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