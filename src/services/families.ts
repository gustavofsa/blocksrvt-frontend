import { api } from '@/lib/api'

export interface Family {
  id: string
  premium: boolean
  details: {
    name: string
    description: string
  }
}

export async function getFamilies(
  skip: number,
  take: number,
): Promise<Family[]> {
  const response = await api.get(`/families?skip=${skip}&take=${take}`)

  return response.data
}
