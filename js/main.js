'use strict'

{

  const btn = document.getElementById('btn');
    btn.addEventListener('click', () =>{
      if(text1_.textContent=='答え'){ 
        const results =['限られた予算と厳しいスケジュールを考えれば、通販セクションを加えるのが最良の策だと思います。',
        'ウェブサイトを全面改訂する予算がないことに留意してください。また時間も大変限られています。',
        '私たちのサイトが検索結果で上位に来るようにしたいのです。SEOについてはどういった計画をお持ちでしょうか。',
        'ファクス番号が必須になっていますが、今はファクスを使っている人が少ないので任意としたいと思います。'];
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
        const results =['Considering our limited budget and tight schedule, I think it\'s best to add an online shopping section.',
        'Please keep in mind that we don\'t have the budget to revamp the whole website, and we also have a very limited amount of time.',
        'We want to make sure our site comes up high in the search results. We are wondering what you are planning to do about SEO.',
        'You\'ve made a fax number a requirement here. Since faxes are rare now, we would like to make this optional.'];
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