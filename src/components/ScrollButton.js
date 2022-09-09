import React, {useEffect, useState} from 'react';
import { IoCaretUpCircle } from 'react-icons/io5';

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        });
    }, []);

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <div >
            {
                visible && (
                    <IoCaretUpCircle onClick={scrollToTop} className='scroll-button' />
                )
            }
        </div>
        
    );
}

export default ScrollButton;
