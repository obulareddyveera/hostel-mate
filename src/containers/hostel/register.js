import React from 'react';

import InputField from '../../components/fields/inputField';

const Register = () => {
    const handleOnChange = (key, value) => {
        console.log('--== Register ');
    }
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Register</h2>
                    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
                        <div>
                            <InputField
                                id="name"
                                placeholder={"Name"}
                                handler={{value: '', changeHandler: handleOnChange}}
                            />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;