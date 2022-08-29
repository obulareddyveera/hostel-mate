import { gql } from '@apollo/client';

export const GET_USER_BY_GOOGLEID = gql`
query userByGoogleId($id: String!) {
  userByGoogleId(id: $id) {
    id
    displayName
    familyName
    givenName
    email
    photoUrl
    googleId
  }
}
`