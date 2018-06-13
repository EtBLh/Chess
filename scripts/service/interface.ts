/**
 * Chess interfaces
 * 
 * NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!!
 * NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!!
 * NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!! NOT TO BE USED!!!
 */


/**
 * service.js
 */

interface service{
    clicked():void;
}

/**
 * playerControl.js
 */

interface playerControl{
    clicked(x,y):void;
}

/**
 * AIControl.js
 */

 //TODO

/**
 * dto.js
 */

 'getters and setters';
 var map, round, selected;

 /**
  * renderer.js
  */

interface renderer{
    refresh():void;
}