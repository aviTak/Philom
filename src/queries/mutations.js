import { gql } from '@apollo/client';

export const uploadFileMutation = gql`
    mutation($file: Upload!, $type: Category!) {
        uploadFile(file: $file, type: $type) {
            success
            message
        }
    }
`;
