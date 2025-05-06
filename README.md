# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name (working solo): Nicholas Theodorus Chan, PID: A18551588

**GitHub Pages Links**:
- [Expose](https://nicholastc.github.io/Lab5_Starter_Forked/expose.html)
- [Explore](https://nicholastc.github.io/Lab5_Starter_Forked/explore.html)

Question 1:  Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: I would not use a unit test to test the full “message” feature because it involves multiple parts working together, like typing, sending, and receiving messages over a network. Essentially, unit tests are meant for testing small, isolated pieces of code, not full features that depend on other systems or user interactions. Since the “message” feature includes communication between users and possibly with a server, it’s better tested using integration or end-to-end tests. Unit testing wouldn't catch errors that happen when these parts interact.

Question 2:  Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: Yes, I would use a unit test to check the "max message length" feature. This is a small, specific rule in the code that checks if a message is 80 characters or less. Moreocer, it doesn’t depend on the rest of the system and can be tested by itself. A unit test can easily check if the function or logic correctly prevents messages that are too long and allows messages that are the right length. In conclusion, this makes it a good fit for unit testing.