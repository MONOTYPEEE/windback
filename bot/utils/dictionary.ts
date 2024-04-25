export const abuseKorean = /[시씨슈쓔쉬쉽쒸쓉ㅅㅆ]([0-9]*|[0-9]+ *|@|~|이)[바방봉뽕발벌빠빡빨뻘파팔펄ㅂㅃ]|씹|[좆좇졷좄좃좉][같갓됐됏됫]?|[족즂][같갓됐됏됫]|ㅅㅣㅂㅏㄹ?|ㅂ[0-9]*ㅅ|[ㅄᄲᇪᄺᄡᄣᄦᇠ]|[존좉좇][0-9 @]*나|졸[0-9 @]*라|[자보][0-9@]+지|[봊봋봇봈볻봁봍] *이|[후훚훐훛훋훗훘훟훝훑][장앙]|[엠앰]창|애[미비]|[^탐검염도오삼]색기|([샊샛세쉐쉑쉨쉒객갞갟갯갰갴겍겎겏겤곅곆곇곗곘곜걕걖걗걧걨걬새] *@?[끼키퀴기])|[병븅][신딱]|미친[가-닣닥-힣]|[믿밑]힌|[염옘]병|[샊샛샜샠섹섺셋셌셐셱솃솄솈섁섂섓섔섘]기|지랄|니[애에]?미|[뻐뻑뻒뻙뻨][0-9@]*[뀨큐킹커킨]|꼬추|곧휴|빨통|[사싸](이코|가지)|[찐진]따|창[녀놈]|[가-힣]{2,}충[^가-힣]|환[양향]년|호[구모]|조[선센][징]|조센|[쪼쪽쪾]([발빨]이|[바빠]리)|짱[개꺠깨게꼐께]|무현|찌끄[레래]기|(하악){2,}|하[앍앜]|앙[ ]?[가-힣]+[띠딱찌]|느금|tlqkf|qud[ @~]?tls|wls|ㅈ[ㄴㄹ]|ㅗ{2,}/gim,
    abuseEnglish = /[fs]uck|fukin|bitch|bish|dick|cock|nigg|niga|hoe|asshole|shit|hell|tits|pussy|gay|lesbian|cum|dildo/gim,
    LmaoRegex = /(ㅋ|ㄲ|ㅌ|ㅎ|엌|앜|옼|잌|싴|헠|힠|앜|낰|닠|놐|넼|밬|낔|짴){2,}/g,
    tprtmRegex = /[섹셱쎅쎽쎾][ 0-9@-]?[스쓰]|sex|tprtm/gi,
    customEmojiRegex = /(<a?)?:\w+:(\d{18}>)?/g,
    unicodeEmojiRegex = /\p{RGI_Emoji}/vg
