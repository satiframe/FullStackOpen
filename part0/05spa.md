sequenceDiagram
  participant Browser
  participant Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa/
  Server-->>Browser: HTML file, status code: 200
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server-->>Browser: CSS file, status code: 200
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  Server-->>Browser: JavaScript file, status code: 200

  Note right of Browser: After loading HTML, browser requests CSS, and JS files

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  Server-->>Browser: [{"content":"hi","date":"2023-05-11..."}, ... ], status code: 200

  Note right of Browser: JavaScript instructs the browser to return all notes as JSON data

