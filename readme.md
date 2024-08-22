### CORS(Cross-Origin Resource Sharing)

** CORS is a mechanism that allows web applications running at one origin (domain) to request resources from a server hosted at another origin. **

** CORS is a critical component in modern web development, especially when dealing with distributed systems, microservices, and external APIs. Properly configuring CORS in a Node.js Express application allows you to enable secure and controlled cross-origin resource sharing, ensuring your web applications can interact seamlessly while maintaining security and compliance with browser standards. **

### Rate Limit

** Rate limiting is a technique used to control the amount of incoming traffic to your server, helping to prevent abuse, attacks and overloading your server. **

### CSRF(Cross-Site Request Forgery)

**Example**

- Let's consider a basic scenario where a user is logged into their bank account at https://bank.com. - They have an active session with the bank's web application, and the session is authenticated with cookies.
- An attacker creates a malicious website, say https://xyz.com, with a form that submits a request to https://bank.com/transfer-funds.
- When the user, while still logged in to https://bank.com, visits https://xyz.com and unknowingly submits the form (or the form could be automatically submitted using JavaScript), the request is sent to https://bank.com with the user's session cookies.
- Since the cookies are automatically included by the browser, the bank's server believes the request is legitimate and processes the transfer.
- Browsers automatically include cookies associated with a domain when making a request to that domain. So, when the user visits the attacker's site and a request is made to https://bank.com, the user's session cookies are sent along with the request.
