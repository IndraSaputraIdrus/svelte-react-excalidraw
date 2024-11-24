import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ resolve, event }) => {
  const response = await resolve(event, {
    preload: ({ type }) => type === "font" || type === "css" || type === 'js'
  })
  return response
}
