'use client'

import { useState } from 'react'
import { 
  Plus, 
  Eye, 
  Edit, 
  Copy, 
  Trash2, 
  MoreHorizontal,
  Palette,
  Star,
  Download
} from 'lucide-react'

const DesignTemplates = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const templates = [
    {
      id: 1,
      name: 'Modern Blue',
      category: 'Modern',
      description: 'Clean and professional design with blue accents',
      thumbnail: '/api/placeholder/300/200',
      isDefault: true,
      usageCount: 45,
      lastModified: '2025-01-10',
      colors: ['#3B82F6', '#1E40AF', '#FFFFFF']
    },
    {
      id: 2,
      name: 'Classic Gold',
      category: 'Classic',
      description: 'Traditional certificate design with gold borders',
      thumbnail: '/api/placeholder/300/200',
      isDefault: false,
      usageCount: 32,
      lastModified: '2025-01-08',
      colors: ['#F59E0B', '#D97706', '#FFFFFF']
    },
    {
      id: 3,
      name: 'Professional Green',
      category: 'Professional',
      description: 'Corporate style with green color scheme',
      thumbnail: '/api/placeholder/300/200',
      isDefault: false,
      usageCount: 28,
      lastModified: '2025-01-05',
      colors: ['#10B981', '#059669', '#FFFFFF']
    },
    {
      id: 4,
      name: 'Elegant Purple',
      category: 'Elegant',
      description: 'Sophisticated design with purple gradients',
      thumbnail: '/api/placeholder/300/200',
      isDefault: false,
      usageCount: 15,
      lastModified: '2025-01-03',
      colors: ['#8B5CF6', '#7C3AED', '#FFFFFF']
    },
    {
      id: 5,
      name: 'Minimalist White',
      category: 'Minimalist',
      description: 'Simple and clean white background design',
      thumbnail: '/api/placeholder/300/200',
      isDefault: false,
      usageCount: 22,
      lastModified: '2025-01-01',
      colors: ['#FFFFFF', '#6B7280', '#374151']
    },
    {
      id: 6,
      name: 'Bold Red',
      category: 'Bold',
      description: 'Eye-catching design with red accents',
      thumbnail: '/api/placeholder/300/200',
      isDefault: false,
      usageCount: 8,
      lastModified: '2024-12-28',
      colors: ['#EF4444', '#DC2626', '#FFFFFF']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'modern', name: 'Modern', count: templates.filter(t => t.category === 'Modern').length },
    { id: 'classic', name: 'Classic', count: templates.filter(t => t.category === 'Classic').length },
    { id: 'professional', name: 'Professional', count: templates.filter(t => t.category === 'Professional').length },
    { id: 'elegant', name: 'Elegant', count: templates.filter(t => t.category === 'Elegant').length },
    { id: 'minimalist', name: 'Minimalist', count: templates.filter(t => t.category === 'Minimalist').length },
    { id: 'bold', name: 'Bold', count: templates.filter(t => t.category === 'Bold').length }
  ]

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category.toLowerCase() === activeCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Design Templates</h1>
          <p className="text-gray-600">Create and manage certificate templates</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Create Template
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Templates</p>
              <p className="text-2xl font-bold text-gray-900">{templates.length}</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Most Used</p>
              <p className="text-2xl font-bold text-blue-600">Modern Blue</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Usage</p>
              <p className="text-2xl font-bold text-green-600">
                {templates.reduce((sum, t) => sum + t.usageCount, 0)}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-orange-600">{categories.length - 1}</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Template Preview */}
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Template Preview</p>
                </div>
              </div>
              {template.isDefault && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    Default
                  </span>
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{template.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{template.usageCount}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              
              {/* Color Palette */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500">Colors:</span>
                <div className="flex gap-1">
                  {template.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>Category: {template.category}</span>
                <span>Modified: {new Date(template.lastModified).toLocaleDateString()}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-lg transition-colors">
                  <Eye className="w-3 h-3" />
                  Preview
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-4">
            No templates match the selected category. Try selecting a different category or create a new template.
          </p>
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors mx-auto">
            <Plus className="w-4 h-4" />
            Create Template
          </button>
        </div>
      )}
    </div>
  )
}

export default DesignTemplates