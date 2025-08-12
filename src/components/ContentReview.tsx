import React, { useState, useEffect } from 'react';
import { CheckIcon, XMarkIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  filename: string;
  type: 'homepage' | 'service' | 'location' | 'blog';
  status: 'draft' | 'review' | 'approved' | 'published';
  lastModified: string;
  wordCount: number;
  metaDescription: string;
  keywords: string[];
  author: string;
}

interface ContentReviewProps {
  contentItems?: ContentItem[];
}

const ContentReview: React.FC<ContentReviewProps> = ({ contentItems = [] }) => {
  const [items, setItems] = useState<ContentItem[]>(contentItems);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const filteredItems = items.filter(item => 
    filter === 'all' || item.status === filter || item.type === filter
  );

  const handleApprove = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'approved' as const } : item
    ));
  };

  const handleReject = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'draft' as const } : item
    ));
  };

  const handleEdit = (item: ContentItem) => {
    setSelectedItem(item);
    // Open editor - in a real app this would navigate to an editor
    console.log('Opening editor for:', item.filename);
  };

  const handlePreview = (item: ContentItem) => {
    setSelectedItem(item);
    setIsPreviewOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'published': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'homepage': return '🏠';
      case 'service': return '⚙️';
      case 'location': return '📍';
      case 'blog': return '📝';
      default: return '📄';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Review Dashboard</h1>
        <p className="text-gray-600">Review and manage content for Beach Bird Studios</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {['all', 'draft', 'review', 'approved', 'published', 'homepage', 'service', 'location', 'blog'].map(filterOption => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              filter === filterOption
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>

      {/* Content List */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 gap-4 p-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No content items found</p>
              <p className="text-sm">Content will appear here once generated</p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.filename}</p>
                    <p className="text-sm text-gray-700 mb-3">{item.metaDescription}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span>Words: {item.wordCount}</span>
                      <span>Modified: {item.lastModified}</span>
                      <span>Author: {item.author}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.keywords.map(keyword => (
                        <span key={keyword} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handlePreview(item)}
                      className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                      title="Preview"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded"
                      title="Edit"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    {item.status === 'review' && (
                      <>
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded"
                          title="Approve"
                        >
                          <CheckIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                          title="Reject"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{selectedItem.title}</h2>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 italic mb-4">{selectedItem.metaDescription}</p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm text-gray-500">Content preview would be rendered here</p>
                  <p className="text-xs text-gray-400 mt-2">File: {selectedItem.filename}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentReview;