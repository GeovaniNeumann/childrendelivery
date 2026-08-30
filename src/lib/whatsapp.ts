// Numero de contato da Children of Faith Burgers
export const PHONE_DISPLAY = "(41) 9745-3211";
export const PHONE_E164 = "554197453211";

/**
 * Monta um link wa.me com mensagem pre-preenchida.
 * Se nenhuma mensagem for passada, usa uma mensagem generica de pedido.
 */
export function buildWhatsAppLink(message?: string): string {
  const defaultMessage =
    "Ola! Vim pelo site da Children of Faith Burgers e quero fazer um pedido.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${PHONE_E164}?text=${text}`;
}

export function buildProductMessage(productName: string): string {
  return `Ola! Vim pelo site da Children of Faith Burgers e quero pedir o ${productName}.`;
}
