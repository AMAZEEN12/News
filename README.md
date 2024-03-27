# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size if it's 375px, 1440px or the screen width of a standard laptop.
- See hover and focus states for all interactive elements on the page

### What I learned

    #nav-bar ul{
        animation: slideIn 1s;
        display: flex;
        flex-direction: column;
        background-color: white;
        position: absolute;
        left: 50vw;
        padding: 20px 10px;
        width: 43vw;
        height: 100vh;
        overflow: hidden;
        top: 8vh;
        text-align: left;
        z-index: 1;
    }
    ul li{
        padding-top: 20px;      
    }
    @keyframes slideIn {
        from{
            left: 280px;
        }
        to{
            left: 50vw;            
        
        }

### Continued development
I hope to improve my skill in javascript and learning a javascript framework like ReactJS
