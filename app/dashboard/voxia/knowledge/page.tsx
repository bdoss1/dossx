'use client'

import { useState, useEffect, useCallback } from 'react'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaInput } from '@/components/voxia/VoxiaInput'

interface KnowledgeSource {
  id: string
  type: 'URL' | 'FILE' | 'MANUAL' | 'QA'
  title: string
  location: string
  content?: string
  status: 'PENDING' | 'PROCESSING' | 'READY' | 'ERROR'
  errorMessage?: string
  createdAt: string
}

export default function KnowledgePage() {
  const [sources, setSources] = useState<KnowledgeSource[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState<'url' | 'text' | 'qa' | 'file'>('url')

  // Form states
  const [urlInput, setUrlInput] = useState('')
  const [textTitle, setTextTitle] = useState('')
  const [textContent, setTextContent] = useState('')
  const [qaQuestion, setQaQuestion] = useState('')
  const [qaAnswer, setQaAnswer] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const fetchSources = useCallback(async () => {
    try {
      const response = await fetch('/api/voxia/knowledge')
      const data = await response.json()
      setSources(data.sources || [])
    } catch (error) {
      console.error('Failed to fetch knowledge sources:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSources()
  }, [fetchSources])

  const handleAddUrl = async () => {
    if (!urlInput.trim()) return
    setSubmitting(true)

    try {
      const response = await fetch('/api/voxia/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'URL',
          title: new URL(urlInput).hostname,
          location: urlInput,
        }),
      })

      if (response.ok) {
        setUrlInput('')
        fetchSources()
      }
    } catch (error) {
      console.error('Failed to add URL:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAddText = async () => {
    if (!textTitle.trim() || !textContent.trim()) return
    setSubmitting(true)

    try {
      const response = await fetch('/api/voxia/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'MANUAL',
          title: textTitle,
          content: textContent,
        }),
      })

      if (response.ok) {
        setTextTitle('')
        setTextContent('')
        fetchSources()
      }
    } catch (error) {
      console.error('Failed to add text:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAddQA = async () => {
    if (!qaQuestion.trim() || !qaAnswer.trim()) return
    setSubmitting(true)

    try {
      const response = await fetch('/api/voxia/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'QA',
          title: qaQuestion,
          content: qaAnswer,
        }),
      })

      if (response.ok) {
        setQaQuestion('')
        setQaAnswer('')
        fetchSources()
      }
    } catch (error) {
      console.error('Failed to add Q&A:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleFileUpload = async () => {
    if (!selectedFile) return
    setSubmitting(true)

    try {
      // Get presigned URL
      const presignResponse = await fetch('/api/voxia/uploads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: selectedFile.name,
          contentType: selectedFile.type,
        }),
      })

      const { uploadUrl, fileKey } = await presignResponse.json()

      if (uploadUrl) {
        // Upload to S3
        await fetch(uploadUrl, {
          method: 'PUT',
          body: selectedFile,
          headers: { 'Content-Type': selectedFile.type },
        })
      }

      // Create knowledge source
      await fetch('/api/voxia/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'FILE',
          title: selectedFile.name,
          location: fileKey || selectedFile.name,
        }),
      })

      setSelectedFile(null)
      fetchSources()
    } catch (error) {
      console.error('Failed to upload file:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this knowledge source?')) return

    try {
      const response = await fetch(`/api/voxia/knowledge?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchSources()
      }
    } catch (error) {
      console.error('Failed to delete source:', error)
    }
  }

  const handleReprocess = async (id: string) => {
    try {
      await fetch('/api/voxia/knowledge', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'reprocess' }),
      })
      fetchSources()
    } catch (error) {
      console.error('Failed to reprocess:', error)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'READY':
        return <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded text-xs">Ready</span>
      case 'PROCESSING':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded text-xs">Processing</span>
      case 'ERROR':
        return <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded text-xs">Error</span>
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded text-xs">Pending</span>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'URL':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )
      case 'FILE':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      case 'QA':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary dark:text-white">Knowledge Base</h1>
        <p className="text-colorText dark:text-dark-100">
          Add content to help your AI voice agent answer questions accurately.
        </p>
      </div>

      {/* Add Content Tabs */}
      <VoxiaCard variant="bordered">
        <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          {[
            { key: 'url', label: 'Website URL' },
            { key: 'text', label: 'Paste Text' },
            { key: 'qa', label: 'Q&A' },
            { key: 'file', label: 'Upload File' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-primary text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-colorText dark:text-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* URL Tab */}
        {activeTab === 'url' && (
          <div className="space-y-4">
            <VoxiaInput
              label="Website URL"
              type="url"
              placeholder="https://example.com/about"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              hint="We'll extract content from this page for your knowledge base."
            />
            <VoxiaButton onClick={handleAddUrl} disabled={submitting || !urlInput.trim()}>
              {submitting ? 'Adding...' : 'Add URL'}
            </VoxiaButton>
          </div>
        )}

        {/* Text Tab */}
        {activeTab === 'text' && (
          <div className="space-y-4">
            <VoxiaInput
              label="Title"
              placeholder="Company Overview"
              value={textTitle}
              onChange={(e) => setTextTitle(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">
                Content
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 text-secondary dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors min-h-[150px]"
                placeholder="Paste your text content here..."
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
              />
            </div>
            <VoxiaButton onClick={handleAddText} disabled={submitting || !textTitle.trim() || !textContent.trim()}>
              {submitting ? 'Adding...' : 'Add Text'}
            </VoxiaButton>
          </div>
        )}

        {/* Q&A Tab */}
        {activeTab === 'qa' && (
          <div className="space-y-4">
            <VoxiaInput
              label="Question"
              placeholder="What are your business hours?"
              value={qaQuestion}
              onChange={(e) => setQaQuestion(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">
                Answer
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 text-secondary dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors min-h-[100px]"
                placeholder="We're open Monday through Friday, 9am to 5pm EST."
                value={qaAnswer}
                onChange={(e) => setQaAnswer(e.target.value)}
              />
            </div>
            <VoxiaButton onClick={handleAddQA} disabled={submitting || !qaQuestion.trim() || !qaAnswer.trim()}>
              {submitting ? 'Adding...' : 'Add Q&A'}
            </VoxiaButton>
          </div>
        )}

        {/* File Tab */}
        {activeTab === 'file' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-secondary dark:text-white font-medium">
                  {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-colorText dark:text-dark-100 mt-1">
                  PDF, DOC, DOCX, or TXT (max 10MB)
                </p>
              </label>
            </div>
            <VoxiaButton onClick={handleFileUpload} disabled={submitting || !selectedFile}>
              {submitting ? 'Uploading...' : 'Upload File'}
            </VoxiaButton>
          </div>
        )}
      </VoxiaCard>

      {/* Knowledge Sources List */}
      <VoxiaCard variant="bordered">
        <h2 className="font-medium text-secondary dark:text-white mb-4">
          Knowledge Sources ({sources.length})
        </h2>

        {loading ? (
          <div className="text-center py-8">
            <svg className="w-8 h-8 mx-auto text-primary animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        ) : sources.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-colorText dark:text-dark-100">
              No knowledge sources yet. Add some content above to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sources.map((source) => (
              <div
                key={source.id}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-dark-200 rounded-lg"
              >
                <div className="text-colorText dark:text-dark-100">
                  {getTypeIcon(source.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-secondary dark:text-white truncate">
                      {source.title}
                    </h4>
                    {getStatusBadge(source.status)}
                  </div>
                  {source.type === 'URL' && (
                    <p className="text-sm text-colorText dark:text-dark-100 truncate">
                      {source.location}
                    </p>
                  )}
                  {source.type === 'QA' && source.content && (
                    <p className="text-sm text-colorText dark:text-dark-100 line-clamp-2">
                      A: {source.content}
                    </p>
                  )}
                  {source.errorMessage && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      {source.errorMessage}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {source.status === 'ERROR' && (
                    <button
                      onClick={() => handleReprocess(source.id)}
                      className="p-2 text-colorText dark:text-dark-100 hover:text-primary"
                      title="Retry"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(source.id)}
                    className="p-2 text-colorText dark:text-dark-100 hover:text-red-500"
                    title="Delete"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </VoxiaCard>
    </div>
  )
}
