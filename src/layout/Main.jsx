import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoryNavbar from '../components/CategoryNavbar';
import Footer from '../components/Footer';
import TabMenu from '../components/TabMenu';

const Main = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isCategoryPage = location.pathname.startsWith('/filter/');
  const isProductPage = location.pathname.startsWith('/product');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar and CategoryNavbar visibility */}
      {isMainPage && (
        <>
          <Navbar />
          <CategoryNavbar />
        </>
      )}
      {isCategoryPage && (
        <>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <CategoryNavbar />
        </>
      )}
      {isProductPage && (
        <>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="hidden md:block">
            <CategoryNavbar />
          </div>
        </>
      )}

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer and TabMenu */}
      <div className="mt-32 hidden md:block">
        <Footer />
      </div>
      <div className="md:hidden">
        <TabMenu />
      </div>
    </div>
  );
};  

export default Main;
