const fakeData = [
    {
        id: 1,
        title: 'test title',
        image: 'https//testimage.com',
        checked: false,
        user_id: 1
    }
]


export default async () => {
    const response = await new Promise((resolve) => {
        resolve(fakeData)
    });
    return response
}