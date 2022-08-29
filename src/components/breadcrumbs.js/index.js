import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';


const BreadcrumbsComponent = () => {
    console.log('--==** breadcrumbs **==--');
    return (
        <div className="max-w-min text-sm breadcrumbs">
            <ul>
                <li className="flex">
                    <FontAwesomeIcon className="w-3 h-3" icon={faHome} />
                    <Link href={`/protected/${token}`}>
                        <a className="btn btn-link btn-sm">Home</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default BreadcrumbsComponent;