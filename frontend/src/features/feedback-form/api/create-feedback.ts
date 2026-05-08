import { ofetch } from "ofetch";

export function createFeedback(name: string, phone: string, comment: string) {
  return ofetch(`${import.meta.env.VITE_DIRECTUS}/items/feedback_form`, {
    method: "post",
    body: {
      name: name,
      phone: phone,
      comment: comment,
    },
  });
}
