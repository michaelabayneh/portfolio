'use client'

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Eye, 
  MoreHorizontal,
  Award,
  Calendar,
  User,
  FileText
} from 'lucide-react'

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const certificates = [
    {
      id: 'CERT-2026-00579',
      trainee: 'Lisa Wang',
      course: 'Cybersecurity Basics',
      issueDate: '2025-01-12',
      expiryDate: '2027-01-12',
      status: 'Active',
      template: 'Modern Blue',
      avatar: 'LW'
    },
    {
      id: 'CERT-2026-00578',
      trainee: 'Henry Foster',
      course: 'Cybersecurity Basics',
      issueDate: '2025-01-11',
      expiryDate: '2027-01-11',
      status: 'Active',
      template: 'Classic Gold',
      avatar: 'HF'
    },
    {
      id: 'CERT-2026-00577',
      trainee: 'Sarah Brooks',
      course: 'Digital Marketing',
      issueDate: '2025-01-10',
      expiryDate: '2027-01-10',
      status: 'Active',
      template: 'Modern Blue',
      avatar: 'SB'
    },
    {
      id: 'CERT-2026-00576',
      trainee: 'John Smith',
      course: 'Data Science Fundamentals',
      issueDate: '2025-01-09',
      expiryDate: '2027-01-09',
      status: 'Active',
      template: 'Professional Green',
      avatar: 'JS'
    },
    {
      id: 'CERT-2026-00575',
      trainee: 'Emily Chen',
      course: 'Web Development',
      issueDate: '2025-01-08',
      expiryDate: '2027-01-08',
      status: 'Revoked',
      template: 'Modern Blue',
      avatar: 'EC'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Expired':
        return 'bg-red-100 text-red-800'
      case 'Revoked':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredCertificates = certificates.filter(cert =>
    cert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.trainee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.course.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Certificates</h1>
          <p className="text-gray-600">Manage and track issued certificates</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Generate Certificate
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Certificates</p>
              <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-bold text-green-600">
                {certificates.filter(c => c.status === 'Active').length}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-purple-600">4</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revoked</p>
              <p className="text-2xl font-bold text-red-600">
                {certificates.filter(c => c.status === 'Revoked').length}
              </p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Certificate ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Trainee</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Course</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Issue Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Expiry Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Template</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCertificates.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-500" />
                      <span className="font-medium text-gray-900">{certificate.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">{certificate.avatar}</span>
                      </div>
                      <span className="text-sm text-gray-900">{certificate.trainee}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900">{certificate.course}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(certificate.issueDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(certificate.expiryDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(certificate.status)}`}>
                      {certificate.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{certificate.template}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded" title="View Certificate">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Download Certificate">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certificate Preview Modal would go here */}
    </div>
  )
}

export default Certificates