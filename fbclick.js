var happy = document.getElementsByClassName('UFILikeLink');
function click (i){
    happy[i].click();
}
function happyFn(happy) {
    if (happy.length <= 0) {
        return;
    }
   happy[0].click();
   for (var i=1;i<happy.length;i++)
   window.setTimeout(click(i),1000);
}
happyFn(happy);





