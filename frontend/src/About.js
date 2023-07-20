import React from "react";
import './App.css';

function About(){
    return(
       <body>
        <div id="about">
            <div id="h1"><h1>Welcome to library Manager</h1></div>  
          <p>The Library Database Application offers two core functionalities: "Add Books" and "View Books." These functionalities cater to both library administrators and patrons, facilitating the management and exploration of the extensive literary collection. Below are detailed explanations of each functionality:
<br></br>
<br></br>
Add Books:
The "Add Books" functionality empowers library administrators or authorized personnel to enrich the library's collection by adding new books to the database. This feature ensures a seamless and organized process for incorporating new literary works into the system. Key aspects of the "Add Books" functionality include:
Data Input: The application provides a user-friendly interface for entering essential book details, such as the book title, author(s), ISBN (International Standard Book Number), publication year, genre, and a brief description.

Cover Art: Administrators have the option to upload book cover images, enriching the visual representation of the books within the database.

Categorization: Books can be assigned to specific categories or genres, ensuring easy navigation and efficient retrieval for patrons during their search.

Availability Tracking: The application allows administrators to update the availability status of each book, indicating whether it is available for borrowing or currently on loan.
<br></br>
<br></br>
View Books:
The "View Books" functionality caters to library patrons, offering them a comprehensive and user-friendly interface to explore the library's diverse collection. This feature enables patrons to search for and view details of available books within the database. Key aspects of the "View Books" functionality include:
Search and Filters: Patrons can search for books based on various criteria, such as book title, author, genre, or ISBN, using intuitive search and filter options.

Book Details: Upon finding a desired book, patrons can access detailed information, including the book's title, author(s), genre, publication year, ISBN, and availability status.

Cover Art Display: The application displays the book's cover art, adding visual appeal and aiding patrons in identifying their preferred books easily.

Availability Status: Patrons can check the availability status of each book to ascertain whether it is currently available for borrowing.</p>
        </div>
        </body>
    )
}
export default About;