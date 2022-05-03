'use strict'

{
  const btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', () =>{
      if(text4_.textContent=='答え'){ 
        const results =[
        '色','黒','青','茶','金','緑','赤','銀','白','黄',
        '1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '30','40','50','60','70','80','90',
        '100','1000','100万','10億',
        '第1の 最初の','第2の','第3の','第4の','第5の','第6の','第7の','第8の','第9の','第10の',
        '家族','親','夫','妻','父','母','息子','娘','祖父','祖母','孫',
        'おじ','おば','兄　弟','姉　妹','いとこ',
        '月曜日','火曜日','水曜日','木曜日','金曜日','土曜日','日曜日'];
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text4.textContent=results[n];
        n4_.textContent=n;
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

        text4_.textContent='問い'
        text4__.textContent='　'

      }else{
        text4_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =[
        'color','black','blue','brown','gold','green','red','silver','white','yellow',
        'one','two','three','four','five','six','seven','eight','nine','ten',        
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty',
        'thirty','forty','fifty','sixty','seventy','eighty','ninety',
        'hundred','thousand','million','billion',
        'first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth',
        'family','parent','husband','wife','father','mother','son','daughter','grandfather','grandmother','grandchild',
        'uncle','aunt','brother','sister','cousin',
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        text4__.textContent=results[n4_.textContent];
      }
    });
  
  const btn = document.getElementById('btn');
    btn.addEventListener('click', () =>{
      if(text1_.textContent=='答え'){ 
        const results =['色','黒','青','茶','金','緑','赤','銀','白','黄'];
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text1.textContent=results[n];
        n1_.textContent=n;
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
        const results =['color','black','blue','brown','gold','green','red','silver','white','yellow'];
        text1__.textContent=results[n1_.textContent];
      }
    });
 

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () =>{
      if(text2_.textContent=='答え'){ 
        const results =['1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '30','40','50','60','70','80','90',
        '100','1000','100万','10億',
        '第1の 最初の','第2の','第3の','第4の','第5の','第6の','第7の','第8の','第9の','第10の'];        

        const n=Math.floor(Math.random()*results.length);
        text2.textContent=results[n];
        n2_.textContent=n;

        text2_.textContent='問い'
        text2__.textContent='　'

      }else{
        text2_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =[
        'one','two','three','four','five','six','seven','eight','nine','ten',        
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty',
        'thirty','forty','fifty','sixty','seventy','eighty','ninety',
        'hundred','thousand','million','billion',
        'first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
        
        text2__.textContent=results[n2_.textContent];
      }
    });


    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () =>{
      if(text3_.textContent=='答え'){ 
        const results =[
        '家族','親','夫','妻','父','母','息子','娘','祖父','祖母','孫',
        'おじ','おば','兄　弟','姉　妹','いとこ'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text3.textContent=results[n];
        n3_.textContent=n;
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

        text3_.textContent='問い'
        text3__.textContent='　'

      }else{
        text3_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =[
        'family','parent','husband','wife','father','mother','son','daughter','grandfather','grandmother','grandchild',
        'uncle','aunt','brother','sister','cousin'];
        text3__.textContent=results[n3_.textContent];
      }
    });
    
    
    const btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', () =>{
      if(text5_.textContent=='答え'){ 
        const results =['月曜日','火曜日','水曜日','木曜日','金曜日','土曜日','日曜日'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text5.textContent=results[n];
        n5_.textContent=n;
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

        text5_.textContent='問い'
        text5__.textContent='　'

      }else{
        text5_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        text5__.textContent=results[n5_.textContent];
      }
    });
    
    
    const btn6 = document.getElementById('btn6');
    btn6.addEventListener('click', () =>{
      if(text6_.textContent=='答え'){ 
        const results =['家','部屋','いす','壁','風呂','テーブル','床','台所'
        ,'屋根','電話','テレビ','ベッド','ドア','庭'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text6.textContent=results[n];
        n6_.textContent=n;
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

        text6_.textContent='問い'
        text6__.textContent='　'

      }else{
        text6_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['house','room','chair','wall','bath','table','floor','kitchen'
        ,'roof','telephone','television','bed','door','garden'];
        text6__.textContent=results[n6_.textContent];
      }
    });
    

    
    const btn7 = document.getElementById('btn7');
    btn7.addEventListener('click', () =>{
      if(text7_.textContent=='答え'){ 
        const results =['顔','髪','歯','首','頭','目','耳','鼻','口'
        ,'体','指','手','腕','脚','足首','肩','心臓、心','ひざ','足'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text7.textContent=results[n];
        n7_.textContent=n;
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

        text7_.textContent='問い'
        text7__.textContent='　'

      }else{
        text7_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['face','hair','tooth','neck','head','eye','ear','nose','mouth'
        ,'body','finger','hand','arm','leg','ankle','shoulder','heart','knee','foot'];
        text7__.textContent=results[n7_.textContent];
      }
    });
    
    
    const btn8 = document.getElementById('btn8');
    btn8.addEventListener('click', () =>{
      if(text8_.textContent=='答え'){ 
        const results =['1月','2月','3月','4月','5月','6月','7月','8月','9月'
        ,'10月','11月','12月'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text8.textContent=results[n];
        n8_.textContent=n;
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

        text8_.textContent='問い'
        text8__.textContent='　'

      }else{
        text8_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['January','February','March','April','May','June','July','August','September'
        ,'October','November','December'];
        text8__.textContent=results[n8_.textContent];
      }
    });
    
    
    const btn9 = document.getElementById('btn9');
    btn9.addEventListener('click', () =>{
      if(text9_.textContent=='答え'){ 
        const results =['音楽','太鼓','フルート','ギター','ピアノ','歌','バイオリン'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text9.textContent=results[n];
        n9_.textContent=n;
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

        text9_.textContent='問い'
        text9__.textContent='　'

      }else{
        text9_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['music','drum','flute','guitar','piano','song','violin'];
        text9__.textContent=results[n9_.textContent];
      }
    });
    
    
    const btn10 = document.getElementById('btn10');
    btn10.addEventListener('click', () =>{
      if(text10_.textContent=='答え'){ 
        const results =['カバン','ボタン、押しボタン','ふちのない帽子','衣服','ふちのある帽子','コート','ドレス','手袋','上着'
        ,'ズボン','リボン','シャツ','Tシャツ','靴','スカート','傘','腕時計'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text10.textContent=results[n];
        n10_.textContent=n;
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

        text10_.textContent='問い'
        text10__.textContent='　'

      }else{
        text10_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['bag','button','cap','clothes','hat','coat','dress','glove','jacket'
        ,'pants','ribbon','shirt','T-shirt','shoe','skirt','umbrella','watch'];
        text10__.textContent=results[n10_.textContent];
      }
    });
}
