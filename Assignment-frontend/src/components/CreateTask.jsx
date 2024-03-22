import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { server } from '../main';

const CreateTask = () => {
    const [price, setPrice] = useState({
        priceh1: "",
        priceh6: "",
        priceh24: "",
        pricem5: "",
    })

    const [volume, setVolume] = useState({
        volumeh1: "",
        volumeh6: "",
        volumeh24: "",
        volumem5: "",
    })

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${server}/new`, {
                price: {
                    m5: price.pricem5,
                    h1: price.priceh1,
                    h6: price.priceh6,
                    h24: price.priceh24
                },
                volume: {
                    h24: volume.volumeh24,
                    h6: volume.volumeh6,
                    h1: volume.volumeh1,
                    m5: volume.volumem5
                }
            }, {
                header: {
                    "Content-Type": "application/json",
                    // 'Access-Control-Allow-Origin' : '*',
                },
            });

            toast.success(data.message);
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='newTask'>
            <section>
                <form onSubmit={submitHandler}>
                    <div className='heading'>
                        <h2>Price</h2>
                    </div>
                    <input value={price.priceh24} required onChange={(e) => setPrice({...price, priceh24: e.target.value})} type='text' placeholder='h24' />
                    <input value={price.priceh6} required onChange={(e) => setPrice({...price, priceh6: e.target.value})} type='text' placeholder='h6' />
                    <input value={price.priceh1} required onChange={(e) => setPrice({...price, priceh1: e.target.value})} type='text' placeholder='h1' />
                    <input value={price.pricem5} required onChange={(e) => setPrice({...price, pricem5: e.target.value})} type='text' placeholder='m5' />

                    <div style={{ padding: 5 }}></div>
                    <div className='heading'>
                        <h2>Volume</h2>
                    </div>
                    <input value={volume.volumeh24} required onChange={(e) => setVolume({...volume, volumeh24: e.target.value})} type='text' placeholder='h24' />
                    <input value={volume.volumeh6} required onChange={(e) => setVolume({...volume, volumeh6: e.target.value})} type='text' placeholder='h6' />
                    <input value={volume.volumeh1} required onChange={(e) => setVolume({...volume, volumeh1: e.target.value})} type='text' placeholder='h1' />
                    <input value={volume.volumem5} required onChange={(e) => setVolume({...volume, volumem5: e.target.value})} type='text' placeholder='m5' />

                    <div style={{ padding: 5 }}></div>
                    <button type='submit'>Create Task</button>
                </form>
            </section>
        </div>
    )
}

export default CreateTask