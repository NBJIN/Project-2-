Project Number 2 : Javascript Module

Project Name: Catch The Black Cat!

Introduction: 

On researching projects and javascript notes I reviewed a widely used game called "Whack A Mole" and decided to go with a similar idea for the project i am undertaking.  The game that i am building has a  slight twist on the "Whack A Mole" game.  I have decided to use a black cat instead of a mole and the game is called "Catch The Black Cat!" instead of "Whack A Mole".  

In this game "Catch a Black Cat" when the user clicks on the start button a black cat should appear randomly in one of the circles for a short period and the user must click on the black cat before it disappears.  If the user manages to catch the black cat by clicking on them they will get a score.  The game will run for 20 seconds and all successful catches will be recorded in the score counter.  The game will show the user the time remaining so that they know how much time they have at any stage of the game.  Also at the end of the game there is a button to re-set the game.  

![image](https://user-images.githubusercontent.com/106515976/191320974-84e2b38d-3104-4526-8943-ed79030bf185.png)

Features:

The Header / Top of Page

Logo : 

The logo features on the top left hand corner and is a pictue of a cat on a yellow background.  It is very clear and also the coloring matches in perfectly with the background color of the page.
/workspace/Project-2-/assets/images/blackcatmoon.jpg
![image](https://user-images.githubusercontent.com/106515976/191316948-b0539ae4-2d2f-496d-b37f-efc80df328b2.png)

Title & Name: 

The game-name "Memory Game" and game-title "Catch The Black Cat" appears just underneath the logo.  The font that is used here is Montserrat.  The coloring is orange and again contrasts with the main logo.  
![image](https://user-images.githubusercontent.com/106515976/191317225-a8086a1a-0d5f-4a3c-8b8a-b52bf1e6b705.png)

Image:

I have also used an image here to the right of the game-name and game-title and is a picture of a black cat. 
/workspace/Project-2-/assets/images/catm.png
![image](https://user-images.githubusercontent.com/106515976/191317518-9972e017-89ad-450d-a6bd-7b704042eade.png)

Division Line:

Just to separate the Header from the Main Game area i just put in a division line using the following html code < hr > and then styling it in CSS.  I increased the weight on the line so the the user can see that they are leaving the header section and moving into the games area.  The color that i have chosen for this line division is darkslategray which compliments with the colors that i have used.
![image](https://user-images.githubusercontent.com/106515976/191317722-c345f1c2-8c22-43fc-8f53-59fc38e7184a.png)

Games Area

Instructions Section:

I have included an instruction section underneath the division line just to give the user instructions on how to play the game.   I have again chosen the Montserrat font for the heading and the instructions paragraph and the orange color on both to compliment with the other colors on the page. 
![image](https://user-images.githubusercontent.com/106515976/191318189-40b1af90-b7be-4aa3-b8dd-ceee5f525b5f.png)

Start Game Button:

This is the button which the user will click on in order to start the game.  The color that is used for the button background is darkslategray to compliment the division line.  For the text its font color is orange and also in bold.  The shape of all the buttons on the page are in a circular shape by using the "border-radius" code in css.  This feature just gives the button more definition and stands out more on the page.

![image](https://user-images.githubusercontent.com/106515976/191318526-dd1a5a8d-ad5a-42f3-b7ad-7b89f70ccb65.png)

Time Remaining:

This gives the user the time remaining on the game once they click on the start button.  It will count-down from 20 to 1 and the game will stop once it reaches 1.  For the heading and timer i have user font color of orange and again the Montserrat to compliment with all other elements.  
![image](https://user-images.githubusercontent.com/106515976/191318959-b472863d-0c43-41b4-afab-04db96e07de4.png)


Cat and Circle:

The next section of the games area contains 9 black cats and 9 circles.  The image for the black cat is the one as is used above in the heading to the right of the game-title and game-name. 
/workspace/Project-2-/assets/images/catm.png
There is also 9 circles which have an orange background.  Here the cat will appear randomly in anyone of the 9 circles.  
![image](https://user-images.githubusercontent.com/106515976/191319182-b0e91abd-bb25-4269-80ab-25f265e81029.png)

Score:

A record of the score is recoreded underneath the cat and circle section.  Everytime the user cathes a cat by clicking on them the score will increment.  In keeping with colors and design an orange font-color was used and the Montserrat font.  
![image](https://user-images.githubusercontent.com/106515976/191319396-dffa12b5-d70f-46fd-b9c2-370bc8535ef3.png)

Reset Button:

I have inputted a reset button so that the user can re-set the game back to 0.  The same styling is applied to the Reset Button as is applied to the Start Button just to keep all buttons uniform. 

![image](https://user-images.githubusercontent.com/106515976/191319699-056ad039-620f-41bb-ba1e-93d3673e1ec0.png)

Division Line:

At the bottom of the page i added anohter division line with the same styling as the division line underneath the header.  Again the color used for this division line was darkslategray to compliment the division line underneath the header.  
![image](https://user-images.githubusercontent.com/106515976/191320498-f83651c2-9e77-4f40-adb2-a5ea4a87c6fe.png)


Features Left To Implement
-----

Testing

--------

Validator Testing
---------

Unfixed Bugs

---------

Deployment

This site was deployed to GitHub pages.  The steps to deploy are the following: 
- In GitHub repository, navigate to the settings tab
- From the source section drop-down menu, select master branch
- once the master branch has been selected the page will be automaticlly refreshed with a detailed ribbon display to indicate the successful deployment.  

The link can be found at the following -https://github.com/NBJIN/Project-2- (gh repo clone NBJIN/Project-2-)

Credits

In completing this project i reviewed the following sources of information: 

Design / Content

 - Code Institute Notes / W3C Schools / 
 - You tube videos from Ania Kubów on javascript and on the whack a mole game.
 - font were sourced from the google fonts webstite - ttps://fonts.googleapis.com

 Media Content

 - Images were from -------

Responsiveness

-----
 


Other Project Information

This project is one page.  In putting togeather the project the files used were index.html (html code), style.css (css code), script.js (javascript code).  The style.css and script.js file are all held inside their own folders of css and js in the assests folder.  The assets folder also contains the images folder which contains all the images that are used in the game.  