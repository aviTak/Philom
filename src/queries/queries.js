import { gql } from '@apollo/client';

export const getFilesQuery = gql`
    query($type: Category!){
        uploads(type: $type){
            name
            url
        }
    }
`;
