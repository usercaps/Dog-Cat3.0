import {
    likeDogs,
    dislikeDogs,
    dogShow,
    infoDog,
    catShow,
    likeCats,
    dislikeCats,
    infoCat,
    nextButtnDog,
    nextButtnCat,
    registerB,
    loginB,
} from './utils/click';
import {backButton} from './utils/backButton';


//dog
backButton();
likeDogs();
dislikeDogs();
dogShow();
infoDog();
nextButtnDog();
nextButtnCat();
//cat
likeCats();
dislikeCats();
infoCat();
catShow();
//login
loginB();
registerB();

