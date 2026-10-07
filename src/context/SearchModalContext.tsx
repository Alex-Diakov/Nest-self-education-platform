import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchModalContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchModalContext = createContext<SearchModalContextType | undefined>(undefined);

export const SearchModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => setIsOpen(false);

  return (
    <SearchModalContext.Provider value={{ isOpen, openSearch, closeSearch }}>
      {children}
    </SearchModalContext.Provider>
  );
};

export const useSearchModal = (): SearchModalContextType => {
  const context = useContext(SearchModalContext);
  if (!context) {
    throw new Error('useSearchModal must be used within a SearchModalProvider');
  }
  return context;
};
