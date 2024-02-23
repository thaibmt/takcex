import React from 'react';

import Content from './Content';
import ContactBox from './ContactBox/ContactBox';

WhyChooseUs.propTypes = {

};

function WhyChooseUs(props) {
    return (
        <div className='flex justify-center mt-20'>
            <div className="md:max-w-[1240px] w-full z-[2] relative px-[15px]">
                <Content />
                <ContactBox />
                <img
                    className="mx-auto mt-[-5%]"
                    src="/images/tikcex.svg"
                    alt="tikcex image"
                />
            </div>
        </div>
    );
}

export default WhyChooseUs;
