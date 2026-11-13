import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

const ShopContext = createContext(undefined);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(
        (item) =>
          item.id === action.item.id &&
          item.size === action.item.size &&
          item.color === action.item.color
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.item.id &&
          item.size === action.item.size &&
          item.color === action.item.color
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'CHANGE':
      return state.map((item) =>
        item.id === action.id && item.size === action.size && item.color === action.color
          ? { ...item, qty: Math.max(1, item.qty + action.delta) }
          : item
      );
    case 'REMOVE':
      return state.filter(
        (item) =>
          !(item.id === action.id && item.size === action.size && item.color === action.color)
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!toast) return undefined;
    const timeoutId = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function add(product, size, color) {
    if (!product || !size || !color) {
      setToast('Seleziona taglia e colore');
      return;
    }

    dispatch({
      type: 'ADD',
      item: {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        img: product.img,
        size,
        color
      }
    });
    setToast(`${product.name} aggiunto al carrello`);
  }

  function change(id, size, color, delta) {
    dispatch({ type: 'CHANGE', id, size, color, delta });
  }

  function remove(id, size, color) {
    dispatch({ type: 'REMOVE', id, size, color });
  }

  function clear() {
    dispatch({ type: 'CLEAR' });
  }

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );
  const count = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const value = { cart, add, change, remove, clear, total, count, toast };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop deve essere utilizzato all’interno di ShopProvider');
  }
  return context;
}
