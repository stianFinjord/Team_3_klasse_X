import type { Achievement } from '@/types/achievement'

const baseUrl = 'https://webapplication120241219121631.azurewebsites.net'

export async function updateUserPhysicalForm(userId: number, physicalForm: number): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}/UpdateUserPhysicalForm/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ physicalForm }),
    })
    if (!response.ok) {
      throw new Error('Failed to update physical form')
    }
  } catch (error) {
    console.error('Error updating physical form:', error)
    throw error
  }
}

export async function getUserAchievements(userId: number): Promise<Achievement[]> {
  try {
    const response = await fetch(`${baseUrl}/GetUserAchievements/${userId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch achievements')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching achievements:', error)
    return []
  }
}
