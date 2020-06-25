import {
    DogButton,
    likeDogs,
    dislikeDogs,
    dogShow,
    infoDog,
    nextButton
} from './utils/dog';
import {
    catShow,
    CatButton,
    likeCats,
    dislikeCats,
    infoCat
} from './utils/cat'
import {backButton} from './utils/backButton'

import { loginB, registerB } from './utils/login-register';


//dog
DogButton();
backButton();
likeDogs();
dislikeDogs();
dogShow();
infoDog();
nextButton();
//cat
CatButton();
likeCats();
dislikeCats();
infoCat();
catShow();
//login
loginB();
registerB();



