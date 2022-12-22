import './headcontent.css'
import React, { useState } from 'react';
import EmailInput from '../../../Main/MainHome/section-home/Component/EmailInput';

const HeadContent = () => {

    return (
        <div className='head-content'>
            <div className="head-content__body">
                <h2 className="body-content__title">Unlimited movies, TV shows and more.</h2>
                <h3 className='body-content__sub-title'>Watch anywhere. Cancel anytime.</h3>
                <EmailInput/>
            </div>
        </div>
    )
}

export default HeadContent;