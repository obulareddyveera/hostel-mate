export const hostelTypeDef = `
type Users {
    id: Int
    displayName: String
    familyName: String
    givenName : String
    email: String
    photoUrl: String
    googleId: String
}
type Code {
    id: Int
    name: String
    description: String
}
type CodeValues {
    id: Int
  codeId: Int
  Code: Code
  name: String
  value: String
  isActive: Boolean
}
type Staff {
    id: Int
    hostelId: Int
    Hostel: Hostel
    userId: Int
    Users: Users
    roleId: Int
    CodeValues: CodeValues
}
type Floor {
    id: Int
    hostelId: Int
    Hostel: Hostel
    roomId: Int
    Room: [Room!]!
}

type Room {
    id: Int
    floorId: Int
    Floor: Floor
    beds: Int
    type: Int
}
type Hostel {
    id: Int
    name: String
    address: String
    pinPlace: String
    city: String
    state: String
    pincode: String
    country: String
    primaryId: Int
    Users: Users
    Staff: [Staff!]!
    Floor: [Floor!]!
}
type Query {
    hostel: [Hostel!]!
    staffByGoogleId(userGoogleId: String!): Staff!
}
`