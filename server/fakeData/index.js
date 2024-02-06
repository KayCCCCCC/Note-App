export default {
    author: [
        {
            id: 123,
            name: 'Hotex'
        },
        {
            id: 999,
            name: 'KayC'
        }
    ],
    folders: [
        {
            id: '1',
            name: 'Home',
            createdAt: '2022-11-18T03:42:132',
            authorId: 123,
        },
        {
            id: '2',
            name: 'New Folder',
            createdAt: '2022-10-18T03:42:132',
            authorId: 999,
        },
        {
            id: '3',
            name: 'Work',
            createdAt: '2022-09-18T03:42:132',
            authorId: 123,
        },
    ],
    notes: [
        {
            id: "123",
            content: "<p>Go to supermarket</p>",
            folderId: "1"
        },
        {
            id: "234",
            content: "<p>Go to Bus</p>",
            folderId: "2"
        },
        {
            id: "345",
            content: "<p>Go to Store</p>",
            folderId: "3"
        }
    ]
}