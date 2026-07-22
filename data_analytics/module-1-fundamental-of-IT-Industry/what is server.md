```markdown
 # What is a server in the web context
 
 A web server is a computer program and the machine that runs it, which delivers web content to clients (usually web browsers) over the Internet using the HTTP/HTTPS protocols.
 
 - Core idea: a client (browser) sends an HTTP request to a server; the server processes the request and returns an HTTP response (HTML, JSON, files, etc.).
 
 - Types of servers commonly involved in web apps:
	 - Web server: handles HTTP requests and serves static content or forwards requests (examples: Apache, Nginx).
	 - Application server: runs backend code and business logic, generating dynamic responses (examples: Node.js, Django, Tomcat).
	 - Database server: stores and retrieves persistent data (examples: MySQL, PostgreSQL, MongoDB).
 
 - How it works (simplified):
	 1. DNS resolves the domain to the server's IP address.
	 2. Client opens a TCP (or TLS) connection and sends an HTTP request.
	 3. Server processes the request (static file, proxy, or app logic).
	 4. Server sends an HTTP response with status code and data.
	 5. Connection closes or is reused (keep-alive).
 
 - Other considerations: hosting (cloud, VPS, shared), scaling (load balancers, horizontal scaling), security (TLS/HTTPS, firewalls), and performance (caching, CDNs).
 
 This is the basic role of a server in web architecture.
 
 ```
