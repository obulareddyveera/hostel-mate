import { gql } from '@apollo/client';

export const STAFF_BY_GOOGLEID = gql`query($userGoogleId: String!) {
    staffByGoogleId(userGoogleId: $userGoogleId) {
      id
    }
  }
  `