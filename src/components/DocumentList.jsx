import DocumentItem from './DocumentItem'

function DocumentList({ documents, onDelete, deletingId }) {
  if (documents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No hay documentos cargados</p>
        <p className="text-sm mt-1">Sube un PDF para comenzar</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <DocumentItem
          key={doc.id}
          document={doc}
          onDelete={onDelete}
          isDeleting={deletingId === doc.id}
        />
      ))}
    </div>
  )
}

export default DocumentList