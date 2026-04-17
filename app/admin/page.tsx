'use client'

import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Trainees from './components/Trainees'
import Certificates from './components/Certificates'
import DesignTemplates from './components/DesignTemplates'
import PaymentsUsage from './components/PaymentsUsage'
import Settings from './components/Settings'
import HelpSupport from './components/HelpSupport'
import OrgAccount from './components/OrgAccount'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'trainees':
        return <Trainees />
      case 'certificates':
        return <Certificates />
      case 'design-templates':
        return <DesignTemplates />
      case 'payments-usage':
        return <PaymentsUsage />
      case 'settings':
        return <Settings />
      case 'help-support':
        return <HelpSupport />
      case 'org-account':
        return <OrgAccount />
      default:
        return <Dashboard />
    }
  }

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center px-4">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Loading Dashboard...
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Please wait while we prepare your workspace
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`h-screen flex ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} overflow-hidden`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out lg:transition-none`}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
        {/* Header */}
        <div className="flex-shrink-0">
          <Header 
            darkMode={darkMode} 
            onMenuClick={() => setSidebarOpen(true)}
          />
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <main className={`${activeTab === 'dashboard' ? '' : 'p-4 sm:p-6'}`}>
            <div className="animate-fade-in">
              {renderContent()}
            </div>
          </main>
          
          {/* Footer */}
          <div className="flex-shrink-0">
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  )
}