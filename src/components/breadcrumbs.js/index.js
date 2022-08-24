import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { breadcrumbsSelector } from './../../recoil/selectors/breadcrumbs';
import { userProfileSelector } from './../../recoil/selectors/userProfile';

const BreadcrumbsComponent = () => {
    const userProfileValue = useRecoilValue(userProfileSelector)
    const { path } = useRecoilValue(breadcrumbsSelector);
    console.log('--==** breadcrumbs ', path, userProfileValue);
    const { token } = userProfileValue;
    return (
        <div className="max-w-min text-sm breadcrumbs">
            <ul>
                <li className="flex">
                    <FontAwesomeIcon className="w-3 h-3" icon={faHome} />
                    <Link href={`/protected/${token}`}>
                        <a className="btn btn-link btn-sm">Home</a>
                    </Link>
                </li>
                {
                    path && path.map(item => {
                        return (
                            <li key={item.key}>
                                {
                                    item.active ? (
                                        <Link href={item.url}>
                                            <a className="btn btn-link btn-sm">{item.displayName}</a>
                                        </Link> ) : (
                                        <div>{item.displayName}</div>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BreadcrumbsComponent;