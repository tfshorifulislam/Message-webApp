import React from 'react';
import ChatRightPannel from './ChatRightPannel';
import ChatInitPage from './ChatInitPage';

const ChatLayout = () => {
    return (
        <div className='max-w-6xl mx-auto flex border'>
            <div>
                <ChatRightPannel/>
            </div>
            <div className='flex min-w-0 h-screen flex-1 justify-center items-center'>
               <ChatInitPage/>
            </div>
        </div>
    );
};

export default ChatLayout;