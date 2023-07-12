type CartItem = {
  name: string
  quantity: number
  price: number
  category: string
  url: string
  productId: number
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as CartItem[],
  }),
  getters: {
    getTotalQuantity(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    getTotalPrice(): number {
      return parseFloat(
        this.cartItems
          .reduce((total, item) => total + item.quantity * item.price, 0)
          .toFixed(2)
      )
    },
    getQuantityOfProduct() {
      return (productId: number) => {
        const cartItem = this.cartItems.find(
          (item) => item.productId === productId
        )
        return cartItem ? cartItem.quantity : 0
      }
    },
  },
  actions: {
    addToCart(productId: number) {
      const cartItem = this.cartItems.find(
        (item) => item.productId === productId
      )
      if (cartItem) {
        cartItem.quantity++
      } else {
        const product = useProductsStore().getProduct(productId)
        if (!product) return
        this.cartItems.push({
          name: product.name,
          quantity: 1,
          price: product.price,
          category: product.category,
          url: product.url,
          productId: product.id,
        })
      }
    },
    removeFromCart(productId: number) {
      const cartItem = this.cartItems.find(
        (item) => item.productId === productId
      )
      if (cartItem) {
        cartItem.quantity--
        if (cartItem.quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (item) => item.productId !== productId
          )
        }
      }
    },
    emptyCart() {
      this.cartItems = []
    },
    removeItemCompletelyFromCart(productId: number) {
      this.cartItems = this.cartItems.filter(
        (item) => item.productId !== productId
      )
    },
  },
})
