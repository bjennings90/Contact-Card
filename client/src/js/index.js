// import modules
import "./form";
import "./submit";

// import css files
import '../css/index.css';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'boostrap/dist/css/bootstrap.min.css';

// images
import Logo from '../images/new-logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});