'use client'

import { 
  LayoutDashboard, 
  Users, 
  Award, 
  Palette, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  Building,
  Moon,
  Sun,
  ChevronDown,
  Shield,
  Zap
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
  onClose?: () => void
}

const Sidebar = ({ activeTab, setActiveTab, darkMode, setDarkMode, onClose }: SidebarProps) => {
  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard, 
      badge: null,
      description: 'Overview and analytics'
    },
    { 
      id: 'trainees', 
      label: 'Trainees', 
      icon: Users,
      badge: '145',
      description: 'Manage trainees'
    },
    { 
      id: 'certificates', 
      label: 'Certificates', 
      icon: Award,
      badge: '23',
      description: 'Certificate management'
    },
    { 
      id: 'design-templates', 
      label: 'Design Templates', 
      icon: Palette,
      badge: null,
      description: 'Template customization'
    },
    { 
      id: 'payments-usage', 
      label: 'Payments & Usage', 
      icon: CreditCard,
      badge: null,
      description: 'Billing and usage'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings,
      badge: null,
      description: 'System preferences'
    },
    { 
      id: 'help-support', 
      label: 'Help & Support', 
      icon: HelpCircle,
      badge: null,
      description: 'Get assistance'
    },
    { 
      id: 'org-account', 
      label: 'Org Account', 
      icon: Building,
      badge: null,
      description: 'Organization settings'
    },
  ]

  return (
    <div className={`w-64 h-screen ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`}>
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={onClose}
          className={`p-2 rounded-lg transition-colors ${
            darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Brand Section */}
      <div className={`p-4 lg:p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex-shrink-0`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-base lg:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              CertifyEM
            </h1>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Admin Dashboard
            </p>
          </div>
        </div>
        
        {/* Pro Badge */}
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg">
          <Zap className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Pro Plan</span>
        </div>
      </div>

      {/* Navigation Menu - Scrollable */}
      <nav className="flex-1 p-3 lg:p-4 overflow-y-auto">
        <div className="space-y-1 lg:space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
                onClose?.() // Close sidebar on mobile after selection
              }}
              className={`w-full group relative flex items-center gap-3 px-3 py-2 lg:py-3 rounded-xl text-left transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/25'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                activeTab === item.id ? 'scale-110' : 'group-hover:scale-105'
              }`} />
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium truncate block">{item.label}</span>
                <p className={`text-xs mt-0.5 truncate ${
                  activeTab === item.id 
                    ? 'text-teal-100' 
                    : darkMode 
                    ? 'text-gray-500' 
                    : 'text-gray-500'
                }`}>
                  {item.description}
                </p>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                  activeTab === item.id
                    ? 'bg-white/20 text-white'
                    : 'bg-teal-100 text-teal-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom Section - Fixed */}
      <div className={`p-3 lg:p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} space-y-3 lg:space-y-4 flex-shrink-0`}>
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            {darkMode ? (
              <Moon className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            ) : (
              <Sun className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            )}
            <span className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 flex-shrink-0 ${
              darkMode ? 'bg-teal-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Organization Info */}
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2 min-w-0">
              <Building className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <div className="min-w-0">
                <p className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  CertifyEM Org
                </p>
                <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Admin Access
                </p>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 flex-shrink-0 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`} />
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
          <span className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            All systems operational
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar