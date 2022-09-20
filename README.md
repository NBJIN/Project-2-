Project Number 2 : Javascript Module

Project Name: Catch The Black Cat!

Introduction: 

On researching projects and javascript notes I reviewed a widely used game called "Whack A Mole" and decided to go with a similar idea for the project i am undertaking.  The game that i am building has a  slight twist on the "Whack A Mole" game.  I have decided to use a black cat instead of a mole and the game is called "Catch The Black Cat!" instead of "Whack A Mole".  

In this game "Catch a Black Cat" when the user clicks on the start button a black cat should appear randomly in one of the circles for a short period and the user must click on the black cat before it disappears.  If the user manages to catch the black cat by clicking on them they will get a score.  The game will run for 20 seconds and all successful catches will be recorded in the score counter.  The game will show the user the time remaining so that they know how much time they have at any stage of the game.  Also at the end of the game there is a button to re-set the game.  

Features:

The Header / Top of Page

Logo : 
The logo features on the top left hand corner and is a pictue of a cat on a yellow background.  It is very clear and also the coloring matches in perfectly with the background color of the page.
/workspace/Project-2-/assets/images/blackcatmoon.jpg

Title & Name: 
The game-name "Memory Game" and game-title "Catch The Black Cat" appears just underneath the logo.  The font that is used here is Montserrat.  The coloring is orange and again contrasts with the main logo.  

Image:
I have also used an image here to the right of the game-name and game-title and is a picture of a black cat. 
/workspace/Project-2-/assets/images/catm.png

Division Line:
Just to separate the Header from the Main Game area i just put in a division line using the following html code <hr> and then styling it in CSS.  I increased the weight on the line so the the user can see that they are leaving the header section and moving into the games area.  The color that i have chosen for this line division is darkslategray which compliments with the colors that i have used.  

Games Area

Instructions Section:
I have included an instruction section underneath the division line just to give the user instructions on how to play the game.   I have again chosen the Montserrat font for the heading and the instructions paragraph and the orange color on both to compliment with the other colors on the page. 

Start Game Button:
This is the button which the user will click on in order to start the game.  The color that is used for the button background is darkslategray to compliment the division line.  For the text its font color is orange and also in bold.  The shape of all the buttons on the page are in a circular shape by using the "border-radius" code in css.  This feature just gives the button more definition and stands out more on the page.

Time Remaining:
This gives the user the time remaining on the game once they click on the start button.  It will count-down from 20 to 1 and the game will stop once it reaches 1.  For the heading and timer i have user font color of orange and again the Montserrat to compliment with all other elements.  

Cat and Circle:
The next section of the games area contains 9 black cats and 9 circles.  The image for the black cat is the one as is used above in the heading to the right of the game-title and game-name. 
/workspace/Project-2-/assets/images/catm.png
There is also 9 circles which have an orange background.  Here the cat will appear randomly in anyone of the 9 circles.  

Score:
A record of the score is recoreded underneath the cat and circle section.  Everytime the user cathes a cat by clicking on them the score will increment.  In keeping with colors and design an orange font-color was used and the Montserrat font.  

Reset Button:
I have inputted a reset button so that the user can re-set the game back to 0.  The same styling is applied to the Reset Button as is applied to the Start Button just to keep all buttons uniform.  


 
## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
