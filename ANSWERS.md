- [ ] Why would you use class component over function components (removing hooks from the question)?
      -Using classes allows you to use State in your component, allowing you to store data inside your component and manipulate it when needed.
- [ ] Name three lifecycle methods and their purposes.
      componentDidMount - If you need to load data from a remote endpoint.
      componentDidUpdate - This as an opportunity to operate on the DOM when the component has been updated.
      componentWillUnmount - Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or eventListeners that you set.

- [ ] What is the purpose of a custom hook?
      Custom hooks allow us to leverage state, keeping our code dry, and keeps our stateful logic in one area.

- [ ] Why is it important to test our apps?
      Allows us to trust our code, helps us find bugs faster, can be used as documentation to help us remember how our code is supposed to function.
