import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ADDPRODUCT, DOMAIN } from '../API/APIConstants';
import PostCall from '../API/PostCall';
import classes from './AddProduct.module.css';

export const AddProduct = () => {
    const navigate =useNavigate();
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    console.log('tesing');
    const onfileChange = (args) => {
        let newFiles = [...files];
        let newUploadedFiles = [...uploadedFiles];
        for (let index = 0; index < args.target.files.length; index++) {
            newFiles.push(URL.createObjectURL(args.target.files[index]));
            newUploadedFiles.push(args.target.files[index]);
        }
        setFiles(newFiles);
        setUploadedFiles(newUploadedFiles);
    }

    const onUploadClick =()=>{
        document.getElementById('img').click();
    }

    const onRemoveImage =(index)=>{
       let fileData= files.filter((d,i)=>{ return i!== index;});
       let newFileData = uploadedFiles.filter((d,i)=>{ return i!== index;});
        setFiles(fileData);
        setUploadedFiles(newFileData);
    }

    const postImages =  (element)=> {
        return new Promise(async (resolve, reject)=>{
            const formData = new FormData();
            formData.append("file",element);
            formData.append("upload_preset","hsnpcbyi");
            let data = await axios.post("https://api.cloudinary.com/v1_1/dc2mxnkas/image/upload",formData);
            resolve(data);
        })
    }

    const addProduct = async(images)=>{
        let product={
            "name": "Kent Water Purifier",
            "description": "copper RO UV",
            "price": 10000,
            "availableQuantity": 5,
            "type": "water Purifier",
            "images": images,
            "rating": 5
        }
         await PostCall(DOMAIN+ADDPRODUCT,product);
        navigate('/');
    }


    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        let imageUrls=[];
        uploadedFiles.forEach(async element => {
           imageUrls.push(postImages(element))
        });
        Promise.all(imageUrls).then((data)=>{
          let images= data.map((d)=> d.data.secure_url);
          addProduct(images);
        })
    }

    return (
        <div className='container'>
            <div className="row">
                <h3>Add Product</h3>
                <form>
                    <div className="card text-center" style={{ "width": "18rem;" }}>
                        <div className="card-body">
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='name'>Product Name</label>
                                </div>
                                <div className='col-6'>
                                    <input type='text' required className='form-control' name='name' />
                                </div>
                            </div>
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='desc'>Description</label>
                                </div>
                                <div className='col-6'>
                                    <textarea type='text' className='form-control' name='desc' />
                                </div>
                            </div>
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='price'>Price</label>
                                </div>
                                <div className='col-6'>
                                    <input type='number' required className='form-control' name='price' />
                                </div>
                            </div>
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='qty'>Available Quantity</label>
                                </div>
                                <div className='col-6'>
                                    <input required type='number' className='form-control' name='qty' />
                                </div>
                            </div>
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='type'>Product Type</label>
                                </div>
                                <div className='col-6'>
                                    <select className='form-control'>
                                        <option selected value='' disabled> -- Select Option -- </option>
                                        <option value='purifier'>Purifier</option>
                                        <option value='softner'>Softner</option>
                                        <option value='machineParts'>Machine Parts</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row form-group m-4'>
                                <div className='col-6'>
                                    <label htmlFor='images'>Upload Images</label>
                                </div>
                                <div className='col-6'>
                                    {
                                        files.map((file, index) => {
                                            return (<div key={index}>
                                                <img className={classes.imgPreview} src={file} key={index} />
                                                <div className={classes.close} onClick={()=>{onRemoveImage(index)}}>X</div>
                                            </div>)
                                        })
                                    }
                                    <input required type='file' id='img' name='img' hidden  multiple onChange={onfileChange} />
                                    <input className='form-control' htmlFor="img" onClick={onUploadClick} value={files.length ===0?'Upload Images': files.length+' selected'}  />
                                </div>
                            </div>
                            <button type='submit' onClick={onSubmitHandler} className="btn btn-primary">Add Product</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
