import gql from 'graphql-tag';

export default gql`
    query Campgrounds {
        campgrounds {
            id
            name
            image
        }
    }
`;
