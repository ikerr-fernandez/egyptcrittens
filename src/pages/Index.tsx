import React, { useState } from 'react';
import { AppProvider } from '../contexts/AppContext';
import { Page } from '../types';
import HeroPage from './HeroPage';
import CatalogPage from './CatalogPage';
import ConfiguratorPage from './ConfiguratorPage';
import MissionPage from './MissionPage';
import InfrastructurePage from './InfrastructurePage';
import CheckoutPage from './CheckoutPage';

const Index: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('hero');

    const renderPage = () => {
        switch (currentPage) {
            case 'hero':
                return <HeroPage />;
            case 'catalog':
                return <CatalogPage />;
            case 'configurator':
                return <ConfiguratorPage />;
            case 'mission':
                return <MissionPage />;
            case 'infrastructure':
                return <InfrastructurePage />;
            case 'checkout':
                return <CheckoutPage />;
            default:
                return <HeroPage />;
        }
    };

    return (
        <AppProvider initialPage={currentPage} onPageChange={setCurrentPage}>
           {renderPage()}
        </AppProvider>
    );
};

export default Index;
