import '../css/list.css';
import '../css/loader.css';
import { useQuery } from '@apollo/client';
import { getFilesQuery } from '../queries/queries';

function List({ file }){

    const { loading, error, data } = useQuery(getFilesQuery, {
        variables: { type: file }
    });

    return(
        <div className="list">
            <h2 className="heading__list">
                List of {file.toLowerCase()} files
            </h2>
            
            {(loading || error) &&
                <div className="list--loading">
                    <div className="lds-hourglass"></div>
                </div>
            }

            {data && data.uploads && 
                <ul className="list__screen">
                    {data.uploads.map((upload, index) => {
                        return (
                            <li key={index} className="list__item">
                                <a href={upload.url} target="_blank" rel="noreferrer" className="list__link">
                                    {upload.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            }

            {data && data.uploads && data.uploads.length === 0 &&
                <div className="list--blank">
                    No files found in the database
                </div>
            }
        </div>
    );

}

export default List;