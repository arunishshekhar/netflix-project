import React from "react";
import 'regenerator-runtime/runtime'
import { db } from "../../firebase";
import { set, ref } from "firebase/database";

const { BlobServiceClient } = require('@azure/storage-blob');


function onUploadHandler() {
    const fileInput = document.getElementById('file-input');
    const upload = document.getElementById('upload');
    const data = document.getElementById('ref-no');

    // console.log(data.value);

    const blobSasUrl = 'https://mb0netflix.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=co&sp=wactfx&se=2022-06-20T15:15:45Z&st=2022-05-20T07:15:45Z&spr=https,http&sig=cgszT3rUcS6hV%2FVZN6A%2B%2FXbFfhf0aemnSn5hK6yd1ds%3D';
    const blobServiceClient = new BlobServiceClient(blobSasUrl);

    const containerName = 'movies';
    const containerClient = blobServiceClient.getContainerClient(containerName);


/* //Write
set(ref(db,'tarun'),{
    name: 'kumar',
    age: '200',
  })
  
  //Read
  const temp = ref(db,'tarun');
  onValue(temp, (snap) => {
    console.log(snap.val());
  })
 */


    const uploadFiles = async () => {
        try {
            let fileName = "";
            const promises = [];
            for (const file of fileInput.files) {
                const blockBlobClient = containerClient.getBlockBlobClient(file.name);
                fileName = file.name;
                promises.push(blockBlobClient.uploadBrowserData(file));
                // https://mb0netflix.blob.core.windows.net/movies/c9de9685-c1b5-40b6-bb1c-cc0fb919b520.mp4
            }
            await Promise.all(promises);
            alert('Done.');
            
            set(ref(db,`${data.value}`),{
                url: `https://mb0netflix.blob.core.windows.net/movies/${fileName}`,
              })
              .then(val => console.log(val))
            fileInput.remove();
            upload.remove();
        }
        catch (error) {
            alert(error.message);
        }
    }

    upload.addEventListener('click', uploadFiles);

}

function AdminController() {

    return (
        <>
            <h1>This is Admin</h1>
            <h2>File to Upload</h2>
            <br/>
            <br/>
            <br/>
            <input type='text' id="ref-no" />
            <br/>
            <br/>
            <br/>
            <input type="file" id="file-input"/>
            <button id="upload" onClick={() => onUploadHandler()}>Upload</button>
        </>
    )
}

export default AdminController;