Project Number 2 : Javascript Module

Project Name: Catch The Black Cat!

Introduction: 

On researching projects and javascript notes I reviewed a widely used game called "Whack A Mole" and decided to go with a similar idea for the project i am undertaking.  The game that i am building has a  slight twist on the "Whack A Mole" game.  I have decided to use a black cat instead of a mole and the game is called "Catch The Black Cat!" instead of "Whack A Mole".  

In this game "Catch a Black Cat" when the user clicks on the start button a black cat should appear randomly in one of the circles for a short period and the user must click on the black cat before it disappears.  If the user manages to catch the black cat by clicking on them they will get a score.  The game will run for 20 seconds and all successful catches will be recorded in the score counter.  The game will show the user the time remaining so that they know how much time they have at any stage of the game.  Also at the end of the game there is a button to re-set the game.  

![image](https://user-images.githubusercontent.com/106515976/191320974-84e2b38d-3104-4526-8943-ed79030bf185.png)


#1. Site Design Consideration Heading
    - Site Goals
    - User Stories and Goals
    - Site Design Approach
    - Game Design and Font

#2. Wireframes
    - Description of Project 

#3. Features
    - Initital Deployment Features
    - Future Features

#4. Technologies Used

#5. Testing
    - Manual Testing

#6. Deployment

#7. Credits

<hr>

#1. Site Design Consideration 

   Site Goals:
   1. To provide a interactive, fun and easy game to play.
   2. Make the game responsive across a number of devices.
   3. Once the start buttons is clicked to record the score each time a cat is clicked on and to provide the the final score at
      the end of the game. 
   4. To provide a timer to show the user  how much time they have left to play the game. 
   5. That the game will be accessible to users that may require assistive technologies. 


    User Stories and Goals:
    1. As the user I want to be able to easily understand how to play the game.
    2. As a user i want to be able to be able to click on a main start button and the game will commence.
    3. As a user i want to be able to see how much time i have remaining on the game.
    4. As a user i want to be able to see my score increment as i catch a cat and my final score at the end.
    5. As a user i want to be able to click again on the start button and start a new game.

    
    Site Design Approach:
    On researching projects and javascript notes I reviewed a widely used game called "Whack A Mole" and decided to go with a similar idea for the project i am undertaking.  The game that i am building has a  slight twist on the "Whack A Mole" game.  I have decided to use a black cat instead of a mole and the game is called "Catch The Black Cat!" instead of "Whack A Mole".  

    In this game "Catch a Black Cat" when the user clicks on the start button a black cat should appear randomly in one of the circles for a short period and the user must click on the black cat before it disappears.  If the user manages to catch the black cat by clicking on them they will get a score.  The game will run for 20 seconds and all successful catches will be recorded in the score counter.  The game will show the user the time remaining so that they know how much time they have at any stage of the game.  Also at the end of the game there is a button to re-set the game.  

    ![image](https://user-images.githubusercontent.com/106515976/191320974-84e2b38d-3104-4526-8943-ed79030bf185.png)



    Game Design and Font:
    This project is one page.  In putting togeather the project the files used were index.html (html code), style.css (css code), script.js (javascript code).  The style.css and script.js file are all held inside their own folders of css and js in the assests folder.  The assets folder also contains the images folder which contains all the images that are used in the game.  When searching for images i found an image which depicted a cat sitting on the branch of a tree on an orange background (like he was sitting with the backdrop of the moon in the image).  In keeping with the colors of my main logo image i decided to use a black background with orange font throughout with the exception of the division lines and the buttons which use blackslategray just to make them stand out more on the page and that the user can easily see them.  I also decided to use an orange background for my circles in which the cat appears in.  The cat which appears in the circle and to the right of the title again compliments the background and the colors used.  This cat is  black but a different shade of black so that he can still be seen against the main background color black and orange eyes.  The font that is used is Monstserrat from google fonts. This type of font compliments with the images and background color.  

    <hr>

#2. Wireframes


   ![image](https://user-images.githubusercontent.com/106515976/191692349-79b155ff-4566-4aa7-a2cc-22064d5ae600.png)


<hr>

#3. Features:

Initital Deployment Features

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

Future Features
    1 Addition of anohter level or levels just to make the game more of a challenge for the user.
    2 The addition of a sound element when the user actually caught a cat just to indicate they have been successful and they     have added to their score.
    3 Animate the cursor maybe with an image like a cat catcher or just to make the cursor bigger so that the user can have a better chance of catching the cat.  

#4. Technologies Used

    - HTML5 was used to build the structure of the page
    - CSS3 was used to provide styling to the elements on the page
    - Javascript was use to provide the user with functionality in order to play the game.
    - Microsoft word was used to re-size images
    - Adobe pdf was used to drawup ideas for project
    - Google Fonts was used to provide the font used on the site
    - Google Chrome Developer Tools was used in order to inspect and test code
    - Github was used as the repository hosting serive
    - 


#5. Testing
    Manual Testing
    - On the page there are navigational items - when you open the page the start button will appear along with all the 9 cats and their circles.  When the user clicks on the start button the button should disappear and the also the 9 cat will also disappear.  A cat will then randomly appear in one of the circles which the user must click in order to get a score.  
    - The time reaminaing will countdown from 20 seconds once the start button is clicked and once it hts 0 it will say game over your score is ....
    - the score at the bottom of the page will show the score incrementing each time the user clicks on a cat

    - Even though i have built this game there are some bugs in my code which is making the site unreponsive.  I have ran out of time on this project in order to address same.  

#6. Deployment

This site was deployed to GitHub pages.  The steps to deploy are the following: 
- In GitHub repository, navigate to the settings tab
- From the source section drop-down menu, select master branch
- once the master branch has been selected the page will be automaticlly refreshed with a detailed ribbon display to indicate the successful deployment.  

The link can be found at the following -https://github.com/NBJIN/Project-2- (gh repo clone NBJIN/Project-2-)

#7. Credits
In completing this project i reviewed the following sources of information: 

Design / Content

 - Code Institute Notes / W3C Schools 
 - You tube videos from Ania Kubów on javascript and on the whack a mole game and other Tutorial videos on Javascript from Youtube.
 - Font were sourced from the google fonts webstite - ttps://fonts.googleapis.com

 Media Content

 - Images were from sourced from pixabay.com
 - font was sourced from google fonts
 -


