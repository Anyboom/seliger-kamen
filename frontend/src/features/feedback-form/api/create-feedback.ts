import { pathDirectus } from "~/shared/api/path-directus";

export function createFeedback(name: string, phone: string, comment: string) {
  return $fetch<any>(`${pathDirectus()}/items/feedback_form`, {
    method: "post",
    body: {
      name: name,
      phone: phone,
      comment: comment,
    },
  });
}
