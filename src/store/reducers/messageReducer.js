const SET_MESSAGE = 'SET_MESSAGE';

const initialState = {
  messages: [
    {
      id: Math.floor(Math.random() * (+Date.now().toString().slice(10))),
      title: "Hi",
      text: "This is some text"
    }
  ],
}