'use client'

import { 
  Building, 
  Users, 
  Crown, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  Edit,
  Trash2,
  Plus,
  Shield,
  Key,
  Globe
} from 'lucide-react'

const OrgAccount = () => {
  const organizationInfo = {
    name: 'CertifyEM Organization',
    type: 'Educational Institution',
    industry: 'Education & Training',
    size: '50-100 employees',
    founded: '2020',
    website: 'https://certifyem.com',
    email: 'admin@certifyem.com',
    phone: '+1 (555) 123-4567',
    address: '123 Education Street, Learning City, LC 12345',
    plan: 'Pro Plan',
    planExpiry: '2025-02-01',
    totalUsers: 12,
    activeUsers: 8,
    totalTrainees: 145,
    certificatesIssued: 324
  }

  const teamMembers = [
    {
      id: 1,
      name: 'James Doe',
      email: 'james.doe@certifyem.com',
      role: 'Organization Admin',
      status: 'Active',
      lastLogin: '2025-01-12',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@certifyem.com',
      role: 'Certificate Manager',
      status: 'Active',
      lastLogin: '2025-01-11',
      avatar: 'SW'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@certifyem.com',
      role: 'Trainee Coordinator',
      status: 'Active',
      lastLogin: '2025-01-10',
      avatar: 'MJ'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      email: 'lisa.chen@certifyem.com',
      role: 'Content Manager',
      status: 'Inactive',
      lastLogin: '2025-01-05',
      avatar: 'LC'
    }
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Organization Admin':
        return 'bg-purple-100 text-purple-800'
      case 'Certificate Manager':
        return 'bg-blue-100 text-blue-800'
      case 'Trainee Coordinator':
        return 'bg-green-100 text-green-800'
      case 'Content Manager':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Organization Account</h1>
          <p className="text-gray-600">Manage your organization settings and team members</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Edit className="w-4 h-4" />
          Edit Organization
        </button>
      </div>

      {/* Organization Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Organization Info */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Organization Information</h2>
            <button className="text-teal-500 hover:text-teal-600">
              <Edit className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Organization Name</p>
                  <p className="font-medium text-gray-900">{organizationInfo.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium text-gray-900">{organizationInfo.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Industry</p>
                  <p className="font-medium text-gray-900">{organizationInfo.industry}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Organization Size</p>
                  <p className="font-medium text-gray-900">{organizationInfo.size}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{organizationInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{organizationInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Website</p>
                  <p className="font-medium text-teal-600">{organizationInfo.website}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{organizationInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan & Stats */}
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold text-gray-900">Current Plan</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-bold text-gray-900">{organizationInfo.plan}</p>
                <p className="text-sm text-gray-600">Expires on {new Date(organizationInfo.planExpiry).toLocaleDateString()}</p>
              </div>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Users</span>
                <span className="font-medium text-gray-900">{organizationInfo.totalUsers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Users</span>
                <span className="font-medium text-green-600">{organizationInfo.activeUsers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Trainees</span>
                <span className="font-medium text-gray-900">{organizationInfo.totalTrainees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Certificates Issued</span>
                <span className="font-medium text-blue-600">{organizationInfo.certificatesIssued}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Invite Member
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Member</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Last Login</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{member.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(member.status)}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(member.lastLogin).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded" title="Edit Member">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Manage Permissions">
                        <Key className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Remove Member">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrgAccount
    