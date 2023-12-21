/* let isDrag = false;
let block = document.querySelector('.block');
let offsetX;
let offsetY;
block.addEventListener('mousedown',(event)=>{
    isDrag = true;
    offsetX = event.pageX - parseInt(getComputedStyle(block).left);
    offsetY = event.pageY - parseInt(getComputedStyle(block).top);
})
 document.addEventListener('mouseup',()=>isDrag = false);
document.addEventListener('mousemove', (event)=>{
      if(isDrag){
          block.style.left = `${event.pageX - offsetX}px`;
          block.style.top = `${event.pageY - offsetY}px`;
      }
  })*/

 /*  1 */
 let plus =document.querySelector('.plus');
 let minus =document.querySelector('.minus');
 let span = document.querySelector('span');
 let count = 0;
 let inter;
 plus.addEventListener('mousedown',(event)=>{
    inter = setInterval(()=>{
        count++;
        span.innerText = count;
      },200)
      span.classList.remove('red');
      span.classList.add('blue');
    })
   plus.addEventListener('mouseup',()=>clearInterval(inter));
   let inter2;
   minus.addEventListener('mousedown',(event)=>{
    inter2 = setInterval(()=>{
        if(count>0){
      count--;
      span.innerText = count;
    }
    },200) 
    span.classList.remove('blue');
    span.classList.add('red');
  })
  minus.addEventListener('mouseup',()=>clearInterval(inter2));