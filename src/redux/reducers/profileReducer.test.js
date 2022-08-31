import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

const state = {
    postData: [
        { id: "1", message: "HI!", likeCount: 19 },
        { id: "2", message: "YO", likeCount: 2 },
        { id: "3", message: "It's my first post!", likeCount: 10 },
    ],
    newPostText: "test marina",
    profile: null,
    status: ""
};

test('new post was added', () => {
    let action = addPostActionCreator("It's my first post test! ");
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
});

test('new post message is correct', () => {
    let action = addPostActionCreator("It's my first post test! ");
    let newState = profileReducer(state, action);

    expect(newState.postData[3].message).toBe("It's my first post test! ");
});

// test by tdd
test('after deleting posts would be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2)
})