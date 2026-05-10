import { useState } from 'react'
import ChatWindow from '../components/ChatWindow'
import ChatInput from '../components/ChatInput'
import { askQuestion } from '../services/api'

function ChatPage() {
  const [messages, setMessages] = useState([])
  const [sources, setSources] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSendMessage = async (question) => {
    setMessages(prev => [...prev, { role: 'user', content: question }])
    setSources(null)
    setError(null)
    setIsLoading(true)

    try {
      const response = await askQuestion(question)
      setMessages(prev => [...prev, { role: 'assistant', content: response.answer }])
      if (response.sources) {
        setSources(response.sources)
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Error al procesar la pregunta')
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, ocurrió un error al procesar tu pregunta.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Asistente Virtual</h1>
        <p className="text-sm text-gray-500">Pregunta sobre tus documentos</p>
      </header>

      {error && (
        <div className="mx-4 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <ChatWindow 
        messages={messages} 
        sources={sources}
        isLoading={isLoading} 
      />

      <div className="p-4 border-t border-gray-200 bg-white">
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ChatPage