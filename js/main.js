'use strict'

{
  const btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', () =>{
      if(text4_.textContent=='答え'){ 
        const results =['色',
        '黒',
        '青',
        '茶',
        '金',
        '緑',
        '赤',
        '銀',
        '白',
        '黄',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20'];
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
        const results =['color',
        'black',
        'blue',
        'brown',
        'gold',
        'green',
        'red',
        'silver',
        'white',
        'yellow',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten'        
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'];
        text4__.textContent=results[n4_.textContent];
      }
    });
  
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
        '締め切り間に合うと思う？ 大丈夫？',
      
      '離れないでいただけますか？ まだ説明が終わっていないのです。',
      'ここで食べることはできません。昼食まで待ってくれますか？',
      'すみません。このエリアは完全に立ち入り禁止です。',
      '本日はお越しいただきありがとうございます。みなさんをお迎えできたことを大変嬉しく思います。',
      '明日お目にかかるのを楽しみにしています！',
      'すみません。説明をすべて聞いてください。後ほど話し合いができますので。',
      'それはできません。今のところは10ピンということで合意しておきませんか？',
      '了解しました。ですが今後は変更できません。10ピンで決まりとしましょう。',
      '何を持って行けばいいですか？',
      'とうとうじかにお目にかかれて嬉しく思います。',
      'これは私たち全員からの感謝のしるしです。',
      '大丈夫。私が家まで連れて行きますよ。',
      'ユミ、何か気になっていることでもあるの？',
      'ユミ、落ち着いて。ちゃんと話をしよう。',
      'ユミ、元気出して。一緒に頑張ろう！',
      'おめでとう！ 努力が実ったね。',
      'お待ちください。担当者に代わります。',
      'たいへん残念です。差し支えなければ理由を教えていただけないでしょうか？',
      '申し訳ありません。彼女は電話中です。後ほど電話をかけるように伝えます。',
      '申し訳ありません。在庫を切らしています。次の入荷は来週になります。それまで待っていただけませんか？',

      'やってみてほしい。君ならできるよ。',
      'とってもよくできてるね。特に色使いがいいよ。',
      '集中してもらいたい。この仕事は我が社にとって大変重要なのだから。',
      'それは許されません。お客さまには最大の敬意をもって応対しなければなりません。',
      'ご存知ありませんでしたか？ 湯船で体を洗うのは禁止です。',
      'お祭りをお勧めしますよ、（1年の）この時期にしか行われませんから。',
      '鍵をお持ちください。11時に閉まります。',
      '差し支えなければ、現金がたいへんありがたいのですが。',
      'すみません、今、予約いっぱいで。1時間お待ちいただけますか？',
      'ピンクもいいですが、ブロンドのほうがお似合いかと思います。',
      '肩もみはいかがですか？ 外国の方に人気のサービスですよ。',
      'ありがとうございます。口コミ大歓迎です。そうしていただければたいへん助かります。',
      '滞在について1つ質問があります。翌朝の朝食は必要でしょうか？',
      'どうかご心配なく。到着出口でお待ちすることになっています。私がお探しします。',
      'お召し上がりになれない食べ物は何かありますか？',
      'アマドールさん、よろしければ、喜んで御一緒いたしますが。',
      '確かに私たちの予算内におさめることができますか？',
      '契約のたたき台を作ります。条件をご確認ください。',
      '妥協案を見つけなくてはなりません。どちらの側にも誤解がありました（から）費用は折半しましょう。',
      'この品質にたいへん満足しています。このレベルでお続けになれますか？',

      'ご出席ありがとうございます。今日の目的は私たちの製品についてご意見を伺うことです。',
      '何か改善に向けてのご意見はありますか？',
      '私たちはあなたの意見が知りたいです。どう思いますか？',
      'みなさんこれらのポイントで異論はありませんか？',
      '簡単ではないかもしれませんが、やってみることはできます。考えさせてください。',
      'ちょっと待ってください。そういう意味で言ったのではありません。',
      'ちゃんと理解したかどうか確かめさせてください。',
      '申し訳ありませんが、即答はできかねます。この件は持ち帰り社内で協議いたします。',
      '実はお客さまが完全には満足していないのです。MAYBEを加えることは可能でしょうか。',
      'デザインは気に入りました。でもこの文字を少しだけ小さくしてくれませんか？ また、キャップにピッタリするよう、上にあげていただけませんか？',
      '私たちのリクエストを守ってもらう必要があります。事前の同意なく変更しないようお願いします。',
      'この製品は2週間後発売です。前日までに納品をお願いできますか？',
      'すみません、間違いがあっては困りますので、詳細をメールでいただけますでしょうか？',
      'メールありがとうございました。 でも、テキストが文字化けして読めません。 もう一度お送りいただけますでしょうか？',
      'お手数ですが、メールに添付ファイルが見当たらないのです。送り直してくださいますか？',
      'メールを受け取ることができません。 添付ファイルが私たちのシステムには大きすぎるようです。',
      'すばらしいコンセプトですね。しかしながら、私たちのお客さまにはより高い品質が求められます。',
      '残念ながらそれほど長くは待てません。 もっとも早い納期は何日になりますか？',
      'たいへん申し上げにくいのですが、サンプルの納期をさらに早めていただきたいのです。 来週までにもらえますか？',
      '無理かもしれないということはわかっているのですが、最後のリクエストを1つだけさせていただきたいのです。',
      
      'お送りいただいたサンプルは完璧です。あまりにすばらしいので、商品のシリーズ化を考えてみたいと思っています。',
      '見積書、ありがとうございました。ですが、コストの内訳が明確にわかるものが必要なのです。',
      'この総額は高すぎます。ここにあるどれでもかまいませんのでコストを削ることはできませんか？',
      'ご迷惑をおかけして申し訳なく存じますが、このフォーマットで書き直していただけますでしょうか？',
      'お客さまから苦情を言われたとのことですね。ですが、適切にお答えするには全体の状況を検討する必要がありそうです。',
      'メール内容を検討しましたが、この種の使用は製品の性能をはるかに超えています。',
      '追加費用を受け入れていただけるなら、変更は可能です。ご予算の都合はつきますか？',
      'スケジュールは遅くとも、今週末までにお渡しできると思います。そのときまでお待ちいただけますか？',
      '残念ながら私どもは現在のところ、その分野のビジネスに興味がありません。',
      'そちらのビジネスプランを検討することはやぶさかではありませんが、具体的なお約束は何もできません。',
      '興味深いプランですが、いかなる投資も時期尚早かと思います。今回はお断りしなくてはなりません。',
      '個人的には実現したいのですが、これは会社の決定です。私にできることは何もありません。',
      'とてもお忙しいのはわかりますが、この予定をスケジュールに入れてもらう方法はありませんか？',
      'みなさん、よく聞いてください。お風呂は深夜12時で閉まります。そのときまでに終えること。',
      'チャド、結論に飛びつかないで。確かなことがわかるまで待ちましょう。',
      '私のことを信頼していただきうれしく思います。決してガッカリさせませんよ。',
      '空港からオフィスへの最も早い行き方について、アドバイスをお願いできないでしょうか？',
      'この書類は慎重に扱うべきものです。適切に処分してください。',
      '彼女はたいへん有能ですので、このチャレンジにうまく対処してくれることは請け合いですよ。',
      'みなさんと過ごした時間にとても感謝しています。次のチャレンジにおいても引き続きベストを尽くしたいと思います。ありがとうございました。'
      ];        

        const n=Math.floor(Math.random()*results.length);
        text2.textContent=results[n];
        n2_.textContent=n;

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
        'Do you think we can meet the deadline? Are you sure?',
      
        'Could you please stay with us? We haven\'t finished explaining.',
        'We are not supposed to eat here. Can you wait until lunch?',
        'Sorry. That area is absolutely off limits',
        'Thank you very much for coming today. It was a pleasure to have you here.',
        'We are looking forward to seeing you tomorrow!',
        'Excuse me. Please wait for the whole explanation. We can discuss after that.',
        'I\'m afraid that\'s not an option. For now, shall we settle for the ten-pin idea?',
        'Okay, but we won\'t accept any further changes. It\'s settled at ten pins.',
        'What do you want me to bring?',
        'It\'s nice to finally meet you in person.',
        'This is a little gesture of thanks from all of us.',
        'Don\'t worry. I\'ll take him home.',
        'Yumi, is there anything bothering you?',
        'Yumi, please calm down. Let\'s talk it through.',
        'Cheer up, Yumi. Let\'s hang in there together!',
        'Congratulations! You deserve this success',
        'Hold, please. I\'ll transfer you to the person in charge.',
        'I\'m sorry to hear that. If you don\'t mind, please tell us the reason.',
        'I\'m sorry. She is on another line. I will ask her to call you back.',
        'I\'m sorry. We\'re out of stock now. Our next supply will be delivered next week. Are you able to wait until then?',
    
        'We need you to try. I\'m sure you can do it',
        'Very well done! I especially like the use of colors.',
        'We need you to focus. This is very important for us.',
        'That was unacceptable. You must treat clients with the utmost respect.',
        'Did you not know? We strictly prohibit the use of soap in our communal bath.',
        'I recommend you choose the festival since it only happens this time of year.',
        'We request you take the key with you. We close at 11p.m.',
        'f you don\'t mind, we very much prefer cash.',
        'I\'m sorry, we are fully booked now. Would you be able to wait one hour?',
        'Pink is good, but I think blond will suit you better.',
        'Would you like a shoulder massage? This is a popular service among international guests.',
        'Thank you. Please spread the word. We would appreciate your help very mush.',
        'I have one question about your hotel. Would you be needing breakfast the following morning?',
        'Please don\'t worry. I\'ll be waiting for you at the arrival exit. I will find you.',
        'Are there any foods you are unable to eat?',
        'Mr. Amador, if you prefer, we would be happy to accompany you.',
        'Are you sure you can stay within our budget?',
        'We will draft the agreement. Please confirm the conditions.',
        'We must find a compromise. There was a misunderstanding on both sides. Let\'s split the cost.',
        'We are very satisfied with this quality. Are you able to continue at this level?',
      
        'Thank you for being here. Today\'s purpose is to receive your feedback on our product.',
        'Do you have any suggestions for improvement?',
        'We are interested in your opinion. What do you think?',
        'Is everyone comfortable with these points?',
        'It may not be easy, but we can try. Let us think about it.',
        'Just a minute. That\'s not what we meant.',
        'Let me confirm if I understood you correctly.',
        'I\'m sorry, but we can\'t give you an immediate answer. We need to take this back and discuss in-house.',
        'Actually, our client is not fully satisfied. Would it be possible to add a MAYBE?',
        'We love your design, but could you make these letters slightly smaller? Also, would you move them up to fit the cap?',
        'e need you to keep to our request. Please don\'t make changes without prior consent.',
        'This product is set for launch in two weeks. Could you please have them delivered by the previous day?',
        'Excuse me, but would you please send us the details by email to avoid any misunderstanding?',
        'Thank you for your email. But I was unable to read it because the text was garbled. Would you mind resending it?',
        'I\'m sorry to bother you, but we can\'t find any attachments on your email. Would you mind resending it?',
        'We are unable to receive the email. It appears the attachment was too large for our system.',
        'This is a great concept. However, we need higher quality for our customers.',
        'Unfortunately, we can\'t wait that long. What would be the earliest delivery date possible?',
        'I hate to say this, but we need your samples even sooner. Can you get them to us by next week?',
        'I realize this may be impossible, but we need to request one final change.',
      
      'The sample you sent us is perfect. It is so good we would like to consider a whole product line.',
      'Thank you for the estimate, but we need one that clearly shows the cost breakdown.',
      'This total is too high for us. Can we achieve cost reductions on anything here?',
      'We are very sorry for the inconvenience, but could you rewrite it in this format?',
      'I understand you had a complaint from your customer. But we need to review the whole situation in order to respond properly.',
      'We reviewed your email, but this type of use far exceeds product capacity.',
      'If you are open to additional cost, we can make the change. Do you have any budget flexibility?',
      'We will be able to give you the schedule by the end of this week at the latest. Would you mind waiting until then?',
      'Unfortunately, we are not interested in that field of business at the moment.',
      'We are happy to take a look at your business plan, but we can\'t make any promises.',
      'This is an interesting plan, but we feel it is too early to make any investment. We must decline at this time.',
      'Personally, I want to make it happen. But this is the company\'s decision. There\'s nothing I can do.',
      'I know you are very busy, but is there any way you can fit this into your schedule?',
      'Hey everyone, listen up! The bath will close at midnight. Remember to finish your bath before then.',
      'Chad, don\'t jump to conclusions. Let\'s wait until we know for sure.',
      'I am so grateful for your confidence in me. You won\'t be disappointed.',
      'Would you mind advising me on the fastest way to reach the office from the airport?',
      'These documents are highly sensitive. Please dispose of them properly.',
      'I can promise you that she is very competent and can meet the challenge.',
      'I am so grateful for my time with you all. I will continue to do my best in this next challenge. Thank you.'
    ];
        
        text2__.textContent=results[n2_.textContent];
      }
    });


    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () =>{
      if(text3_.textContent=='答え'){ 
        const results =['私は…について話すつもりです。',
        '最初に、次に、その後に、その後に、最後に',
        'このセクションの後に私に会いに来てください。',
        '本論に戻りましょう。',
        'これで私が言わなければならないすべてだと思います。',
        'これは私が前の図表で、まさにあなたに見せたものです。',
        'これはすぐ後に、私があなたに見せるものです。',
        'あなたは全体のシステムを見ます。',

        '我々が…について行ったのは次のようなことです。',
        '次のようなやり方で、測定は行われました。',
        'これを行うことの意味は…です。',
        'このモデルの重要な特徴はザット以下です。',
        'データはザット以下を示唆しています。',
        'これはザット以下を意味します。',
        ' 問題は残ります。',
        'トゥ以下は大変重要です。',
        'ザット以下の事実はあなたの注意をひきます。',
        'これはすぐ前に、私があなたに見せたものです。',
        'これら二つのケースから、トゥー以下がいかに重要かがわかります。',
        'モデルの重要な特徴を思い出させてください。'];        
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
        const results =['I will be talking about…　　　I am going to talk about…　　　I am going to speak about…',
        'Then,　　　after that,　　　after this　　　Finally,',
        'come and see me after this section.',
        'Let’s get back to where we were.',
        'I guess that’s all I have to say about',
        ', which I just showed you in my previous viewgraph.',
        'which I am gonna show you in a minute.',
        'you look at the whole system,',
        'What we have done on…  is as follows.',
        'Measurements have been conducted in the following manner. ',
        'The point of doing this is that…',
        'The important feature of this model is that…',
        'data indicate that',
        'This means that…',
        'question remains open',
        'it is extremely important to',
        'call your attention to the fact that',
        ', which I showed you just a couple of minutes ago.',
        'From these two cases, one can tell how important it is to…',
        'Let me refresh your memory on the important features of the model,'];
        text3__.textContent=results[n3_.textContent];
      }
    });
}
