/* KYGMIN.COM shared auth widget
   - Supabase 세션은 localStorage(sb-<ref>-auth-token)에 저장되므로
     같은 도메인의 모든 페이지에서 자동 공유된다 (rps 포함).
   - 페이지 요구사항: 없음. window.APP_LANG / APP_LANG_LISTENERS 가 있으면 EN/KR 연동.
   - 사이트 전체가 이 위젯 하나로 로그인 UI를 통일한다 (rps 포함).
   - 게임 페이지 연동:
       window.KYG_AUTH = {client, user, nickname}      ← Supabase 클라이언트 재사용
       window.KYG_AUTH_LISTENERS.push(fn(user, nickname, client))
       위젯 로드 전에 배열을 만들어 push해도 안전하다:
       window.KYG_AUTH_LISTENERS = window.KYG_AUTH_LISTENERS || []; */
(function(){
  'use strict';
  var SUPABASE_URL = 'https://zcytvhniwqqrhhqepemy.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_YvweaCTk_QXhzDkA4xIeYw_RQ1hJT3A';

  var T = {
    en: {
      guest:'GUEST', signIn:'SIGN IN', signOut:'SIGN OUT',
      title:'Sign in', sub:'One account for every game on this site. Optional — everything works without it.',
      magic:'Email me a login link', close:'Close', emailPh:'you@example.com',
      magicSent:'Link sent — check your inbox.', err:'Something went wrong. Try again.',
      nickTitle:'Pick your nickname', nickSub:'Shown on share cards and future leaderboards. 2–16 chars: Korean, letters, numbers, underscore.',
      nickPh:'nickname', check:'Check availability', save:'Save',
      nickBad:'2–16 chars: Korean, letters, numbers, underscore only.',
      nickTaken:'Already taken. Try another.', nickFree:'Available!', nickSaved:'Saved!',
      setNick:'Set nickname'
    },
    kr: {
      guest:'게스트', signIn:'로그인', signOut:'로그아웃',
      title:'로그인', sub:'계정 하나로 이 사이트의 모든 게임을 이용해요. 선택 사항 — 없어도 모든 기능이 동작합니다.',
      magic:'이메일 로그인 링크 받기', close:'닫기', emailPh:'you@example.com',
      magicSent:'링크를 보냈어요 — 메일함을 확인하세요.', err:'문제가 발생했어요. 다시 시도해 주세요.',
      nickTitle:'닉네임 설정', nickSub:'공유 카드와 향후 리더보드에 표시됩니다. 2~16자: 한글, 영문, 숫자, 밑줄.',
      nickPh:'닉네임', check:'중복 확인', save:'저장',
      nickBad:'2~16자, 한글/영문/숫자/밑줄만 가능해요.',
      nickTaken:'이미 사용 중이에요. 다른 닉네임을 골라주세요.', nickFree:'사용 가능해요!', nickSaved:'저장했어요!',
      setNick:'닉네임 설정'
    }
  };
  function lang(){ return (window.APP_LANG==='kr') ? 'kr' : 'en'; }
  function t(k){ return T[lang()][k]; }
  function nickValid(s){ return /^[A-Za-z0-9가-힣_]{2,16}$/.test(s); }

  // ── 스타일 ──
  var css = ''
  + '#kwAcct{position:fixed;left:20px;bottom:20px;z-index:50;display:none;align-items:center;'
  +   'border:2px solid #141414;box-shadow:3px 3px 0 #141414;background:#fff;'
  +   "font-family:'Archivo','Pretendard',sans-serif;font-weight:700;font-size:12px;overflow:hidden;}"
  + '#kwAcct .kw-name{padding:9px 12px;background:#2BB673;color:#F6F6F4;letter-spacing:.5px;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
  + '#kwAcct button{font:inherit;border:none;background:none;cursor:pointer;padding:9px 12px;color:#141414;letter-spacing:.5px;border-left:2px solid #141414;transition:background .1s,color .1s;}'
  + '#kwAcct button:hover{background:#2BB673;color:#F6F6F4;}'
  + '.kw-back{position:fixed;inset:0;background:rgba(20,20,20,.55);z-index:90;display:none;align-items:center;justify-content:center;padding:20px;}'
  + '.kw-back.open{display:flex;}'
  + '.kw-modal{background:#F6F6F4;border:3px solid #141414;box-shadow:8px 8px 0 #141414;padding:26px;max-width:420px;width:100%;'
  +   "font-family:'Pretendard',-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;word-break:keep-all;}"
  + ".kw-modal h3{font-family:'Archivo','Pretendard',sans-serif;font-weight:900;font-size:18px;text-transform:uppercase;margin:0 0 10px;color:#141414;}"
  + '.kw-modal p{font-size:13.5px;color:#3A3A38;margin:0 0 14px;line-height:1.6;}'
  + '.kw-modal input{width:100%;box-sizing:border-box;border:2px solid #141414;background:#fff;padding:10px 12px;font-size:14px;'
  +   "font-family:'IBM Plex Mono',monospace;outline:none;margin-bottom:10px;}"
  + '.kw-modal input:focus{box-shadow:3px 3px 0 #2BB673;}'
  + '.kw-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px;}'
  + ".kw-btn{display:inline-block;font-family:'Archivo','Pretendard',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;"
  +   'border:2px solid #141414;padding:10px 16px;box-shadow:3px 3px 0 #141414;background:#fff;cursor:pointer;color:#141414;transition:transform .1s,box-shadow .1s;}'
  + '.kw-btn:hover{transform:translate(1px,1px);box-shadow:2px 2px 0 #141414;}'
  + '.kw-btn.kw-green{background:#2BB673;color:#F6F6F4;}'
  + '.kw-btn.kw-kakao{background:#FEE500;color:#191919;}'
  + '.kw-btn.kw-fb{background:#1877F2;color:#fff;}'
  + '.kw-msg{font-family:"IBM Plex Mono",monospace;font-size:12px;min-height:16px;margin:4px 0 2px;color:#3A3A38;}'
  + '.kw-msg.ok{color:#0F6E56;}.kw-msg.err{color:#A32D2D;}'
  + '@media(max-width:640px){#kwAcct{left:12px;bottom:12px;} #kwAcct .kw-name{max-width:90px;}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ── DOM ──
  var wrap = document.createElement('div');
  wrap.innerHTML = ''
  + '<div id="kwAcct" aria-label="Account">'
  +   '<span class="kw-name" id="kwName"></span>'
  +   '<button id="kwNickBtn" style="display:none;">✎</button>'
  +   '<button id="kwAuthBtn"></button>'
  + '</div>'
  + '<div class="kw-back" id="kwAuthModal"><div class="kw-modal">'
  +   '<h3 id="kwAuthTitle"></h3><p id="kwAuthSub"></p>'
  +   '<input id="kwEmail" type="email" autocomplete="email" />'
  +   '<div class="kw-msg" id="kwAuthMsg"></div>'
  +   '<div class="kw-row">'
  +     '<button class="kw-btn kw-green" id="kwMagic"></button>'
  +     '<button class="kw-btn kw-kakao" id="kwKakao">Kakao</button>'
  +     '<button class="kw-btn kw-fb" id="kwFb">Facebook</button>'
  +     '<button class="kw-btn" id="kwAuthClose"></button>'
  +   '</div>'
  + '</div></div>'
  + '<div class="kw-back" id="kwNickModal"><div class="kw-modal">'
  +   '<h3 id="kwNickTitle"></h3><p id="kwNickSub"></p>'
  +   '<input id="kwNickInput" type="text" maxlength="16" autocomplete="off" />'
  +   '<div class="kw-msg" id="kwNickMsg"></div>'
  +   '<div class="kw-row">'
  +     '<button class="kw-btn" id="kwNickCheck"></button>'
  +     '<button class="kw-btn kw-green" id="kwNickSave"></button>'
  +     '<button class="kw-btn" id="kwNickClose"></button>'
  +   '</div>'
  + '</div></div>';
  function mount(){ document.body.appendChild(wrap); init(); }
  if(document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  function $(id){ return document.getElementById(id); }
  var auth = { client:null, user:null, nickname:null };

  // 게임 페이지가 로그인 상태 변화에 반응할 수 있게 하는 훅
  window.KYG_AUTH_LISTENERS = window.KYG_AUTH_LISTENERS || [];
  function notify(){
    var ls = window.KYG_AUTH_LISTENERS;
    for(var i=0;i<ls.length;i++){
      try{ ls[i](auth.user, auth.nickname, auth.client); }
      catch(e){ console.warn('auth listener failed', e); }
    }
  }

  function texts(){
    $('kwAuthTitle').textContent=t('title'); $('kwAuthSub').textContent=t('sub');
    $('kwEmail').placeholder=t('emailPh'); $('kwMagic').textContent=t('magic'); $('kwAuthClose').textContent=t('close');
    $('kwNickTitle').textContent=t('nickTitle'); $('kwNickSub').textContent=t('nickSub');
    $('kwNickInput').placeholder=t('nickPh'); $('kwNickCheck').textContent=t('check');
    $('kwNickSave').textContent=t('save'); $('kwNickClose').textContent=t('close');
    renderChip();
  }
  function renderChip(){
    if(!auth.client) return;
    $('kwAcct').style.display='inline-flex';
    if(auth.user){
      $('kwName').textContent = auth.nickname || (auth.user.email||'…');
      $('kwAuthBtn').textContent = t('signOut');
      $('kwNickBtn').style.display='inline-block';
      $('kwNickBtn').title = auth.nickname ? auth.nickname : t('setNick');
    } else {
      $('kwName').textContent = t('guest');
      $('kwAuthBtn').textContent = t('signIn');
      $('kwNickBtn').style.display='none';
    }
  }

  function openNick(){
    $('kwNickModal').classList.add('open');
    $('kwNickInput').value = auth.nickname || '';
    $('kwNickMsg').textContent='';
    $('kwNickMsg').className='kw-msg';
  }

  async function init(){
    try{
      await new Promise(function(res,rej){
        if(window.supabase) return res();
        var s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
        s.onload=res; s.onerror=rej; document.head.appendChild(s);
      });
      auth.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      window.KYG_AUTH = auth; // 게임 페이지(대국 로깅 등)에서 재사용
    }catch(e){ console.warn('auth widget: supabase load failed', e); return; }

    texts();
    if(Array.isArray(window.APP_LANG_LISTENERS)) window.APP_LANG_LISTENERS.push(function(){ texts(); });

    auth.client.auth.onAuthStateChange(async function(_ev, session){
      auth.user = session ? session.user : null;
      if(auth.user){
        try{
          var r = await auth.client.from('profiles').select('nickname').eq('user_id', auth.user.id).maybeSingle();
          auth.nickname = (r && r.data) ? r.data.nickname : null;
        }catch(e){ auth.nickname=null; }
        if(!auth.nickname) openNick();
      } else {
        auth.nickname=null;
      }
      renderChip();
      notify();
    });

    // ── 이벤트 ──
    $('kwAuthBtn').addEventListener('click', async function(){
      if(auth.user){ await auth.client.auth.signOut(); auth.user=null; auth.nickname=null; renderChip(); return; }
      $('kwAuthMsg').textContent=''; $('kwAuthMsg').className='kw-msg';
      $('kwAuthModal').classList.add('open');
    });
    $('kwAuthClose').addEventListener('click', function(){ $('kwAuthModal').classList.remove('open'); });
    $('kwNickBtn').addEventListener('click', openNick);
    $('kwNickClose').addEventListener('click', function(){ $('kwNickModal').classList.remove('open'); });

    $('kwMagic').addEventListener('click', async function(){
      var email=$('kwEmail').value.trim(); var msg=$('kwAuthMsg');
      if(!email){ msg.className='kw-msg err'; msg.textContent=t('err'); return; }
      try{
        var r=await auth.client.auth.signInWithOtp({email:email, options:{emailRedirectTo:location.href}});
        if(r.error) throw r.error;
        msg.className='kw-msg ok'; msg.textContent=t('magicSent');
      }catch(e){ msg.className='kw-msg err'; msg.textContent=e.message||t('err'); }
    });
    $('kwKakao').addEventListener('click', async function(){
      try{
        // Kakao 앱에 account_email/profile_image 동의항목이 없으므로 scope를 profile_nickname으로 제한
        var r=await auth.client.auth.signInWithOAuth({provider:'kakao', options:{redirectTo:location.href, skipBrowserRedirect:true}});
        if(r.error) throw r.error;
        var u=new URL(r.data.url);
        u.searchParams.set('scope','profile_nickname');
        location.href=u.toString();
      }catch(e){ var m=$('kwAuthMsg'); m.className='kw-msg err'; m.textContent=e.message||t('err'); }
    });
    $('kwFb').addEventListener('click', async function(){
      try{
        var r=await auth.client.auth.signInWithOAuth({provider:'facebook', options:{redirectTo:location.href}});
        if(r.error) throw r.error;
      }catch(e){ var m=$('kwAuthMsg'); m.className='kw-msg err'; m.textContent=e.message||t('err'); }
    });
    $('kwNickCheck').addEventListener('click', async function(){
      var v=$('kwNickInput').value.trim(); var msg=$('kwNickMsg');
      if(!nickValid(v)){ msg.className='kw-msg err'; msg.textContent=t('nickBad'); return; }
      try{
        var r=await auth.client.from('profiles').select('user_id').ilike('nickname', v).maybeSingle();
        if(r.data && (!auth.user || r.data.user_id!==auth.user.id)){ msg.className='kw-msg err'; msg.textContent=t('nickTaken'); }
        else { msg.className='kw-msg ok'; msg.textContent=t('nickFree'); }
      }catch(e){ msg.className='kw-msg err'; msg.textContent=t('err'); }
    });
    $('kwNickSave').addEventListener('click', async function(){
      var v=$('kwNickInput').value.trim(); var msg=$('kwNickMsg');
      if(!auth.user) return;
      if(!nickValid(v)){ msg.className='kw-msg err'; msg.textContent=t('nickBad'); return; }
      try{
        var r=await auth.client.from('profiles').upsert({user_id:auth.user.id, nickname:v});
        if(r.error){
          if(r.error.code==='23505'){ msg.className='kw-msg err'; msg.textContent=t('nickTaken'); return; }
          throw r.error;
        }
        auth.nickname=v;
        msg.className='kw-msg ok'; msg.textContent=t('nickSaved');
        renderChip(); notify();
        setTimeout(function(){ $('kwNickModal').classList.remove('open'); }, 600);
      }catch(e){ msg.className='kw-msg err'; msg.textContent=e.message||t('err'); }
    });
  }
})();
