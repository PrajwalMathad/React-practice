export async function getAvailablePlaces() {
    const response = await fetch("http://localhost:3200/places");
    if (!response.ok) {
        throw new Error("Error occured!");
    }
    const data = await response.json();
    return data.places;
}

export async function getUserPlaces() {
    const response = await fetch("http://localhost:3200/user-places");
    if (!response.ok) {
        throw new Error("Error occured!");
    }
    const data = await response.json();
    return data.places;
}

export async function getUsers() {
    const response = await fetch("http://localhost:3200/users");
    if (!response.ok) {
        throw new Error("Error occured!");
    }
    const data = await response.json();
    return data.data;
}

export async function getPosts() {
    const response = await fetch("http://localhost:3200/posts");
    if (!response.ok) {
        throw new Error("Error occured!");
    }
    const data = await response.json();
    return data.data;
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3200/user-places", {
        method: "PUT",
        body: JSON.stringify({places}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(!response.ok) {
        throw new Error("Error occured!");
    }
    const data = await response.json();
    return data.message; 
}