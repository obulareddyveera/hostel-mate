/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Separator from '../utils/separator';

const WhereThisHelps = () => {
    return (
        <div className='grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 items-center justify-center p-6'>
            <div className='flex justify-center items-center flex-col'>
                <img alt="Hostelmate maintains boarding service" src="where-this-helps/hostel-building.png" className='w-32 h-32' />
                <div className='text-xl font-merriweather max-w-4xl text-left'>
                    Hostelmate maintains boarding service.
                </div>
                <div>
                    The app manages member registry service with full name, email, food prefs, and adhar number details.
                </div>
                <div>
                    HostelMate maintains vacancy, store, and inventory to onboard new members.
                </div>
                <Separator />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img alt="Hostelmate maintains boarding service" src="where-this-helps/chef-boy-cook.png" className='w-32 h-32' />
                <div className='text-xl font-merriweather max-w-4xl'>
                    Plan cater at minimal wastage.
                </div>
                <div>
                    The app shares web URL with all Hostel members, to update their attendence.
                </div>
                <Separator />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img alt="Hostelmate maintains boarding service" src="where-this-helps/cleaners-with-cleaning.png" className='w-32 h-32' />
                <div className='text-xl font-merriweather max-w-4xl'>
                    Plan cater at minimal wastage.
                </div>
                <div>
                    The app shares web URL with all Hostel members, to update their attendence.
                </div>
                <Separator />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img alt="Hostelmate maintains boarding service" src="where-this-helps/accounting-plan-budget.png" className='w-32 h-32' />
                <div className='text-xl font-merriweather max-w-4xl'>
                    Plan cater at minimal wastage.
                </div>
                <div>
                    The app shares web URL with all Hostel members, to update their attendence.
                </div>
                <Separator />
            </div>
        </div>
    )
}

export default WhereThisHelps;
