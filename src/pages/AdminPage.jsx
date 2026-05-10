import { useState, useEffect } from 'react'
import UploadBox from '../components/UploadBox'
import DocumentList from '../components/DocumentList'
import { getDocuments, uploadDocument, deleteDocument } from '../services/api'

function AdminPage() {
  const [documents, setDocuments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const fetchDocuments = async () => {
    try {
      setIsLoading(true)
      const data = await getDocuments()
      setDocuments(data.documents || [])
      setError(null)
    } catch (err) {
      setError('Error al cargar documentos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  const handleUpload = async (file) => {
    setIsUploading(true)
    setError(null)
    setSuccess(null)
    
    try {
      await uploadDocument(file)
      setSuccess('Documento subido correctamente')
      await fetchDocuments()
    } catch (err) {
      setError(err.response?.data?.detail || 'Error al subir documento')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDelete = async (id) => {
    setDeletingId(id)
    setError(null)
    
    try {
      await deleteDocument(id)
      setSuccess('Documento eliminado correctamente')
      await fetchDocuments()
    } catch (err) {
      setError(err.response?.data?.detail || 'Error al eliminar documento')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Administración</h1>
        <p className="text-sm text-gray-500">Gestiona los documentos del sistema</p>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            {success}
          </div>
        )}

        <div className="max-w-2xl mx-auto space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Subir documento</h2>
            <UploadBox onUpload={handleUpload} isUploading={isUploading} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentos cargados</h2>
            {isLoading ? (
              <div className="text-center py-8 text-gray-500">Cargando...</div>
            ) : (
              <DocumentList 
                documents={documents} 
                onDelete={handleDelete}
                deletingId={deletingId}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default AdminPage