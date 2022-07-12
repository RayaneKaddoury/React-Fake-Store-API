import React from 'react'

export default function Cart({ cart }) {
  return (
    <div>
        <h3 className="text-3xl font-bold text-center p-3">Total: {cart.reduce((a, b) => a + b, 0)}</h3>
    </div>
  )
}

