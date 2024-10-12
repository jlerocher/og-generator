"use client"

import { useToast } from './use-toast'

export function Toaster() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
          role="alert"
        >
          {toast.title && <h4 className="font-semibold">{toast.title}</h4>}
          {toast.description && <p>{toast.description}</p>}
          <button
            onClick={() => removeToast(toast.id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}