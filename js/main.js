'use strict'

{

  const btn = document.getElementById('btn');
    btn.addEventListener('click', () =>{
      if(text1_.textContent=='答え'){ 
        const results =['限られた予算と厳しいスケジュールを考えれば、通販セクションを加えるのが最良の策だと思います。',
        'ウェブサイトを全面改訂する予算がないことに留意してください。また時間も大変限られています。',
        '私たちのサイトが検索結果で上位に来るようにしたいのです。SEOについてはどういった計画をお持ちでしょうか。',
        'ファクス番号が必須になっていますが、今はファクスを使っている人が少ないので任意としたいと思います。',
        'エイミー、スチュアートさんにすぐに連絡を取って請求書の発行が必要なことを知らせてください。それなしでは支払い処理ができません。',
        '会計担当者が病欠のため請求書が遅れると思われます。',
        '思いがけない電車の遅延で、ミーティングに行くのにタクシーを使わなくてはならなくなってしまいました。経費として落とすことができますか？',
        'エイミーは先の出張で新幹線の領収書を取り忘れてしまいました。どうすればいいのかアドバイスをいただけますか？',
        'プレゼンテーションは5分未満にお願いします。今日は時間が大変限られています。',
        'もしプレゼンテーションでパソコンを使うなら、順番が来たときにすぐに始めることができるよう、起動しておいてください。',
        'あなたのプレゼンは魅力あふれるものでしたが、制限時間を超えました。そろそろ終わりにしてください。',
        '今日皆さんからいただいた提案は、これから社内で検討し、来週末までに結果をお知らせできると思います。今日はここまでといたしましょう。ありがとうございました。',
        'これらすべての機能を盛り込んでいただきたいのですが、試作品制作の予算は50万円しかありません。',
        '1年後に製品の発売を計画していることを考えると、3か月以内に試作品を準備する必要がありますね。',
        'まず最初に私たちが決めなくてはならないのは、具体的にどんなフレーズをアンクル・アミーーゴに言わせるかということだと思いますよ。',
        '完全な試作品を作るために少し予算を超過することをご承認いただけますでしょうか？',
        'エイミー、失礼だよ。何をおいても彼に、締切りを守って予算内に収めてもらったことを感謝しなくちゃ。',
        '三木さん、そうしたコメントは職場では受け入れられないし、まったく不適切ですよ！',
        '訪問先でお茶を出されたら、勧められるまで飲んではいけません。',
        '君のフィードバックスキルを伸ばすために、今日のことについてハワードさんに報告してもらいたいんだ。'];
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
        const results =['Considering our limited budget and tight schedule, I think it\'s best to add an online shopping section.',
        'Please keep in mind that we don\'t have the budget to revamp the whole website, and we also have a very limited amount of time.',
        'We want to make sure our site comes up high in the search results. We are wondering what you are planning to do about SEO.',
        'You\'ve made a fax number a requirement here. Since faxes are rare now, we would like to make this optional.',
        'Amy, contact Mr. Stuart right away and let him know we need the invoice issued as soon as possible. Without it, we can\'t process payment.',
        'It seems the invoice will be late because the person in charge of their accounting section is off sick.',
        'We had to use a taxi for our meeting due to an unexpected train delay. Are we able to expense this?',
        'Amy forgot to get the receipt for the Shinkansen train ride on her last business trip. Can you advise us how to handle this?','Please keep your presentation to under five minutes since we have very limited time today.',
        'If you intend to use a computer for your presentation, please have it up and running so you can start immediately when your turn comes.',
        'Although your presentation is compelling, you have exceeded your time limit. It\'s time to wrap things up.',
        'We will now be considering all the ideas and proposals you provided today. We will be able to announce our decision by the end of next week. That\'s all for today. Thank you.',
        'We want you to include all of these features, but the budget for this prototype is only 500,000 yen.',
        'Considering that we are planning the product launch in one year, we will need the prototype ready within three months.',
        'I think the first thing we need to decide is exactly which phrases we will have Uncle Amiiiiiigo say.',
        'Would you approve going a little over budget so we can have a perfect sample?',
        'Amy, you\'re being rude. Above all, you should thank him for meeting the deadline and staying within the budget.',
        'Mr. Miki, that type of comment is unacceptable and totally inappropriate for the workplace!',
        'When you pay a visit and tea is served, you should not drink until prompted.',
        'I want you to report to Ms. Howard about today so you can improve your feedback skills.'];
        text1__.textContent=results[n1_.textContent];
      }
    });
 

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () =>{
      if(text2_.textContent=='答え'){ 
        const results =['すみませんがご一緒できません。すぐにミーティングがあるのです。',
        'どちらもよさそうですね。',
        'どれもおいしかったのですが、もうおなかがいっぱいです。',
        'ありがとうございます。ですがここはぜひ払わせてください。',
        '聞こえなかったので繰り返してくれませんか？',
        'お待たせしてすみませんでした。会議を再開しましょうか？',
        '本当に申し訳ないのですが、話を戻していいでしょうか？',
        'わかりませんでした。どういった意味なのか説明していただけませんか？',
        'お目にかかれてうれしく思います。麻里奈と呼んでください。こちらが私の名刺です。',
        'どうか、何か具体的な詳細を教えてくれませんか？',
        'このペットボトルをどこに捨てればいいか教えていただけますか？',
        '申し訳ありません。帰社しなくてはなりません。お許しください。',
        '請求書締め切りについて確認のお知らせです。締め切りは明日です。',
        'お急がせるようで心苦しいのですが、明日には請求書をいただかなくてはなりません。もう送付済みであることをご確認いただけますか？',
        ' 請求書が正しくありません。正しくは200万円です。',
        'すみません。その件に関しては確認させてください。明日までお待ちいただけますか？',
        'このプロジェクトチームにぜひ参加したいと思っています。力を合わせましょう。',
        'お時間があるときに、このファックスの内容を教えてもらえませんか？',
        'いいこと今思いついたよ！ 聞きたい？',
        '締め切り間に合うと思う？ 大丈夫？'];        
        // const results =['大吉','大吉','大吉','大吉','凶'];
        // btn.textContent=results[Math.floor(Math.random()*results.length)];
        const n=Math.floor(Math.random()*results.length);
        text2.textContent=results[n];
        n2_.textContent=n;
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

        text2_.textContent='問い'
        text2__.textContent='　'

      }else{
        text2_.textContent='答え'
        // text1__.textContent=text.textContent
        const results =['I\'m sorry, I can\'t. I have a meeting now.',
        'Both sound great!',
        'Everything was delicious, but I\'m completely full.',
        'I appreciate that, but I insist.',
        'I lost you there. Could you please repeat that?',
        'We are sorry to have kept you waiting. Shall we resume?',
        'I feel so bad for you, but can we return to the original topic?',
        'I don\'t get it. Could you explain what that means?',
        'Nice to meet you. Call me Marina. Here is my card.',
        'Please. Can you tell us anything more specific?',
        'Would you show me where I can dispose of these plastic bottles?',
        'I\'m sorry, but I need to get back. Please excuse me.',
        'This is a gentle reminder about the invoice deadline. Please note it is tomorrow.',
        'I hate to rush you, but we must receive the invoice by tomorrow. Can you please confirm it has been sent?',
        'The invoice is incorrect. The amount should be 2 million.',
        'Sorry, we need to check on that. Are you able to wait until tomorrow?',
        'I would really like to be a part of the project team. Let\'s join forces.',
        'When you have a moment, could you help me understand this fax?',
        'I just had an idea! Would you like to hear it?',
        'Do you think we can meet the deadline? Are you sure?'];
        text2__.textContent=results[n2_.textContent];
      }
    });
}