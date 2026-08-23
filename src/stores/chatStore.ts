import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Message {
  id: string
  text: string
  timestamp: number
  isOwn: boolean
  status: 'sent' | 'delivered' | 'read'
}

interface ChatState {
  messages: Message[]
  contactName: string
  isTyping: boolean
  isOnline: boolean
  addMessage: (message: Message) => void
  deleteMessage: (id: string) => void
  setTyping: (typing: boolean) => void
  setOnline: (online: boolean) => void
  setContactName: (name: string) => void
  clearMessages: () => void
}

export const useChatStore = create<ChatState>(
  persist(
    (set) => ({
      messages: [
        {
          id: '1',
          text: 'Opa, tudo bem?',
          timestamp: Date.now() - 60000,
          isOwn: false,
          status: 'read',
        },
        {
          id: '2',
          text: 'Tudo tranquilo! E contigo?',
          timestamp: Date.now() - 50000,
          isOwn: true,
          status: 'read',
        },
      ],
      contactName: 'Unknown',
      isTyping: false,
      isOnline: true,
      addMessage: (message: Message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      deleteMessage: (id: string) =>
        set((state) => ({
          messages: state.messages.filter((m) => m.id !== id),
        })),
      setTyping: (typing: boolean) => set({ isTyping: typing }),
      setOnline: (online: boolean) => set({ isOnline: online }),
      setContactName: (name: string) => set({ contactName: name }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'chat-store',
    }
  )
)
