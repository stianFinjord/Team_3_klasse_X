import type { User } from '../types/user'

const baseUrl = 'https://webapplication120241219121631.azurewebsites.net'

export async function loginUserApi(email: string, password: string): Promise<User | null> {
  try {
    const response = await fetch(`${baseUrl}/LoginUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password
      }),
    })

    if (!response.ok) {
      console.error('Login failed:', response.statusText)
      return null
    }

    const result = await response.json()
    console.log('Login successful:', result)
    return result
  } catch (error) {
    console.error('Network error:', error)
    return null
  }
}

export async function registerUserApi(
  userName: string,
  email: string,
  password: string
): Promise<User | null> {
  try {
    const response = await fetch(`${baseUrl}/RegisterUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        email,
        password
      }),
    })

    if (!response.ok) {
      console.error('Registration failed:', response.statusText)
      return null
    }

    const result = await response.json()
    console.log('Registration successful:', result)
    return result
  } catch (error) {
    console.error('Network error:', error)
    return null
  }
}
