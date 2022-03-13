import '../css/upload.css';
import '../css/loader.css';
import { useMutation } from '@apollo/client';
import { uploadFileMutation } from '../queries/mutations';
import { getFilesQuery } from '../queries/queries';
import { useEffect, useState } from 'react';

const fileExtension = Object.freeze({
    VIDEO: ["mp4", "mov", "wmv", "flv", "avi", "avchd", "webm", "mkv"],
    EXCEL: ["xlsx", "xls", "csv"]
  });  

const fileColor = Object.freeze({
    "File uploaded": "#037aff"
});

function Upload({ file }) {
    const [ display, setDisplay ] = useState('');

    const [ uploadFile, { loading } ] = useMutation(uploadFileMutation, {
        onCompleted: data => data.uploadFile.success ? setDisplay('File uploaded') : setDisplay(data.uploadFile.message),
        onError: () => setDisplay('Please try again')
    });

    useEffect(() => {
        setDisplay('');
    }, [file]);

    const handleSubmit = async e => {
        e.preventDefault();
        if(!e.target.files[0]) return;

        const extension = e.target.files[0].name
          .split(".")
          .pop()
          .toLowerCase();

        if (!fileExtension[file].includes(extension)) {
            e.target.value = '';
            setDisplay('File not supported');
            return;
        }

        if(loading) {
            e.target.value = '';
            setDisplay('Previous upload in progress');
            return;
        }

        await uploadFile({
            variables: {
                file: e.target.files[0],
                type: file
            },
            refetchQueries: [{
                query: getFilesQuery,
                variables: { type: file },
            }]
        });
        
        e.target.value = '';
    }

    return (
        <div className="upload">
            
            <label className="label" htmlFor="file">{`Drag & drop your ${file.toLowerCase()} file below:`}</label>
            <input required className="upload--input" type="file" id="file" onDragOver={handleSubmit} onChange={handleSubmit} />
             
            {loading &&
                <div className="upload--loading">
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            }

            {display &&
                <div className="upload--error" style={{color: fileColor[display] || "#ff0000"}}>
                    {display}
                </div>
            }
        </div>
    )
}

export default Upload;