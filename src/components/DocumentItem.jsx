import { FileText, Trash2, Loader2 } from 'lucide-react'

function DocumentItem({ document, onDelete, isDeleting }) {
  const handleDelete = () => {
    if (window.confirm(`¿Eliminar "${document.filename}"?`)) {
      onDelete(document.id)
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-gray-400" />
        <div>
          <p className="font-medium text-gray-900">{document.filename}</p>
          <p className="text-sm text-gray-500">
            Subido el {new Date(document.uploaded_at).toLocaleDateString('es-ES')}
          </p>
        </div>
      </div>

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
      >
        {isDeleting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Trash2 className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

export default DocumentItem