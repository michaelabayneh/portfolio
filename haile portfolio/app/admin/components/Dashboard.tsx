'use client'

import { useState, useEffect } from 'react'
import { 
  UserPlus, 
  FileText, 
  Palette, 
  CreditCard,
  Users,
  DollarSign,
  ChevronRight,
  Calendar,
  TrendingUp,
  Award,
  Activity,
  Clock,
  ArrowUp,
  ArrowDown,
  Eye,
  Download,
  Plus,
  BarChart3
} from 'lucide-react'

const Dashboard = () => {
  const [animatedStats, setAnimatedStats] = useState({
    totalTrainees: 0,
    activeCertificates: 0,
    monthlyRevenue: 0,
    completionRate: 0
  })

  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [showQuickActions, setShowQuickActions] = useState(false)

  const finalStats = {
    totalTrainees: 145,
    activeCertificates: 324,
    monthlyRevenue: 4575,
    completionRate: 87
  }

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          totalTrainees: Math.floor(finalStats.totalTrainees * progress),
          activeCertificates: Math.floor(finalStats.activeCertificates * progress),
          monthlyRevenue: Math.floor(finalStats.monthlyRevenue * progress),
          completionRate: Math.floor(finalStats.completionRate * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedStats(finalStats)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timeout = setTimeout(animateStats, 500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowQuickActions(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const quickActions = [
    {
      title: 'Register Trainee',
      description: 'Add new trainees to your organization',
      icon: UserPlus,
      color: 'from-green-500 to-emerald-600',
      buttonText: 'Register Trainee',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      count: '+12 this week',
      onClick: () => alert('Navigate to Register Trainee')
    },
    {
      title: 'Generate Certificates',
      description: 'Create certificates for completed training',
      icon: FileText,
      color: 'from-blue-500 to-cyan-600',
      buttonText: 'Generate Certificates',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      count: '23 pending',
      onClick: () => alert('Navigate to Generate Certificates')
    },
    {
      title: 'Design Template',
      description: 'Customize certificate templates',
      icon: Palette,
      color: 'from-orange-500 to-red-600',
      buttonText: 'Design Template',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      count: '6 templates',
      onClick: () => alert('Navigate to Design Templates')
    },
    {
      title: 'Manage Payments',
      description: 'View billing and payment information',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-600',
      buttonText: 'Manage Payments',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      count: '$45.75 balance',
      onClick: () => alert('Navigate to Payments')
    }
  ]

  const statsCards = [
    {
      title: 'Total Trainees',
      value: animatedStats.totalTrainees,
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      onClick: () => setSelectedCard('trainees')
    },
    {
      title: 'Active Certificates',
      value: animatedStats.activeCertificates,
      change: '+8%',
      changeType: 'increase',
      icon: Award,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      onClick: () => setSelectedCard('certificates')
    },
    {
      title: 'Monthly Revenue',
      value: `$${animatedStats.monthlyRevenue.toLocaleString()}`,
      change: '+23%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      onClick: () => setSelectedCard('revenue')
    },
    {
      title: 'Completion Rate',
      value: `${animatedStats.completionRate}%`,
      change: '-2%',
      changeType: 'decrease',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      onClick: () => setSelectedCard('completion')
    }
  ]

  const recentTrainees = [
    {
      name: 'Lisa Wang',
      course: 'Cybersecurity Basics',
      time: '5 minutes ago',
      avatar: 'LW',
      status: 'active',
      progress: 85
    },
    {
      name: 'Henry Foster',
      course: 'Cybersecurity Basics',
      time: '20 minutes ago',
      avatar: 'HF',
      status: 'completed',
      progress: 100
    },
    {
      name: 'Sarah Brooks',
      course: 'Digital Marketing',
      time: '30 minutes ago',
      avatar: 'SB',
      status: 'active',
      progress: 65
    },
    {
      name: 'John Smith',
      course: 'Data Science Fundamentals',
      time: '1 hour ago',
      avatar: 'JS',
      status: 'active',
      progress: 45
    }
  ]

  const recentCertificates = [
    {
      id: 'CERT-2026-00579',
      trainee: 'Lisa Wang',
      time: '5 minutes ago',
      status: 'generated'
    },
    {
      id: 'CERT-2026-00578',
      trainee: 'Henry Foster',
      time: '20 minutes ago',
      status: 'sent'
    },
    {
      id: 'CERT-2026-00577',
      trainee: 'Sarah Brooks',
      time: '30 minutes ago',
      status: 'generated'
    },
    {
      id: 'CERT-2026-00576',
      trainee: 'John Smith',
      time: '1 hour ago',
      status: 'pending'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'generated': return 'bg-green-100 text-green-800'
      case 'sent': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6 lg:space-y-8 p-4 sm:p-6">
      {/* Welcome Section */}
      <div className="animate-slide-up">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Dagim! 👋
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Here's what's happening with your organization today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsCards.map((stat, index) => (
          <div 
            key={index} 
            onClick={stat.onClick}
            className={`bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 card-hover animate-slide-up cursor-pointer transform transition-all duration-300 ${
              selectedCard === stat.title.toLowerCase().replace(' ', '') ? 'ring-2 ring-teal-500 scale-105' : 'hover:scale-105'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1 truncate">{stat.title}</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <div className="flex items-center gap-1">
                  {stat.changeType === 'increase' ? (
                    <ArrowUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 flex-shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 hidden sm:inline">vs last month</span>
                </div>
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.bgColor} rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 flex-shrink-0 ml-2`}>
                <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className={`animate-slide-up transition-all duration-500 ${showQuickActions ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-teal-500" />
            Quick Actions
          </h2>
          <button className="text-teal-500 hover:text-teal-600 text-sm font-medium flex items-center gap-1 self-start sm:self-auto">
            <Plus className="w-4 h-4" />
            Add Custom Action
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 card-hover group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <action.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-3">
                {action.description}
              </p>
              <p className="text-xs text-teal-600 text-center mb-4 font-medium">
                {action.count}
              </p>
              <button 
                onClick={action.onClick}
                className={`w-full ${action.buttonColor} text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 button-modern transform hover:scale-105 text-sm`}
              >
                {action.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Trainees */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 card-hover animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-500" />
              Recent Activity
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Eye className="w-4 h-4 text-gray-500" />
              </button>
              <button className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors">
                View All
              </button>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {recentTrainees.map((trainee, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-white text-xs sm:text-sm font-semibold">{trainee.avatar}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{trainee.name}</p>
                    <p className="text-xs text-gray-500 truncate">{trainee.course}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-teal-500 h-1 rounded-full transition-all duration-500" 
                          style={{ width: `${trainee.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{trainee.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 flex-shrink-0">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(trainee.status)}`}>
                    {trainee.status}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span className="hidden sm:inline">{trainee.time}</span>
                    <span className="sm:hidden">{trainee.time.split(' ')[0]}m</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors hidden sm:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Certificates */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 card-hover animate-slide-up" style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              Recent Certificates
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Download className="w-4 h-4 text-gray-500" />
              </button>
              <button className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors">
                View All
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            {recentCertificates.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{cert.id}</p>
                    <p className="text-xs text-gray-500 truncate">for {cert.trainee}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 flex-shrink-0">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:inline">{cert.time}</span>
                  <span className="text-xs text-gray-500 sm:hidden">{cert.time.split(' ')[0]}m</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors hidden sm:block" />
                </div>
              </div>
            ))}
          </div>

          {/* Usage Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-gray-700">Trainee Reqs</span>
              </div>
              <div className="text-lg font-bold text-gray-900">1.24K</div>
              <div className="text-xs text-gray-500">/ 7000</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000" style={{ width: '18%' }}></div>
              </div>
            </div>
            
            <div className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Payment Balance</span>
              </div>
              <div className="text-lg font-bold text-gray-900">$45.75</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard