'use strict'

{

  const btn = document.getElementById('btn');
    btn.addEventListener('click', () =>{
      if(text1_.textContent=='答え'){ 
        const results =['大吉',
        '中吉',
        '凶',
        '末吉'];
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text1.textContent=results[n];
        n_.textContent=n;
        // const n=Math.random();
        // if (n<0.05){
        //   btn.textContent='大吉'
        // }else if(n<0.2){
        //   btn.textContent='中吉'
        // }else{
        //   btn.textContent='凶'
        // }

        // if (n<0.05){
        //   text.textContent='大吉'
        // }else if(n<0.2){
        //   text.textContent='中吉'
        // }else{
        //   text.textContent='凶'
        // }

        text1_.textContent='問い'
        text1__.textContent='　'

      }else{
        text1_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['大吉0',
        '中吉1',
        '凶2',
        '末吉3'];
        text1__.textContent=results[n_.textContent];
      }
    });
 

  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', () =>{
    // const results =['大吉','中吉','凶','末吉'];
    // const results =['大吉','大吉','大吉','大吉','凶'];
    // btn.textContent=results[Math.floor(Math.random()*results.length)];
    const n=Math.random();
    // if (n<0.05){
    //   btn.textContent='大吉'
    // }else if(n<0.2){
    //   btn.textContent='中吉'
    // }else{
    //   btn.textContent='凶'
    // }
    if (n<0.05){
      text2.textContent='大吉'
    }else if(n<0.2){
      text2.textContent='中吉'
    }else{
      text2.textContent='凶'
    }
  });
}