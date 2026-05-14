export function createFeedback(name: string, phone: string, comment: string, productId?: number) {
  return $fetch<any>(`/api/directus/items/feedback_form`, {
    method: "post",
    body: {
      name: name,
      phone: phone,
      comment: comment,
      productId: productId,
    },
  });
}
