import gql from 'graphql-tag';

export default gql`
    query Campground($id: ID!) {
        campground(id: $id) {
            name
            image
        }
    }
`;
