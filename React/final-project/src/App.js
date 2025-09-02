
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { FarmerDashboard } from './components/FarmerDashboard';
import { ClientDashboard } from './components/ClientDashboard';
import { OrdersPage } from './components/OrdersPage';
import { ProductsPage } from './components/ProductsPage';
import PropTypes from 'prop-types';

// Define constants for user types and page types
const USER_TYPES = {
  GUEST: 'guest',
  FARMER: 'farmer',
  CLIENT: 'client'
};

const PAGE_TYPES = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  FARMER_DASHBOARD: 'farmer-dashboard',
  CLIENT_DASHBOARD: 'client-dashboard',
  PRODUCTS: 'products',
  ORDERS: 'orders',
  NOTIFICATIONS: 'notifications',
  PROFILE: 'profile',
  CART: 'cart',
  CHECKOUT: 'checkout'
};

function App() {
  const [currentPage, setCurrentPage] = useState(PAGE_TYPES.HOME);
  const [userType, setUserType] = useState(USER_TYPES.GUEST);
  const [notificationCount] = useState(3);

  /**
   * Handles navigation between pages
   * @param {string} page - The page to navigate to
   * @param {string} [userTypeOverride] - Optional user type override
   */
  const handleNavigate = (page, userTypeOverride) => {
    if (userTypeOverride) {
      setUserType(userTypeOverride);
    }
    setCurrentPage(page);
  };

  /**
   * Renders the current page based on the currentPage state
   * @returns {JSX.Element} The component to render
   */
  const renderCurrentPage = () => {
    switch (currentPage) {
      case PAGE_TYPES.HOME:
        return <HomePage onNavigate={handleNavigate} />;
      case PAGE_TYPES.LOGIN:
      case PAGE_TYPES.REGISTER:
        return <AuthPage onNavigate={handleNavigate} />;
      case PAGE_TYPES.FARMER_DASHBOARD:
        return <FarmerDashboard onNavigate={handleNavigate} />;
      case PAGE_TYPES.CLIENT_DASHBOARD:
        return <ClientDashboard onNavigate={handleNavigate} />;
      case PAGE_TYPES.PRODUCTS:
        return <ProductsPage onNavigate={handleNavigate} />;
      case PAGE_TYPES.ORDERS:
        return <OrdersPage userType={userType} onNavigate={handleNavigate} />;
      case PAGE_TYPES.NOTIFICATIONS:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h1>
              <p className="text-gray-600 mb-6">Stay updated with your latest notifications and alerts from the AgriMarket platform.</p>
              <div className="bg-white rounded-lg border p-4 mb-6">
                <p className="text-sm text-gray-500 mb-2">Recent notifications will appear here</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3 p-2 bg-green-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900">New order received</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-blue-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900">Product approved</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNavigate(
                  userType === USER_TYPES.FARMER
                    ? PAGE_TYPES.FARMER_DASHBOARD
                    : PAGE_TYPES.CLIENT_DASHBOARD
                )}
                className="text-primary hover:underline"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        );
      case PAGE_TYPES.PROFILE:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Settings</h1>
              <p className="text-gray-600 mb-6">Manage your profile information, account settings, and preferences.</p>
              <div className="bg-white rounded-lg border p-6 mb-6 text-left">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900">
                      {userType === USER_TYPES.FARMER ? 'Green Valley Farm' : 'John Smith'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">
                      {userType === USER_TYPES.FARMER ? 'farmer@greenvalley.com' : 'john@email.com'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        currentPage={currentPage}
        userType={userType}
        notificationCount={notificationCount}
        onNavigate={handleNavigate}
      />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

// Add PropTypes for type checking in development
App.propTypes = {
  // PropTypes would be defined here if this component received props
  // For this example, no props are passed to App from a parent
};

export default App;
