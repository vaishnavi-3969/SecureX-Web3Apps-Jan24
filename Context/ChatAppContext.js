"use client"
import React from 'react'

import { CheckIfWalletConnected,
connectWallet,
connectingWithContract
} from '@/utils/apiFeature';

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children}) => {
    const title = "Hey welcome to SecureChatX";
    return (
        <ChatAppContext.Provider value={{title}}>
            {children}
        </ChatAppContext.Provider>
    );
}