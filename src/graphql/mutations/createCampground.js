import gql from 'graphql-tag';

export default gql`
    mutation CreateCampground($name: String!, $image: String!) {
        createCampground(name: $name, image: $image) {
            id
            name
            image
        }
    }
`;
