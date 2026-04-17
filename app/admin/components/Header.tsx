'use client'

import { useState } from 'react'
import { Search, Bell, ChevronDown, User, Settings, LogOut, Shield, Menu } from 'lucide-react'
import Profile from './Profile'

interface HeaderProps {
  darkMode: boolean
  onMenuClick?: () => void
}

const Header = ({ darkMode, onMenuClick }: HeaderProps) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications] = useState([
    {
      id: 1,
      title: 'New certificate generated',
      message: 'CERT-2025-00123 has been created for John Smith',
      time: '2 minutes ago',
      unread: true,
      type: 'certificate'
    },
    {
      id: 2,
      title: 'Trainee registered',
      message: 'Sarah Wilson has been added to Cybersecurity Basics',
      time: '1 hour ago',
      unread: true,
      type: 'trainee'
    },
    {
      id: 3,
      title: 'Payment processed',
      message: 'Monthly subscription payment successful',
      time: '2 hours ago',
      unread: false,
      type: 'payment'
    }
  ])

  const unreadCount = notifications.filter(n => n.unread).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'certificate': return '🏆'
      case 'trainee': return '👥'
      case 'payment': return '💳'
      default: return '📝'
    }
  }

  return (
    <>
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-4 sm:px-6 py-4 sticky top-0 z-40 backdrop-blur-sm bg-opacity-95`}>
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo - Hidden on small screens, shown on medium+ */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                CertifyEM
              </span>
            </div>
          </div>

          {/* Search Bar - Responsive */}
          <div className="flex-1 max-w-md mx-4 sm:mx-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-teal-500 transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-300 text-sm sm:text-base ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white'
                } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:scale-105`}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">{unreadCount}</span>
                  </div>
                )}
              </button>

              {/* Notifications Dropdown - Responsive */}
              {showNotifications && (
                <div className={`absolute right-0 mt-2 w-80 sm:w-96 max-w-[calc(100vw-2rem)] rounded-xl shadow-lg border animate-fade-in ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Notifications
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      You have {unreadCount} unread notifications
                    </p>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        notification.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}>
                        <div className="flex items-start gap-3">
                          <span className="text-lg flex-shrink-0">{getNotificationIcon(notification.type)}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                              {notification.title}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                              {notification.message}
                            </p>
                            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full text-center text-teal-500 hover:text-teal-600 text-sm font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className={`flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">DS</span>
                </div>
                <div className="text-right hidden md:block">
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Dagim Sewnet
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Organization Admin
                  </p>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  showProfileDropdown ? 'rotate-180' : ''
                } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>

              {/* Profile Dropdown - Responsive */}
              {showProfileDropdown && (
                <div className={`absolute right-0 mt-2 w-64 sm:w-72 max-w-[calc(100vw-2rem)] rounded-xl shadow-lg border animate-scale-in ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-semibold">DS</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                          Dagim Sewnet
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                          dagim.sewnet@certifyem.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button
                      onClick={() => {
                        setShowProfile(true)
                        setShowProfileDropdown(false)
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm">Profile Settings</span>
                    </button>
                    <button className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    }`}>
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Account Settings</span>
                    </button>
                    <div className={`border-t my-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                    <button className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      darkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-100 text-red-600'
                    }`}>
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Profile Modal */}
      {showProfile && (
        <Profile 
          darkMode={darkMode} 
          onClose={() => setShowProfile(false)} 
        />
      )}

      {/* Click outside to close dropdowns */}
      {(showProfileDropdown || showNotifications) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setShowProfileDropdown(false)
            setShowNotifications(false)
          }}
        />
      )}
    </>
  )
}

export default Header