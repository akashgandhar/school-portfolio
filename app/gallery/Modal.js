import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ children, onClose }) => {
    const modalRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Listen for isVisible changes to trigger onClose after animations
    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(onClose, 300); // Match the duration of the fade-out animation
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white p-5 rounded-lg transition-all duration-300 transform ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`} ref={modalRef}>

                <div className="transition-transform duration-300 transform scale-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;