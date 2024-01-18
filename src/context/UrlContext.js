import React, { createContext, useContext, useState } from 'react';

// Corrected context name to UrlContext
const UrlContext = createContext();

export const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    return (
        <UrlContext.Provider value={{url,  setUrl}}>
            {children}
        </UrlContext.Provider>
    );
}

// Corrected hook name to useUrlContext
export const useUrlContext = () => {
    return useContext(UrlContext);
};
