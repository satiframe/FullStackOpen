2hs

sequenceDiagram
  participant Browser
  participant Server

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server-->>Browser: new_note , HTML file, status code: 302 (redirect)
    Note right of Browser:  After creating and submitting new_note, its content can be viewed in DevTools/Network, under the Payload tab

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>Browser: HTML file, status code: 200
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: CSS file, status code: 200
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server-->>Browser: JavaScript file, status code: 200
    Note right of Browser:  After form submission, page reloads and requests HTML, CSS, and JS files again

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: [{"content":"bro","date":"2023-05..."}, ... ], status code: 200
    Note right of Browser: JavaScript instructs the browser to return all notes as JSON data, which includes the new_note content at the end 