import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Separator = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div>
                <FontAwesomeIcon className='w-4 h-4' icon={faEllipsis} />
            </div>
        </div>
    )
}

export default  Separator;
