import { useState } from 'react'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'

function SourceItem({ source, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-500" />
          <span className="font-medium text-gray-900 text-sm">Fragmento {index + 1}</span>
          {source.score && (
            <span className="text-xs text-gray-500">- Score: {(source.score * 100).toFixed(0)}%</span>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      
      {isExpanded && source.chunk_text && (
        <div className="p-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">"{source.chunk_text}"</p>
        </div>
      )}
    </div>
  )
}

function SourcesCard({ sources }) {
  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="font-semibold text-blue-900 mb-3">Fuentes consultadas</h3>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <SourceItem key={index} source={source} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SourcesCard