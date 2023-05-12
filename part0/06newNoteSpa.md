sequenceDiagram
  participant Browser
  participant Server

  Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Server-->>Browser: {content: "test", date: "2023-05-11T22:37:55.954Z"}, status code 201
  Note right of Browser: The POST request only returns "new_note_spa" and its content is added to data.json without reloading the page.
