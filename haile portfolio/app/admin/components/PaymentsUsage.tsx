'use client'

import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Download,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

const PaymentsUsage = () => {
  const paymentHistory = [
    {
      id: 'PAY-2025-001',
      date: '2025-01-01',
      amount: 49.99,
      status: 'Completed',
      description: 'Monthly Subscription - Pro Plan',
      method: 'Credit Card ****1234'
    },
    {
      id: 'PAY-2024-012',
      date: '2024-12-01',
      amount: 49.99,
      status: 'Completed',
      description: 'Monthly Subscription - Pro Plan',
      method: 'Credit Card ****1234'
    },
    {
      id: 'PAY-2024-011',
      date: '2024-11-01',
      amount: 49.99,
      status: 'Completed',
      description: 'Monthly Subscription - Pro Plan',
      method: 'Credit Card ****1234'
    },
    {
      id: 'PAY-2024-010',
      date: '2024-10-15',
      amount: 25.00,
      status: 'Failed',
      description: 'Additional Certificate Credits',
      method: 'Credit Card ****1234'
    }
  ]

  const usageStats = [
    {
      label: 'Certificates Generated',
      current: 124,
      limit: 500,
      percentage: 24.8
    },
    {
      label: 'Active Trainees',
      current: 45,
      limit: 100,
      percentage: 45
    },
    {
      label: 'Storage Used',
      current: 2.3,
      limit: 10,
      percentage: 23,
      unit: 'GB'
    },
    {
      label: 'API Calls',
      current: 1250,
      limit: 5000,
      percentage: 25
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'Failed':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Failed':
        return 'bg-red-100 text-red-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments & Usage</h1>
          <p className="text-gray-600">Monitor your subscription and usage statistics</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Download className="w-4 h-4" />
          Download Invoice
        </button>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
            <p className="text-teal-100 mb-4">
              Full access to all features with priority support
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-teal-100">Current Balance</p>
                <p className="text-2xl font-bold">$45.75</p>
              </div>
              <div>
                <p className="text-sm text-teal-100">Next Billing</p>
                <p className="text-lg font-semibold">Feb 1, 2025</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold mb-2">$49.99</p>
            <p className="text-teal-100">per month</p>
            <button className="mt-4 bg-white text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Manage Plan
            </button>
          </div>
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Usage Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageStats.map((stat, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                <span className="text-xs text-gray-500">
                  {stat.current}{stat.unit || ''} / {stat.limit}{stat.unit || ''}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    stat.percentage > 80 
                      ? 'bg-red-500' 
                      : stat.percentage > 60 
                      ? 'bg-yellow-500' 
                      : 'bg-green-500'
                  }`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">{stat.percentage.toFixed(1)}% used</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
          <button className="text-teal-500 text-sm font-medium hover:text-teal-600">
            Update
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Visa ending in 1234</p>
            <p className="text-sm text-gray-600">Expires 12/2027</p>
          </div>
          <div className="ml-auto">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Default
            </span>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
            <button className="text-teal-500 text-sm font-medium hover:text-teal-600">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Transaction ID</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Description</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Amount</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{payment.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-3 h-3" />
                      {new Date(payment.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{payment.description}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">${payment.amount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(payment.status)}
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{payment.method}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$49.99</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Year to Date</p>
              <p className="text-2xl font-bold text-gray-900">$49.99</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">$174.97</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentsUsage