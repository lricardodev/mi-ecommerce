import { create } from 'zustand'

export interface Product {
    id: number
    name: string
    price: number
    image: string
}

interface CartItem extends Product {
    quantity: number
}

interface CartState {
    items: CartItem[]
    isOpen: boolean
    addItem: (product: Product) => void
    removeItem: (productId: number) => void
    toggleCart: () => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    isOpen: false,
    addItem: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id)
        if (existingItem) {
            return {
                items: state.items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            }
        }
        return { items: [...state.items, { ...product, quantity: 1 }] }
    }),
    removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
    })),
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    clearCart: () => set({ items: [] }),
}))
