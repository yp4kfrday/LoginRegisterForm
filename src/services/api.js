const apiUrl = 'http://localhost:3001';

export const loginUser = async (userName, password) => {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                password,
            }),
        });

        if (response.ok) {
            return { success: true, data: await response.json() };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.message };
        }
    } catch (error) {
        console.error('Error during login:', error);
        return { success: false, error: 'Network error' };
    }
};

export const registerUser = async (email, userName, password) => {
    try {
        const response = await fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                userName,
                password,
            }),
        });

        if (response.ok) {
            return { success: true, data: await response.json() };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.message };
        }
    } catch (error) {
        console.error('Error during registration:', error);
        return { success: false, error: 'Network error' };
    }
};