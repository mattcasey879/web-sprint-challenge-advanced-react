# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    a functional component doesnt have state(stateless) where as a stateful component does.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount() fires when the component first renders.
    componentWillUpdate() fires when there is a change to state.

3. Define stateful logic.
    stateful logic is a function that usesstate and updates using logic with user interaction

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange -- Setting up the test. i.e.-- test()
    Act -- doing something in the test i.e.-- render(), screen.getby(), userEvent.click()
    Assert -- make sure what you expect to happen, happens -- expect();

