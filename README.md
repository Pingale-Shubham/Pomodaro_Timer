Pomodoro Timer

A simple and efficient Pomodoro Timer application built using HTML, CSS, and JavaScript. This timer allows you to manage your time effectively using the Pomodoro technique, including work sessions, short breaks, and long breaks. Additionally, a beep sound alerts you when the timer reaches 00:00.

Features:

Start, Stop, Resume, and Reset Timer functionality.

Three different timers:

25:00 - Work Timer

05:00 - Short Break Timer

15:00 - Long Break Timer

Beep sound notification when the timer completes.

Time pause and resume functionality.

Responsive design for desktop and mobile.

Sound Notification:

A beep sound plays automatically within 2 seconds when the timer reaches 00:00.

You can customize the sound by replacing the URL in the JavaScript file.

Technologies Used:

HTML5 - Structure of the webpage

CSS3 - Styling and layout

JavaScript (Vanilla) - Timer logic and sound effect

Project Structure:
Pomodoro-Timer/
│
├── index.html     # Main HTML file
├── style.css      # Styling for the timer
├── script.js      # JavaScript for timer logic

How to Run the Project:

Clone the repository:
git clone https://github.com/your-username/pomodoro-timer.git

Navigate to the project directory:
cd pomodoro-timer

Open the index.html file in your browser.

Customization:

Change Timer Duration:

Open script.js.

Change the default time in the resetTimer() function.

Replace the URL in playBeepSound() function inside script.js.
let beep = new Audio('your-custom-sound.mp3');

License:
This project is licensed under the MIT License.

Feedback:
If you have any suggestions, feel free to open an issue or pull request in the repository.

Developed by Shubham S. Pingale

LinkedIn: https://www.linkedin.com/in/shubham-s-pingale/
GitHub: https://github.com/shubhampingale
