import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import SourcesCard from './SourcesCard'

function ChatWindow({ messages, sources, isLoading }) {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, sources])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <Bot className="w-16 h-16 mb-4 text-gray-300" />
          <p className="text-lg">Haz tu primera pregunta</p>
          <p className="text-sm">El asistente te responderá usando los documentos cargados</p>
        </div>
      )}

      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}

      {isLoading && (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-green-600" />
          </div>
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>
      )}

      {sources && sources.length > 0 && !isLoading && (
        <SourcesCard sources={sources} />
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatWindow