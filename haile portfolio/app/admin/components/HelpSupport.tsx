'use client'

import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Book, 
  Video, 
  FileText,
  ExternalLink,
  ChevronRight,
  Clock,
  CheckCircle
} from 'lucide-react'

const HelpSupport = () => {
  const faqItems = [
    {
      question: 'How do I generate a certificate for a trainee?',
      answer: 'Navigate to the Certificates section and click "Generate Certificate". Select the trainee, choose a template, and click generate.',
      category: 'Certificates'
    },
    {
      question: 'Can I customize certificate templates?',
      answer: 'Yes, go to Design Templates section where you can create custom templates or modify existing ones.',
      category: 'Templates'
    },
    {
      question: 'How do I add new trainees to my organization?',
      answer: 'Go to the Trainees section and click "Add Trainee". Fill in their information and assign them to courses.',
      category: 'Trainees'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.',
      category: 'Billing'
    },
    {
      question: 'How can I export my certificate data?',
      answer: 'You can export certificate data from the Certificates section using the export button in the top right.',
      category: 'Data'
    }
  ]

  const supportTickets = [
    {
      id: 'TICK-2025-001',
      subject: 'Certificate template not loading',
      status: 'Open',
      priority: 'High',
      created: '2025-01-12',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'TICK-2025-002',
      subject: 'Billing question about pro plan',
      status: 'Resolved',
      priority: 'Medium',
      created: '2025-01-10',
      lastUpdate: '1 day ago'
    },
    {
      id: 'TICK-2025-003',
      subject: 'API integration help needed',
      status: 'In Progress',
      priority: 'Low',
      created: '2025-01-08',
      lastUpdate: '3 days ago'
    }
  ]

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up your organization',
      type: 'Documentation',
      icon: Book,
      link: '#'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      type: 'Video',
      icon: Video,
      link: '#'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers',
      type: 'API',
      icon: FileText,
      link: '#'
    },
    {
      title: 'Template Design Guide',
      description: 'Learn how to create beautiful certificate templates',
      type: 'Guide',
      icon: Book,
      link: '#'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-red-100 text-red-800'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'Resolved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600'
      case 'Medium':
        return 'text-yellow-600'
      case 'Low':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Get help and find answers to common questions</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Start Live Chat</p>
            <p className="text-sm text-gray-600">Get instant help from our team</p>
          </div>
        </button>
        
        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Email Support</p>
            <p className="text-sm text-gray-600">Send us a detailed message</p>
          </div>
        </button>
        
        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Schedule Call</p>
            <p className="text-sm text-gray-600">Book a call with our experts</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            <button className="text-teal-500 text-sm font-medium hover:text-teal-600">
              View All
            </button>
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search FAQ..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">{item.question}</p>
                    <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full mt-1 inline-block">
                      {item.category}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tickets */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Your Support Tickets</h2>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors">
              New Ticket
            </button>
          </div>
          
          <div className="space-y-3">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{ticket.subject}</p>
                    <p className="text-sm text-gray-600">#{ticket.id}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority} Priority
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {ticket.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <resource.icon className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900">{resource.title}</p>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-teal-500" />
                </div>
                <p className="text-sm text-gray-600">{resource.description}</p>
                <span className="text-xs text-gray-500">{resource.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-teal-100">support@certifyem.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-teal-100">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <div>
              <p className="font-medium">Hours</p>
              <p className="text-sm text-teal-100">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpSupport