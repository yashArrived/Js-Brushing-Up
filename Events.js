// there are multiple ways to add event:

//1) 
// .onclick() -->Should be avoided.

//2) Most optimised and good way :
// elem.addEventListener('click', function(eventt){
// alert("clickeddd")},false);

// in eventtt we get lot of methods such as timestamp etc

// Read ABOUT : type,timestamp, defaultPrevented
//target, toElement, srcElement,currentTarget,clientX,clientY,offset,screenX,screenY,altkey,ctrlkey
//shiftkey , keyCode

// EVENT PROPAGATION

// false says event bubbling
//EventBubbling-> events gets executed from inside to outside when false
//when true it says eventCapture
//EventCapture : outside event executes first
// we can also do event.stopPropagation()


// to remove element from ui after click:

// if e.trget.tagName ==='desired element tag' then :
// e.target.parentNode.remove();
// e.target.parentNode.parentNode.removeChild(e.target.parentNode)