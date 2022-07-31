import React from 'react';

import AndroidAppBanner from '../../components/banner/androidAppBanner';
import IntroCta from '../../components/call-to-actions/introCta';
import WhereThisHelps from '../../components/call-to-actions/whereThisHelps';
import HomeFooter from '../../components/footer/homeFooter';
import HomeNav from '../../components/nav/homeNav';
import Header4 from '../../components/titles/h4';

const HomeContainer = () => {
    return (
        <>
            <HomeNav />
            <IntroCta />
            <WhereThisHelps />
            <AndroidAppBanner />
            <HomeFooter />
        </>
    )
}

export default HomeContainer;