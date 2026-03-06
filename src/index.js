/**
 * stj-tools — Cloudflare Worker
 * HTMLを直接文字列として埋め込んだシングルファイル版
 */

const INDEX_HTML  = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>stjLab Tools | 匿名・無料の住まいツール集</title>
<meta name="description" content="住所・氏名不要。家賃相場診断・引越し費用計算など、個人情報ゼロで使える無料ツール集。">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#0b4cff;--blue2:#0aa7ff;--blue3:#0bd1ff;
  --ink:#0b1b3a;--muted:#4b6287;--paper:#f4f7ff;--card:#fff;
  --line:rgba(11,76,255,.12);--green:#10b959;
}
body{font-family:'Noto Sans JP',sans-serif;background:var(--paper);color:var(--ink);line-height:1.7}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:rgba(11,76,255,.2);border-radius:99px}
::selection{background:rgba(11,76,255,.15)}

/* header */
.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.82);backdrop-filter:blur(18px);border-bottom:1px solid var(--line);box-shadow:0 2px 16px rgba(10,35,90,.07)}
.header-in{max-width:860px;margin:0 auto;padding:0 20px;height:58px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:9px;text-decoration:none}
.logo-icon{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--blue),var(--blue2));box-shadow:0 5px 12px rgba(11,76,255,.28);display:flex;align-items:center;justify-content:center;font-size:15px}
.logo-name{font-weight:900;font-size:15px;color:var(--ink)}
.header-link{font-size:13px;font-weight:700;color:var(--muted);text-decoration:none;transition:color .15s}
.header-link:hover{color:var(--blue)}

/* page */
.page{max-width:860px;margin:0 auto;padding:28px 20px 80px}

/* hero */
.hero{border-radius:22px;overflow:hidden;box-shadow:0 20px 50px rgba(10,35,90,.20);background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);margin-bottom:24px}
.hero-in{padding:44px 32px;background:radial-gradient(900px 300px at 15% 10%,rgba(255,255,255,.22),transparent 60%),radial-gradient(700px 260px at 90% 30%,rgba(255,255,255,.15),transparent 55%)}
.hero-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28);padding:5px 13px;border-radius:99px;color:#fff;font-size:11px;font-weight:800;margin-bottom:14px}
.hero-badge::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;opacity:.9}
.hero h1{font-size:clamp(24px,5vw,38px);font-weight:900;color:#fff;line-height:1.22;letter-spacing:-.01em;margin-bottom:10px}
.hero p{color:rgba(255,255,255,.88);font-size:15px;line-height:1.8;max-width:52ch;margin-bottom:22px}
.hero-meta{display:flex;flex-wrap:wrap;gap:14px}
.hero-meta-item{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.78);font-size:12px;font-weight:700}
.hero-meta-item::before{content:"✓";width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff}

/* trust badges */
.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}
.trust-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 12px;text-align:center;box-shadow:0 6px 18px rgba(10,35,90,.07)}
.trust-icon{font-size:24px;margin-bottom:7px}
.trust-ttl{font-weight:900;font-size:13px;color:var(--ink);margin-bottom:3px}
.trust-txt{font-size:11px;color:var(--muted);line-height:1.5}

/* tool cards */
.tools-title{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;color:var(--muted);margin-bottom:14px}
.tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px}
.tool-card{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 8px 24px rgba(10,35,90,.08);overflow:hidden;transition:box-shadow .2s,transform .2s;text-decoration:none;display:flex;flex-direction:column}
.tool-card:hover{box-shadow:0 16px 40px rgba(10,35,90,.14);transform:translateY(-3px)}
.tool-card-head{padding:24px 22px 20px;border-bottom:1px solid var(--line)}
.tool-card-icon{font-size:36px;margin-bottom:12px;line-height:1}
.tool-card-tag{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:var(--blue);margin-bottom:6px}
.tool-card-name{font-size:20px;font-weight:900;color:var(--ink);line-height:1.25;margin-bottom:6px}
.tool-card-desc{font-size:13px;color:var(--muted);line-height:1.75}
.tool-card-body{padding:18px 22px;flex:1}
.tool-feature{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;font-size:13px;color:var(--ink)}
.tool-feature::before{content:"✓";color:var(--blue);font-weight:900;flex-shrink:0;margin-top:1px}
.tool-card-foot{padding:16px 22px;background:rgba(11,76,255,.03);border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between}
.tool-cta{display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;font-weight:900;font-size:13px;padding:10px 20px;border-radius:10px;box-shadow:0 8px 18px rgba(11,76,255,.25);transition:all .18s}
.tool-card:hover .tool-cta{box-shadow:0 12px 24px rgba(11,76,255,.32)}
.tool-free-badge{font-size:11px;font-weight:700;color:var(--green);background:rgba(16,185,89,.10);border:1px solid rgba(16,185,89,.18);padding:4px 10px;border-radius:99px}

/* privacy section */
.privacy-section{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 8px 24px rgba(10,35,90,.08);padding:26px 24px;margin-bottom:24px}
.privacy-title{font-size:16px;font-weight:900;color:var(--ink);display:flex;align-items:center;gap:9px;margin-bottom:16px}
.privacy-title::before{content:"";width:9px;height:9px;border-radius:3px;background:linear-gradient(135deg,var(--blue),var(--blue2))}
.privacy-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.privacy-item{background:rgba(11,76,255,.04);border:1px solid rgba(11,76,255,.09);border-radius:12px;padding:14px 16px;font-size:13px;line-height:1.75;color:var(--ink)}

/* faq */
.faq-section{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 8px 24px rgba(10,35,90,.08);padding:26px 24px;margin-bottom:24px}
details{border-radius:10px;overflow:hidden;margin-bottom:4px}
summary{padding:13px 16px;font-weight:700;font-size:14px;cursor:pointer;background:rgba(11,76,255,.04);list-style:none;display:flex;justify-content:space-between;align-items:center;color:var(--ink)}
summary::-webkit-details-marker{display:none}
summary span{font-size:10px;color:var(--muted)}
details[open] summary{background:rgba(11,76,255,.07)}
.faq-ans{padding:12px 16px;font-size:13px;color:var(--muted);line-height:1.8;background:rgba(11,76,255,.02)}

/* blog cta */
.blog-cta{background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);border-radius:20px;padding:32px 28px;text-align:center;box-shadow:0 16px 40px rgba(11,76,255,.25);margin-bottom:24px}
.blog-cta h2{font-size:22px;font-weight:900;color:#fff;margin-bottom:8px}
.blog-cta p{color:rgba(255,255,255,.78);font-size:14px;margin-bottom:22px}
.blog-cta-btn{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--blue);font-weight:900;font-size:14px;padding:13px 28px;border-radius:12px;text-decoration:none;box-shadow:0 10px 22px rgba(0,0,0,.12);transition:all .18s}
.blog-cta-btn:hover{transform:translateY(-1px);box-shadow:0 14px 28px rgba(0,0,0,.17)}

/* footer */
.footer{border-top:1px solid var(--line);padding:24px 20px}
.footer-in{max-width:860px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.footer-copy{font-size:11px;color:var(--muted);font-family:'DM Mono',monospace}

/* animations */
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.fu{animation:fadeUp .38s cubic-bezier(.22,1,.36,1) both}
.d1{animation-delay:.06s}.d2{animation-delay:.12s}.d3{animation-delay:.18s}.d4{animation-delay:.24s}.d5{animation-delay:.30s}

/* responsive */
@media(max-width:640px){
  .trust-grid{grid-template-columns:1fr 1fr}
  .tools-grid{grid-template-columns:1fr}
  .privacy-grid{grid-template-columns:1fr}
  .hero-in{padding:32px 20px}
}
</style>
</head>
<body>

<header class="header">
  <div class="header-in">
    <a href="/" class="logo">
      <div class="logo-icon">🏠</div>
      <span class="logo-name">stjLab Tools</span>
    </a>
    <a href="https://stjkulab.com" class="header-link">ブログへ →</a>
  </div>
</header>

<div class="page">

  <!-- ヒーロー -->
  <div class="hero fu">
    <div class="hero-in">
      <div class="hero-badge">完全無料・匿名・個人情報不要</div>
      <h1>住まいの「いくら？」を<br>30秒で診断</h1>
      <p>住所・氏名・メールアドレス一切不要。地域や条件を選ぶだけで、家賃相場や引越し費用の目安レンジをすぐ表示します。</p>
      <div class="hero-meta">
        <div class="hero-meta-item">個人情報ゼロ</div>
        <div class="hero-meta-item">会員登録不要</div>
        <div class="hero-meta-item">ブラウザ完結</div>
        <div class="hero-meta-item">節約ポイント付き</div>
      </div>
    </div>
  </div>

  <!-- 安心バッジ -->
  <div class="trust-grid fu d1">
    <div class="trust-card">
      <div class="trust-icon">🔒</div>
      <div class="trust-ttl">個人情報不要</div>
      <div class="trust-txt">氏名・メアドの入力なし</div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">💾</div>
      <div class="trust-ttl">サーバー送信なし</div>
      <div class="trust-txt">ブラウザ内で計算完結</div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">👤</div>
      <div class="trust-ttl">個人開発ツール</div>
      <div class="trust-txt">業者提携・誘導なし</div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">¥0</div>
      <div class="trust-ttl">完全無料</div>
      <div class="trust-txt">課金・有料プランなし</div>
    </div>
  </div>

  <!-- ツールカード -->
  <p class="tools-title fu d2">利用できるツール</p>
  <div class="tools-grid fu d2">

    <!-- 家賃相場 -->
    <a href="/tools/rent/" class="tool-card">
      <div class="tool-card-head">
        <div class="tool-card-icon">🏠</div>
        <div class="tool-card-tag">Rent Estimator</div>
        <div class="tool-card-name">家賃相場<br>ざっくり診断</div>
        <div class="tool-card-desc">地域・間取り・駅徒歩・築年数を選ぶだけで、あなたの条件に合った家賃の目安レンジを表示します。</div>
      </div>
      <div class="tool-card-body">
        <div class="tool-feature">全国主要市区町村に対応</div>
        <div class="tool-feature">駅徒歩・築年数・階数で細かく補正</div>
        <div class="tool-feature">節約シミュレーション付き</div>
        <div class="tool-feature">公的統計データをベースに算出</div>
      </div>
      <div class="tool-card-foot">
        <span class="tool-free-badge">✓ 完全無料</span>
        <span class="tool-cta">診断する →</span>
      </div>
    </a>

    <!-- 引越し費用 -->
    <a href="/tools/moving/" class="tool-card">
      <div class="tool-card-head">
        <div class="tool-card-icon">🚚</div>
        <div class="tool-card-tag">Moving Cost</div>
        <div class="tool-card-name">引越し費用<br>ざっくり計算</div>
        <div class="tool-card-desc">時期・距離・荷物量を選ぶだけで、引越し費用の相場レンジを算出。節約できる条件も教えます。</div>
      </div>
      <div class="tool-card-body">
        <div class="tool-feature">繁忙期・通常期の料金差を反映</div>
        <div class="tool-feature">距離帯×荷物量で相場算出</div>
        <div class="tool-feature">フリー便・午後便の割引も計算</div>
        <div class="tool-feature">「いつ動けば安いか」を提案</div>
      </div>
      <div class="tool-card-foot">
        <span class="tool-free-badge">✓ 完全無料</span>
        <span class="tool-cta">計算する →</span>
      </div>
    </a>
  </div>

  <!-- プライバシー説明 -->
  <div class="privacy-section fu d3">
    <div class="privacy-title">個人情報・プライバシーについて</div>
    <div class="privacy-grid">
      <div class="privacy-item">🔒 氏名・メールアドレス・電話番号などの個人情報を一切収集しません。</div>
      <div class="privacy-item">💾 入力した条件はブラウザ内のみで計算されます。外部サーバーへの送信は行いません。</div>
      <div class="privacy-item">👤 個人が開発・運営するツールです。不動産業者・引越し業者との提携は一切ありません。</div>
      <div class="privacy-item">📊 計算結果は公的統計・公開データをベースにした参考目安です。実際の費用とは異なる場合があります。</div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="faq-section fu d4">
    <div class="privacy-title">よくある質問</div>
    <details>
      <summary>本当に無料ですか？<span>▼</span></summary>
      <div class="faq-ans">はい、完全無料です。有料プランや課金機能はありません。広告が表示されることがありますが、ツールの機能に制限はありません。</div>
    </details>
    <details>
      <summary>住所や氏名を入力する必要はありますか？<span>▼</span></summary>
      <div class="faq-ans">不要です。市区町村レベルの地域選択のみで、番地・建物名・氏名・メールアドレスなどは一切入力しません。</div>
    </details>
    <details>
      <summary>計算結果はどのくらい正確ですか？<span>▼</span></summary>
      <div class="faq-ans">総務省「住宅・土地統計調査」や公的相場データをベースに、条件係数を乗算したレンジ推定です。実際の物件価格は個別に異なるため、あくまで目安としてご利用ください。</div>
    </details>
    <details>
      <summary>入力データはどこかに保存されますか？<span>▼</span></summary>
      <div class="faq-ans">保存されません。すべての計算はブラウザ内で完結し、サーバーへのデータ送信は一切行いません。</div>
    </details>
    <details>
      <summary>引越し業者や不動産業者と提携していますか？<span>▼</span></summary>
      <div class="faq-ans">提携はありません。個人が開発・運営するツールです。特定業者への誘導や、個人情報の販売は行いません。</div>
    </details>
  </div>

  <!-- ブログCTA -->
  <div class="blog-cta fu d5">
    <h2>引越しの手続きも<br>まとめて管理しよう</h2>
    <p>転出届・電気・ガス・銀行など20以上の手続きを<br>期限つきで自動リスト化する無料ツールもあります</p>
    <a href="https://hikkoshi-shirei-to1.stj212527.workers.dev" class="blog-cta-btn">
      📋 引っ越し司令塔を使う →
    </a>
  </div>

</div>

<footer class="footer">
  <div class="footer-in">
    <a href="/" class="logo">
      <div class="logo-icon" style="width:24px;height:24px;border-radius:7px;font-size:12px">🏠</div>
      <span class="logo-name" style="font-size:13px">stjLab Tools</span>
    </a>
    <span class="footer-copy">個人開発ツール ／ データはブラウザにのみ保存 ／ © 2026</span>
  </div>
</footer>

</body>
</html>
`;
const RENT_HTML   = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>家賃相場ざっくり診断 | stjLab</title>
<meta name="description" content="住所不要。地域・間取り・駅徒歩・築年数を選ぶだけで家賃相場の目安レンジを表示。個人情報一切不要の無料ツールです。">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
/* ── リセット・トークン ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --blue:   #0b4cff;
  --blue2:  #0aa7ff;
  --blue3:  #0bd1ff;
  --ink:    #0b1b3a;
  --muted:  #4b6287;
  --paper:  #f4f7ff;
  --card:   #ffffff;
  --line:   rgba(11,76,255,.12);
  --green:  #10b959;
  --orange: #f97316;
  --red:    #ef4444;
}
html { scroll-behavior: smooth; }
body {
  font-family: 'Noto Sans JP', sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.7;
  min-height: 100vh;
}
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-thumb { background: rgba(11,76,255,.2); border-radius: 99px; }
::selection { background: rgba(11,76,255,.15); }

/* ── ヘッダー ── */
.header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 2px 16px rgba(10,35,90,.07);
}
.header-in {
  max-width: 820px; margin: 0 auto;
  padding: 0 20px; height: 58px;
  display: flex; align-items: center; justify-content: space-between;
}
.logo { display: flex; align-items: center; gap: 9px; text-decoration: none; }
.logo-icon {
  width: 30px; height: 30px; border-radius: 9px;
  background: linear-gradient(135deg,var(--blue),var(--blue2));
  box-shadow: 0 5px 12px rgba(11,76,255,.28);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px;
}
.logo-name { font-weight: 900; font-size: 14px; color: var(--ink); }
.header-badge {
  font-size: 10px; font-weight: 700;
  font-family: 'DM Mono', monospace;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--blue);
  background: rgba(11,76,255,.08);
  border: 1px solid rgba(11,76,255,.16);
  padding: 4px 10px; border-radius: 99px;
}

/* ── メインレイアウト ── */
.page { max-width: 820px; margin: 0 auto; padding: 24px 20px 80px; }

/* ── ヒーロー ── */
.hero {
  border-radius: 22px; overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,35,90,.20);
  background: linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);
  margin-bottom: 20px;
}
.hero-in {
  padding: 36px 28px;
  background:
    radial-gradient(900px 300px at 15% 10%, rgba(255,255,255,.22), transparent 60%),
    radial-gradient(700px 260px at 90% 30%, rgba(255,255,255,.15), transparent 55%);
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.28);
  padding: 5px 13px; border-radius: 99px;
  color: #fff; font-size: 11px; font-weight: 800; margin-bottom: 14px;
}
.hero-badge::before {
  content:""; width:7px;height:7px;border-radius:50%;background:#fff;opacity:.9;
}
.hero h1 {
  font-size: clamp(22px,4.5vw,34px); font-weight: 900;
  color: #fff; line-height: 1.22; letter-spacing: -.01em; margin-bottom: 10px;
}
.hero p { color: rgba(255,255,255,.88); font-size: 14px; line-height: 1.8; max-width: 50ch; }
.hero-meta { display: flex; gap: 18px; margin-top: 18px; flex-wrap: wrap; }
.hero-meta-item {
  display: flex; align-items: center; gap: 6px;
  color: rgba(255,255,255,.75); font-size: 12px; font-weight: 700;
}
.hero-meta-item::before {
  content:"✓"; width:16px;height:16px; border-radius:50%;
  background:rgba(255,255,255,.25); display:flex;align-items:center;justify-content:center;
  font-size:9px; color:#fff;
}

/* ── カード ── */
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(10,35,90,.08);
}

/* ── ステッパー ── */
.stepper {
  display: flex; align-items: center; gap: 0;
  margin-bottom: 20px; justify-content: center;
}
.step-item { display: flex; align-items: center; gap: 0; }
.step-dot {
  width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 900; transition: all .25s;
  position: relative; z-index: 1;
}
.step-dot.done {
  background: linear-gradient(135deg,var(--blue),var(--blue2));
  color: #fff; box-shadow: 0 4px 12px rgba(11,76,255,.30);
}
.step-dot.active {
  background: linear-gradient(135deg,var(--blue),var(--blue2));
  color: #fff; box-shadow: 0 4px 12px rgba(11,76,255,.30);
  width: 36px; height: 36px; font-size: 13px;
}
.step-dot.idle { background: rgba(11,76,255,.08); color: var(--muted); }
.step-label {
  font-size: 10px; font-weight: 700;
  font-family: 'DM Mono', monospace;
  letter-spacing: 1px; text-transform: uppercase;
  margin: 0 6px; color: var(--muted);
  white-space: nowrap;
}
.step-label.active { color: var(--blue); }
.step-line { width: 32px; height: 2px; border-radius: 99px; transition: background .25s; }
.step-line.done { background: var(--blue); }
.step-line.idle { background: rgba(11,76,255,.12); }

/* ── フォーム ── */
.form-card { padding: 28px 24px; }
.form-section-title {
  font-family: 'DM Mono', monospace;
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; color: var(--blue); margin-bottom: 8px;
}
.form-title {
  font-size: 22px; font-weight: 900; line-height: 1.3;
  color: var(--ink); margin-bottom: 4px; letter-spacing: -.01em;
}
.form-sub { font-size: 13px; color: var(--muted); margin-bottom: 26px; }

/* ラベル */
.field-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 700; color: var(--muted);
  display: block; margin-bottom: 8px;
}

/* セレクト */
.stj-select {
  width: 100%; padding: 12px 16px;
  border-radius: 12px; font-size: 14px; font-weight: 600;
  border: 1.5px solid var(--line);
  background: #fff; color: var(--ink);
  box-shadow: inset 0 2px 4px rgba(11,76,255,.04);
  outline: none; transition: all .15s;
  font-family: 'Noto Sans JP', sans-serif;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234b6287' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
.stj-select:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(11,76,255,.10);
}

/* ラジオグリッド */
.radio-grid { display: grid; gap: 8px; }
.radio-grid.cols-2 { grid-template-columns: 1fr 1fr; }
.radio-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.radio-grid.cols-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

.radio-btn {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px; padding: 12px 8px;
  border-radius: 12px; border: 1.5px solid rgba(11,76,255,.14);
  background: #fff; cursor: pointer; transition: all .15s;
  text-align: center; min-height: 56px;
}
.radio-btn:hover { border-color: rgba(11,76,255,.35); background: rgba(11,76,255,.03); }
.radio-btn.selected {
  border-color: var(--blue); border-width: 2px;
  background: linear-gradient(135deg,rgba(11,76,255,.08),rgba(10,167,255,.04));
  box-shadow: 0 6px 16px rgba(11,76,255,.12);
}
.radio-btn-icon { font-size: 20px; line-height: 1; }
.radio-btn-label { font-size: 12px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.radio-btn-sub { font-size: 10px; color: var(--muted); line-height: 1.3; }
.radio-btn.selected .radio-btn-label { color: var(--blue); }

/* フィールドグループ */
.field-group { margin-bottom: 22px; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 22px; }

/* ボタン */
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: linear-gradient(135deg,var(--blue),var(--blue2));
  color: #fff; font-weight: 900; font-size: 15px;
  padding: 14px 32px; border-radius: 13px; border: none; cursor: pointer;
  box-shadow: 0 10px 24px rgba(11,76,255,.28);
  transition: all .18s; width: 100%; margin-top: 6px;
  font-family: 'Noto Sans JP', sans-serif;
}
.btn-primary:hover { box-shadow: 0 14px 30px rgba(11,76,255,.36); transform: translateY(-1px); }
.btn-primary:disabled { opacity: .45; cursor: not-allowed; transform: none; }
.btn-sub {
  display: inline-flex; align-items: center; gap: 7px;
  background: #fff; color: var(--blue); font-weight: 700; font-size: 13px;
  padding: 10px 20px; border-radius: 10px;
  border: 1.5px solid rgba(11,76,255,.18); cursor: pointer;
  transition: all .15s; font-family: 'Noto Sans JP', sans-serif;
}
.btn-sub:hover { background: rgba(11,76,255,.05); }

/* ── 結果カード ── */
.result-wrap { display: none; }
.result-wrap.visible { display: block; }

.result-hero {
  background: linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);
  border-radius: 18px; padding: 28px 24px; margin-bottom: 16px;
  box-shadow: 0 16px 40px rgba(11,76,255,.25);
  position: relative; overflow: hidden;
}
.result-hero::before {
  content:''; position:absolute; top:-40px;right:-40px;
  width:200px;height:200px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,255,255,.15),transparent 70%);
}
.result-hero-tag {
  font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px;
  text-transform:uppercase; color:rgba(255,255,255,.7); margin-bottom:10px;
}
.result-range {
  font-size: clamp(28px,6vw,44px); font-weight: 900;
  color: #fff; letter-spacing: -.02em; line-height: 1.1; margin-bottom: 8px;
}
.result-range span { font-size: .55em; font-weight: 700; opacity: .8; }
.result-confidence {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.28);
  padding: 4px 12px; border-radius: 99px;
  font-size: 11px; font-weight: 700; color: #fff; margin-top: 8px;
}
.result-condition {
  margin-top: 14px; font-size: 12px; color: rgba(255,255,255,.7);
  font-family:'DM Mono',monospace;
}

/* 要因バー */
.factors-card { padding: 22px; margin-bottom: 12px; }
.factors-title {
  font-size: 15px; font-weight: 900; color: var(--ink);
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
}
.factors-title::before {
  content:''; width:9px;height:9px;border-radius:3px;
  background:linear-gradient(135deg,var(--blue),var(--blue2));
}
.factor-row { margin-bottom: 12px; }
.factor-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
.factor-name { font-size: 13px; font-weight: 700; }
.factor-value {
  font-size: 12px; font-weight: 800; font-family:'DM Mono',monospace;
  padding: 2px 8px; border-radius: 6px;
}
.factor-value.up { background:rgba(239,68,68,.10); color:#dc2626; }
.factor-value.down { background:rgba(16,185,89,.10); color:#059c4a; }
.factor-value.neutral { background:rgba(11,76,255,.08); color:var(--blue); }
.factor-bar-track { height:5px; background:rgba(11,76,255,.08); border-radius:99px; overflow:hidden; }
.factor-bar-fill { height:100%; border-radius:99px; transition:width .7s cubic-bezier(.22,1,.36,1); }
.factor-bar-fill.up { background:linear-gradient(90deg,#ef4444,#f87171); }
.factor-bar-fill.down { background:linear-gradient(90deg,var(--green),#34d399); }
.factor-bar-fill.neutral { background:linear-gradient(90deg,var(--blue),var(--blue2)); }

/* 節約シミュ */
.saving-card { padding: 22px; margin-bottom: 12px; }
.saving-title {
  font-size: 15px; font-weight: 900; color: var(--ink);
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
}
.saving-title::before {
  content:''; width:9px;height:9px;border-radius:3px;
  background:linear-gradient(135deg,var(--green),#34d399);
}
.saving-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 14px; border-radius: 11px;
  background: rgba(11,76,255,.04); border: 1px solid rgba(11,76,255,.09);
  margin-bottom: 8px; gap: 10px; flex-wrap: wrap;
}
.saving-row-text { font-size: 13px; color: var(--ink); font-weight: 600; }
.saving-amount { font-size: 14px; font-weight: 900; color: var(--green); white-space: nowrap; }

/* 注釈 */
.result-note {
  background: rgba(11,76,255,.04); border: 1px solid rgba(11,76,255,.10);
  border-radius: 12px; padding: 14px 16px;
  font-size: 12px; color: var(--muted); line-height: 1.75;
  margin-bottom: 16px;
}

/* もう一度 */
.retry-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 13px;
  background: #fff; color: var(--blue); font-weight: 700; font-size: 14px;
  border: 1.5px solid rgba(11,76,255,.18); border-radius: 13px;
  cursor: pointer; transition: all .15s; font-family:'Noto Sans JP',sans-serif;
  margin-top: 4px;
}
.retry-btn:hover { background: rgba(11,76,255,.05); }

/* アニメーション */
@keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
.fade-up { animation: fadeUp .38s cubic-bezier(.22,1,.36,1) both; }
.fade-in { animation: fadeIn .25s ease both; }
.d1{animation-delay:.06s} .d2{animation-delay:.12s} .d3{animation-delay:.18s}
.d4{animation-delay:.24s} .d5{animation-delay:.30s}

/* フッター */
.footer { border-top:1px solid var(--line); padding:24px 20px; margin-top:40px; }
.footer-in {
  max-width:820px;margin:0 auto;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;
}
.footer-copy { font-size:11px;color:var(--muted);font-family:'DM Mono',monospace; }

/* レスポンシブ */
@media(max-width:600px){
  .radio-grid.cols-4 { grid-template-columns:1fr 1fr; }
  .radio-grid.cols-3 { grid-template-columns:1fr 1fr; }
  .field-row { grid-template-columns:1fr; }
  .hero-in { padding:28px 18px; }
  .form-card { padding:22px 18px; }
  .step-label { display:none; }
}
</style>
</head>
<body>

<!-- ヘッダー -->
<header class="header">
  <div class="header-in">
    <a href="/" class="logo">
      <div class="logo-icon">🏠</div>
      <span class="logo-name">stjLab</span>
    </a>
    <span class="header-badge">Rent Estimator</span>
  </div>
</header>

<div class="page">

  <!-- ヒーロー -->
  <div class="hero fade-up">
    <div class="hero-in">
      <div class="hero-badge">無料・匿名・30秒</div>
      <h1>家賃相場を<br>ざっくり診断</h1>
      <p>地域・間取り・駅徒歩・築年数を選ぶだけで、あなたの条件に合った家賃の目安レンジをすぐ表示します。</p>
      <div class="hero-meta">
        <div class="hero-meta-item">住所・氏名不要</div>
        <div class="hero-meta-item">個人情報ゼロ</div>
        <div class="hero-meta-item">節約ポイント付き</div>
      </div>
    </div>
  </div>

  <!-- ステッパー -->
  <div class="stepper fade-up d1" id="stepper">
    <div class="step-item">
      <div class="step-dot active" id="dot1">1</div>
      <span class="step-label active" id="lbl1">地域・間取り</span>
    </div>
    <div class="step-line idle" id="line1"></div>
    <div class="step-item">
      <div class="step-dot idle" id="dot2">2</div>
      <span class="step-label" id="lbl2">条件</span>
    </div>
    <div class="step-line idle" id="line2"></div>
    <div class="step-item">
      <div class="step-dot idle" id="dot3">3</div>
      <span class="step-label" id="lbl3">結果</span>
    </div>
  </div>

  <!-- ── STEP 1 ── -->
  <div class="card form-card fade-up d2" id="step1">
    <p class="form-section-title">Step 01 / 地域・間取り</p>
    <h2 class="form-title">エリアと間取りを<br>教えてください</h2>
    <p class="form-sub">市区町村まで選択してください。番地・建物名の入力は不要です。</p>

    <div class="field-row">
      <div>
        <label class="field-label">都道府県</label>
        <select class="stj-select" id="pref" onchange="onPrefChange()">
          <option value="">選択してください</option>
        </select>
      </div>
      <div>
        <label class="field-label">市区町村</label>
        <select class="stj-select" id="city" onchange="checkStep1()">
          <option value="">都道府県を先に選択</option>
        </select>
      </div>
    </div>

    <div class="field-group">
      <label class="field-label">間取り</label>
      <div class="radio-grid cols-4" id="madori-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">住居タイプ</label>
      <div class="radio-grid cols-2" id="type-grid"></div>
    </div>

    <button class="btn-primary" id="btn-step1" disabled onclick="goStep(2)">
      次へ：条件を入力 →
    </button>
  </div>

  <!-- ── STEP 2 ── -->
  <div class="card form-card fade-up" id="step2" style="display:none">
    <p class="form-section-title">Step 02 / 条件</p>
    <h2 class="form-title">詳しい条件を<br>教えてください</h2>
    <p class="form-sub">わからない項目は「わからない」を選べば平均値で計算します。</p>

    <div class="field-group">
      <label class="field-label">駅からの徒歩時間</label>
      <div class="radio-grid cols-3" id="walk-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">築年数</label>
      <div class="radio-grid cols-3" id="age-grid"></div>
    </div>

    <div class="field-row">
      <div>
        <label class="field-label">所在階</label>
        <div class="radio-grid cols-2" id="floor-grid"></div>
      </div>
      <div>
        <label class="field-label">エレベーター</label>
        <div class="radio-grid cols-2" id="ev-grid"></div>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="btn-sub" onclick="goStep(1)">← 戻る</button>
      <button class="btn-primary" style="flex:1" onclick="goStep(3)">
        診断する →
      </button>
    </div>
  </div>

  <!-- ── STEP 3：結果 ── -->
  <div id="step3" style="display:none">

    <!-- 結果ヒーロー -->
    <div class="result-hero fade-up">
      <div class="result-hero-tag">推定家賃レンジ</div>
      <div class="result-range" id="result-range">
        <span>月額</span> ―
      </div>
      <div class="result-confidence" id="result-conf">計算中...</div>
      <div class="result-condition" id="result-cond"></div>
    </div>

    <!-- 要因カード -->
    <div class="card factors-card fade-up d1">
      <div class="factors-title">家賃に影響した要因</div>
      <div id="factors-list"></div>
    </div>

    <!-- 節約シミュレーション -->
    <div class="card saving-card fade-up d2">
      <div class="saving-title">節約シミュレーション</div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:14px">条件を1つ変えると、どれだけ下がる可能性があるか</p>
      <div id="saving-list"></div>
    </div>

    <!-- 注釈 -->
    <div class="result-note fade-up d3">
      📊 <strong>計算の根拠：</strong>総務省統計局「住宅・土地統計調査」の市区町村別平均家賃をベースラインとし、駅徒歩・築年数・階数・EV有無の条件係数を乗算してレンジ化しています。実際の家賃は物件ごとに異なります。本ツールの推定値は参考目安であり、保証するものではありません。<br>
      🔒 入力内容はブラウザ内で計算され、サーバーへの送信・保存は一切行いません。
    </div>

    <button class="retry-btn fade-up d4" onclick="goStep(1)">
      🔄 条件を変えてもう一度診断する
    </button>
  </div>

</div>

<!-- フッター -->
<footer class="footer">
  <div class="footer-in">
    <a href="/" class="logo">
      <div class="logo-icon" style="width:24px;height:24px;border-radius:7px;font-size:12px">🏠</div>
      <span class="logo-name" style="font-size:13px">stjLab</span>
    </a>
    <span class="footer-copy">個人開発ツール ／ データはブラウザにのみ保存 ／ © 2026</span>
  </div>
</footer>

<script>
/* ========================================
   データ：都道府県・市区町村・ベース家賃
   出典：総務省 住宅・土地統計調査（令和5年）ベース
   ※実際の値は公開データの代表値を参考に設定
   ======================================== */

const PREF_DATA = {
  "東京都": {
    cities: {
      "千代田区":  { base1k:175000, base1dk:210000, base1ldk:260000, base2ldk:350000, base3ldk:480000 },
      "中央区":    { base1k:160000, base1dk:195000, base1ldk:240000, base2ldk:320000, base3ldk:440000 },
      "港区":      { base1k:180000, base1dk:220000, base1ldk:280000, base2ldk:380000, base3ldk:530000 },
      "新宿区":    { base1k:131600, base1dk:162000, base1ldk:198000, base2ldk:280000, base3ldk:390000 },
      "渋谷区":    { base1k:155000, base1dk:190000, base1ldk:235000, base2ldk:330000, base3ldk:460000 },
      "目黒区":    { base1k:132000, base1dk:163000, base1ldk:200000, base2ldk:285000, base3ldk:395000 },
      "世田谷区":  { base1k:110000, base1dk:136000, base1ldk:168000, base2ldk:240000, base3ldk:330000 },
      "杉並区":    { base1k:105000, base1dk:129000, base1ldk:160000, base2ldk:225000, base3ldk:310000 },
      "中野区":    { base1k: 98000, base1dk:121000, base1ldk:149000, base2ldk:210000, base3ldk:290000 },
      "豊島区":    { base1k: 95000, base1dk:117000, base1ldk:144000, base2ldk:200000, base3ldk:280000 },
      "板橋区":    { base1k: 85000, base1dk:105000, base1ldk:130000, base2ldk:182000, base3ldk:252000 },
      "練馬区":    { base1k: 82000, base1dk:101000, base1ldk:124000, base2ldk:176000, base3ldk:242000 },
      "足立区":    { base1k: 75000, base1dk: 92000, base1ldk:113000, base2ldk:158000, base3ldk:218000 },
      "江戸川区":  { base1k: 77000, base1dk: 95000, base1ldk:116000, base2ldk:163000, base3ldk:224000 },
      "品川区":    { base1k:118000, base1dk:145000, base1ldk:178000, base2ldk:255000, base3ldk:350000 },
      "大田区":    { base1k:105000, base1dk:129000, base1ldk:160000, base2ldk:226000, base3ldk:312000 },
      "町田市":    { base1k: 74800, base1dk: 92000, base1ldk:113000, base2ldk:158000, base3ldk:218000 },
      "八王子市":  { base1k: 65000, base1dk: 80000, base1ldk: 98000, base2ldk:138000, base3ldk:190000 },
      "立川市":    { base1k: 78000, base1dk: 96000, base1ldk:118000, base2ldk:165000, base3ldk:228000 },
      "武蔵野市":  { base1k: 92000, base1dk:113000, base1ldk:138000, base2ldk:196000, base3ldk:268000 },
    }
  },
  "神奈川県": {
    cities: {
      "横浜市中区":  { base1k: 88000, base1dk:108000, base1ldk:133000, base2ldk:188000, base3ldk:260000 },
      "横浜市西区":  { base1k: 90000, base1dk:111000, base1ldk:136000, base2ldk:192000, base3ldk:266000 },
      "横浜市港北区":{ base1k: 82000, base1dk:101000, base1ldk:124000, base2ldk:175000, base3ldk:242000 },
      "横浜市青葉区":{ base1k: 78000, base1dk: 96000, base1ldk:118000, base2ldk:166000, base3ldk:228000 },
      "川崎市幸区":  { base1k: 84000, base1dk:103000, base1ldk:127000, base2ldk:179000, base3ldk:246000 },
      "川崎市中原区":{ base1k: 86000, base1dk:106000, base1ldk:130000, base2ldk:184000, base3ldk:252000 },
      "相模原市":    { base1k: 65000, base1dk: 80000, base1ldk: 98000, base2ldk:138000, base3ldk:190000 },
      "藤沢市":      { base1k: 70000, base1dk: 86000, base1ldk:106000, base2ldk:148000, base3ldk:205000 },
      "鎌倉市":      { base1k: 75000, base1dk: 92000, base1ldk:113000, base2ldk:158000, base3ldk:218000 },
    }
  },
  "大阪府": {
    cities: {
      "大阪市北区":    { base1k: 92000, base1dk:113000, base1ldk:139000, base2ldk:196000, base3ldk:270000 },
      "大阪市中央区":  { base1k: 90000, base1dk:111000, base1ldk:136000, base2ldk:192000, base3ldk:265000 },
      "大阪市西区":    { base1k: 82000, base1dk:101000, base1ldk:124000, base2ldk:175000, base3ldk:241000 },
      "大阪市天王寺区":{ base1k: 78000, base1dk: 96000, base1ldk:118000, base2ldk:166000, base3ldk:229000 },
      "大阪市浪速区":  { base1k: 72000, base1dk: 88000, base1ldk:109000, base2ldk:153000, base3ldk:211000 },
      "大阪市淀川区":  { base1k: 70000, base1dk: 86000, base1ldk:106000, base2ldk:148000, base3ldk:205000 },
      "大阪市東淀川区":{ base1k: 65000, base1dk: 80000, base1ldk: 98000, base2ldk:138000, base3ldk:190000 },
      "堺市":          { base1k: 58000, base1dk: 71000, base1ldk: 88000, base2ldk:124000, base3ldk:170000 },
      "豊中市":        { base1k: 67000, base1dk: 82000, base1ldk:101000, base2ldk:142000, base3ldk:196000 },
      "吹田市":        { base1k: 65000, base1dk: 80000, base1ldk: 98000, base2ldk:138000, base3ldk:190000 },
    }
  },
  "愛知県": {
    cities: {
      "名古屋市中区":  { base1k: 82000, base1dk:101000, base1ldk:124000, base2ldk:175000, base3ldk:241000 },
      "名古屋市千種区":{ base1k: 72000, base1dk: 88000, base1ldk:108000, base2ldk:153000, base3ldk:210000 },
      "名古屋市東区":  { base1k: 70000, base1dk: 86000, base1ldk:106000, base2ldk:148000, base3ldk:204000 },
      "名古屋市北区":  { base1k: 60000, base1dk: 74000, base1ldk: 91000, base2ldk:128000, base3ldk:176000 },
      "名古屋市緑区":  { base1k: 56000, base1dk: 69000, base1ldk: 85000, base2ldk:119000, base3ldk:164000 },
      "豊田市":        { base1k: 52000, base1dk: 64000, base1ldk: 78000, base2ldk:110000, base3ldk:152000 },
      "岡崎市":        { base1k: 50000, base1dk: 62000, base1ldk: 76000, base2ldk:106000, base3ldk:146000 },
    }
  },
  "福岡県": {
    cities: {
      "福岡市中央区":{ base1k: 78000, base1dk: 96000, base1ldk:118000, base2ldk:166000, base3ldk:229000 },
      "福岡市博多区":{ base1k: 72000, base1dk: 88000, base1ldk:109000, base2ldk:153000, base3ldk:210000 },
      "福岡市南区":  { base1k: 64000, base1dk: 79000, base1ldk: 97000, base2ldk:136000, base3ldk:187000 },
      "福岡市早良区":{ base1k: 62000, base1dk: 76000, base1ldk: 94000, base2ldk:132000, base3ldk:181000 },
      "北九州市小倉北区":{ base1k:52000, base1dk:64000, base1ldk:78000, base2ldk:110000, base3ldk:152000 },
    }
  },
  "北海道": {
    cities: {
      "札幌市中央区":{ base1k: 55000, base1dk: 68000, base1ldk: 83000, base2ldk:117000, base3ldk:162000 },
      "札幌市北区":  { base1k: 48000, base1dk: 59000, base1ldk: 72000, base2ldk:102000, base3ldk:140000 },
      "札幌市西区":  { base1k: 46000, base1dk: 57000, base1ldk: 70000, base2ldk: 98000, base3ldk:135000 },
      "旭川市":      { base1k: 38000, base1dk: 47000, base1ldk: 57000, base2ldk: 81000, base3ldk:111000 },
    }
  },
  "宮城県": {
    cities: {
      "仙台市青葉区":{ base1k: 58000, base1dk: 71000, base1ldk: 88000, base2ldk:124000, base3ldk:170000 },
      "仙台市宮城野区":{ base1k:52000, base1dk:64000, base1ldk:78000, base2ldk:110000, base3ldk:152000 },
      "仙台市泉区":  { base1k: 50000, base1dk: 62000, base1ldk: 76000, base2ldk:106000, base3ldk:147000 },
    }
  },
  "岩手県": {
    cities: {
      "盛岡市":  { base1k: 49200, base1dk: 61000, base1ldk: 74000, base2ldk:105000, base3ldk:144000 },
      "一関市":  { base1k: 38000, base1dk: 47000, base1ldk: 57000, base2ldk: 81000, base3ldk:111000 },
    }
  },
  "広島県": {
    cities: {
      "広島市中区":  { base1k: 62000, base1dk: 76000, base1ldk: 94000, base2ldk:132000, base3ldk:181000 },
      "広島市西区":  { base1k: 56000, base1dk: 69000, base1ldk: 85000, base2ldk:119000, base3ldk:164000 },
    }
  },
};

/* 間取り・条件の選択肢 */
const MADORI = [
  { key:'1r',   label:'1R',    sub:'〜25㎡' },
  { key:'1k',   label:'1K',    sub:'〜30㎡' },
  { key:'1dk',  label:'1DK',   sub:'〜40㎡' },
  { key:'1ldk', label:'1LDK',  sub:'〜50㎡' },
  { key:'2ldk', label:'2LDK',  sub:'〜70㎡' },
  { key:'3ldk', label:'3LDK',  sub:'〜80㎡' },
  { key:'4ldk', label:'4LDK+', sub:'80㎡〜' },
  { key:'other',label:'その他',sub:'戸建など' },
];
const TYPES = [
  { key:'mansion', label:'🏢 マンション', sub:'鉄筋コンクリート' },
  { key:'apart',   label:'🏠 アパート',   sub:'木造・軽量鉄骨' },
];
const WALK = [
  { key:'w1', label:'🚶 〜5分',   sub:'駅チカ' },
  { key:'w2', label:'🚶 6〜10分', sub:'基準' },
  { key:'w3', label:'🚶 11〜15分',sub:'やや遠い' },
  { key:'w4', label:'🚶 16〜20分',sub:'遠い' },
  { key:'w5', label:'🚶 21分以上',sub:'かなり遠い' },
  { key:'w0', label:'❓ わからない',sub:'平均で計算' },
];
const AGE = [
  { key:'a1', label:'🆕 新築〜5年',  sub:'最新設備' },
  { key:'a2', label:'✨ 6〜10年',    sub:'新しめ' },
  { key:'a3', label:'🏠 11〜20年',   sub:'基準' },
  { key:'a4', label:'🏚 21〜30年',   sub:'築古' },
  { key:'a5', label:'🏚 31年以上',   sub:'かなり古い' },
  { key:'a0', label:'❓ わからない', sub:'平均で計算' },
];
const FLOOR = [
  { key:'f1', label:'1階',     sub:'防犯注意' },
  { key:'f2', label:'2〜3階',  sub:'基準' },
  { key:'f3', label:'4〜5階',  sub:'眺望あり' },
  { key:'f4', label:'6階以上', sub:'高層' },
];
const EV = [
  { key:'ev1', label:'✅ あり',        sub:'' },
  { key:'ev0', label:'❌ なし',        sub:'' },
];

/* 係数テーブル */
const WALK_COEF = {
  w1:{ low:1.06, high:1.14, label:'〜5分', saving_label:'11〜15分にすると' },
  w2:{ low:1.00, high:1.00, label:'6〜10分', saving_label: null },
  w3:{ low:0.93, high:0.97, label:'11〜15分', saving_label:'16〜20分にすると' },
  w4:{ low:0.87, high:0.93, label:'16〜20分', saving_label:'21分以上にすると' },
  w5:{ low:0.80, high:0.88, label:'21分以上', saving_label:null },
  w0:{ low:0.97, high:1.03, label:'不明', saving_label:null },
};
const AGE_COEF = {
  a1:{ low:1.08, high:1.18, label:'新築〜5年', saving_label:'11〜20年築にすると' },
  a2:{ low:1.03, high:1.09, label:'6〜10年',  saving_label:'11〜20年築にすると' },
  a3:{ low:1.00, high:1.00, label:'11〜20年', saving_label:null },
  a4:{ low:0.90, high:0.96, label:'21〜30年', saving_label:'さらに古くすると' },
  a5:{ low:0.82, high:0.92, label:'31年以上',  saving_label:null },
  a0:{ low:0.97, high:1.03, label:'不明',      saving_label:null },
};
const FLOOR_COEF = {
  f1:{ low:0.94, high:0.98, label:'1階' },
  f2:{ low:1.00, high:1.00, label:'2〜3階' },
  f3:{ low:1.01, high:1.04, label:'4〜5階' },
  f4:{ low:1.02, high:1.06, label:'6階以上' },
};
const TYPE_COEF = {
  mansion:{ low:1.06, high:1.14, label:'マンション' },
  apart:  { low:0.90, high:0.96, label:'アパート' },
};
const MADORI_KEY = {
  '1r': 'base1k', '1k': 'base1k', '1dk': 'base1dk',
  '1ldk':'base1ldk','2ldk':'base2ldk','3ldk':'base3ldk',
  '4ldk':'base3ldk','other':'base1ldk'
};

/* ── 状態 ── */
let sel = { pref:'', city:'', madori:'', type:'', walk:'w2', age:'a3', floor:'f2', ev:'ev1' };

/* ── 初期化 ── */
function init(){
  // 都道府県
  const ps = document.getElementById('pref');
  Object.keys(PREF_DATA).forEach(p=>{
    const o=document.createElement('option'); o.value=p; o.textContent=p; ps.appendChild(o);
  });
  // 間取り
  renderRadio('madori-grid', MADORI, 'madori', checkStep1);
  // 住居タイプ
  renderRadio('type-grid', TYPES, 'type', checkStep1);
  // 条件
  renderRadio('walk-grid', WALK, 'walk', ()=>{});
  renderRadio('age-grid',  AGE,  'age',  ()=>{});
  renderRadio('floor-grid',FLOOR,'floor',()=>{});
  renderRadio('ev-grid',   EV,   'ev',   ()=>{});
  // デフォルト選択
  selectOption('walk','w2'); selectOption('age','a3');
  selectOption('floor','f2'); selectOption('ev','ev1');
}

function renderRadio(gridId, items, key, onChange){
  const g=document.getElementById(gridId);
  items.forEach(item=>{
    const btn=document.createElement('div');
    btn.className='radio-btn';
    btn.id=\`rb-\${key}-\${item.key}\`;
    btn.innerHTML=\`
      <div class="radio-btn-label">\${item.label}</div>
      \${item.sub?\`<div class="radio-btn-sub">\${item.sub}</div>\`:''}
    \`;
    btn.onclick=()=>{ selectOption(key,item.key); onChange(); };
    g.appendChild(btn);
  });
}

function selectOption(key, val){
  // 現在のキーに対応するラジオグリッドのボタンをリセット
  const maps={madori:MADORI,type:TYPES,walk:WALK,age:AGE,floor:FLOOR,ev:EV};
  maps[key].forEach(item=>{
    const b=document.getElementById(\`rb-\${key}-\${item.key}\`);
    if(b) b.classList.toggle('selected', item.key===val);
  });
  sel[key]=val;
}

function onPrefChange(){
  sel.pref=document.getElementById('pref').value;
  const c=document.getElementById('city');
  c.innerHTML='<option value="">市区町村を選択</option>';
  if(sel.pref && PREF_DATA[sel.pref]){
    Object.keys(PREF_DATA[sel.pref].cities).forEach(city=>{
      const o=document.createElement('option');o.value=city;o.textContent=city;c.appendChild(o);
    });
  }
  sel.city=''; checkStep1();
}

function checkStep1(){
  sel.city=document.getElementById('city').value||'';
  const ok=sel.pref&&sel.city&&sel.madori&&sel.type;
  document.getElementById('btn-step1').disabled=!ok;
}

/* ── ステップ遷移 ── */
function goStep(n){
  ['step1','step2','step3'].forEach((id,i)=>{
    document.getElementById(id).style.display=(i+1===n)?'block':'none';
  });
  updateStepper(n);
  if(n===3) calcResult();
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateStepper(n){
  [1,2,3].forEach(i=>{
    const dot=document.getElementById(\`dot\${i}\`);
    const lbl=document.getElementById(\`lbl\${i}\`);
    dot.className='step-dot '+(i<n?'done':i===n?'active':'idle');
    lbl.className='step-label'+(i===n?' active':'');
    if(i<n) dot.textContent='✓';
    else dot.textContent=i;
    if(i<3){
      document.getElementById(\`line\${i}\`).className='step-line '+(i<n?'done':'idle');
    }
  });
}

/* ── 計算エンジン ── */
function calcResult(){
  const cityData = PREF_DATA[sel.pref]?.cities[sel.city];
  if(!cityData){ showError(); return; }

  const baseKey = MADORI_KEY[sel.madori] || 'base1k';
  const base = cityData[baseKey] || 80000;

  const walkC  = WALK_COEF[sel.walk]  || WALK_COEF.w2;
  const ageC   = AGE_COEF[sel.age]    || AGE_COEF.a3;
  const floorC = FLOOR_COEF[sel.floor]|| FLOOR_COEF.f2;
  const typeC  = TYPE_COEF[sel.type]  || TYPE_COEF.mansion;

  // EV補正（4階以上でEVなしの場合）
  const floorIsHigh = (sel.floor==='f3'||sel.floor==='f4');
  const evPenalty   = (floorIsHigh && sel.ev==='ev0') ? { low:0.88, high:0.96 } : { low:1.0, high:1.0 };

  const low  = Math.round(base * walkC.low  * ageC.low  * floorC.low  * typeC.low  * evPenalty.low  / 1000) * 1000;
  const high = Math.round(base * walkC.high * ageC.high * floorC.high * typeC.high * evPenalty.high / 1000) * 1000;

  // 信頼度
  const spread = (high - low) / low;
  const conf = spread < 0.15 ? '高' : spread < 0.25 ? '中' : '低';
  const confColor = { '高':'rgba(16,185,89,.9)', '中':'rgba(249,115,22,.9)', '低':'rgba(239,68,68,.9)' };

  // 結果表示
  document.getElementById('result-range').innerHTML =
    \`<span>月額</span> \${fmt(low)} <span style="font-size:.4em;opacity:.7">〜</span> \${fmt(high)}\`;
  document.getElementById('result-conf').innerHTML =
    \`<span style="width:6px;height:6px;border-radius:50%;background:\${confColor[conf]};display:inline-block"></span> 信頼度：\${conf}\`;
  document.getElementById('result-cond').textContent =
    \`\${sel.pref} \${sel.city} ／ \${MADORI.find(m=>m.key===sel.madori)?.label||''} ／ \${TYPE_COEF[sel.type]?.label||''}\`;

  // 要因
  renderFactors(base, walkC, ageC, floorC, typeC, evPenalty);

  // 節約
  renderSavings(base, low, high);
}

function renderFactors(base, walkC, ageC, floorC, typeC, evP){
  const factors = [
    {
      name:'地域ベース家賃', value: fmt(base),
      pct:0, dir:'neutral', bar:60,
      desc: \`\${sel.pref} \${sel.city} の\${MADORI.find(m=>m.key===sel.madori)?.label}平均\`
    },
    buildFactor('駅からの距離', walkC, base,  WALK_COEF.w2),
    buildFactor('築年数',       ageC,  base,  AGE_COEF.a3),
    buildFactor('所在階',       floorC,base,  FLOOR_COEF.f2),
    buildFactor('住居タイプ',   typeC, base,  {low:1,high:1}),
  ];
  if(evP.low < 1)
    factors.push({ name:'EV（高層・なし）', value:'-8〜-12%', pct:10, dir:'down', bar:35, desc:'4階以上でEVなしは値下がり傾向' });

  const list = document.getElementById('factors-list');
  list.innerHTML = '';
  factors.forEach(f=>{
    if(!f) return;
    list.innerHTML += \`
      <div class="factor-row">
        <div class="factor-top">
          <span class="factor-name">\${f.name}</span>
          <span class="factor-value \${f.dir}">\${f.value}</span>
        </div>
        <div class="factor-bar-track">
          <div class="factor-bar-fill \${f.dir}" style="width:\${f.bar}%"></div>
        </div>
        \${f.desc?\`<div style="font-size:11px;color:var(--muted);margin-top:3px">\${f.desc}</div>\`:''}
      </div>\`;
  });
}

function buildFactor(name, coef, base, baseCoef){
  const midActual = (coef.low+coef.high)/2;
  const midBase   = (baseCoef.low+baseCoef.high)/2;
  const diff = midActual - midBase;
  if(Math.abs(diff)<0.01) return { name, value:'±0%', pct:0, dir:'neutral', bar:50, desc:'基準と同等' };
  const pct = Math.round(diff*100);
  const sign = pct>0?'+':'';
  const dir  = pct>0?'up':'down';
  const bar  = Math.min(90, Math.abs(pct)*3+30);
  return { name, value:\`\${sign}\${pct}%\`, pct:Math.abs(pct), dir, bar, desc:'' };
}

function renderSavings(base, curLow, curHigh){
  const curMid = (curLow+curHigh)/2;
  const savings = [];

  // 駅を遠くする
  if(sel.walk==='w1'||sel.walk==='w2'){
    const altC = WALK_COEF.w3;
    const altLow  = Math.round(base * altC.low  * AGE_COEF[sel.age].low  * FLOOR_COEF[sel.floor].low  * TYPE_COEF[sel.type].low  / 1000)*1000;
    const altHigh = Math.round(base * altC.high * AGE_COEF[sel.age].high * FLOOR_COEF[sel.floor].high * TYPE_COEF[sel.type].high / 1000)*1000;
    const save = curMid - (altLow+altHigh)/2;
    if(save>1000) savings.push({ text:'駅徒歩を11〜15分に変更', amount:\`月 \${fmt(Math.round(save/1000)*1000)} ほど安くなる可能性\` });
  }

  // 築年数を古くする
  if(sel.age==='a1'||sel.age==='a2'){
    const altC = AGE_COEF.a3;
    const altLow  = Math.round(base * WALK_COEF[sel.walk].low  * altC.low  * FLOOR_COEF[sel.floor].low  * TYPE_COEF[sel.type].low  / 1000)*1000;
    const altHigh = Math.round(base * WALK_COEF[sel.walk].high * altC.high * FLOOR_COEF[sel.floor].high * TYPE_COEF[sel.type].high / 1000)*1000;
    const save = curMid - (altLow+altHigh)/2;
    if(save>1000) savings.push({ text:'築11〜20年の物件に変更', amount:\`月 \${fmt(Math.round(save/1000)*1000)} ほど安くなる可能性\` });
  }

  // アパートに変える
  if(sel.type==='mansion'){
    const altC = TYPE_COEF.apart;
    const altLow  = Math.round(base * WALK_COEF[sel.walk].low  * AGE_COEF[sel.age].low  * FLOOR_COEF[sel.floor].low  * altC.low  / 1000)*1000;
    const altHigh = Math.round(base * WALK_COEF[sel.walk].high * AGE_COEF[sel.age].high * FLOOR_COEF[sel.floor].high * altC.high / 1000)*1000;
    const save = curMid - (altLow+altHigh)/2;
    if(save>1000) savings.push({ text:'アパートに変更', amount:\`月 \${fmt(Math.round(save/1000)*1000)} ほど安くなる可能性\` });
  }

  // 1階を選ぶ
  if(sel.floor!=='f1'){
    const altC = FLOOR_COEF.f1;
    const altLow  = Math.round(base * WALK_COEF[sel.walk].low  * AGE_COEF[sel.age].low  * altC.low  * TYPE_COEF[sel.type].low  / 1000)*1000;
    const altHigh = Math.round(base * WALK_COEF[sel.walk].high * AGE_COEF[sel.age].high * altC.high * TYPE_COEF[sel.type].high / 1000)*1000;
    const save = curMid - (altLow+altHigh)/2;
    if(save>500) savings.push({ text:'1階にする', amount:\`月 \${fmt(Math.round(save/500)*500)} ほど安くなる可能性\` });
  }

  const list = document.getElementById('saving-list');
  if(savings.length===0){
    list.innerHTML = '<p style="font-size:13px;color:var(--muted)">現在の条件はすでにコストパフォーマンスが高い設定です。</p>';
    return;
  }
  list.innerHTML = savings.map(s=>\`
    <div class="saving-row">
      <span class="saving-row-text">💡 \${s.text}</span>
      <span class="saving-amount">↓ \${s.amount}</span>
    </div>
  \`).join('');
}

function fmt(n){ return '¥'+n.toLocaleString(); }
function showError(){
  document.getElementById('result-range').textContent='データ不足';
}

/* ── 起動 ── */
init();
</script>
</body>
</html>
`;
const MOVING_HTML = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>引越し費用ざっくり計算 | stjLab</title>
<meta name="description" content="個人情報不要。時期・距離・荷物量を選ぶだけで引越し費用の相場レンジを算出。フリー便・月中など節約方法も表示。">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#0b4cff;--blue2:#0aa7ff;--blue3:#0bd1ff;
  --ink:#0b1b3a;--muted:#4b6287;--paper:#f4f7ff;--card:#fff;
  --line:rgba(11,76,255,.12);--green:#10b959;--orange:#f97316;
}
body{font-family:'Noto Sans JP',sans-serif;background:var(--paper);color:var(--ink);line-height:1.7}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:rgba(11,76,255,.2);border-radius:99px}

.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.82);backdrop-filter:blur(18px);border-bottom:1px solid var(--line);box-shadow:0 2px 16px rgba(10,35,90,.07)}
.header-in{max-width:820px;margin:0 auto;padding:0 20px;height:58px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:9px;text-decoration:none}
.logo-icon{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--blue),var(--blue2));box-shadow:0 5px 12px rgba(11,76,255,.28);display:flex;align-items:center;justify-content:center;font-size:15px}
.logo-name{font-weight:900;font-size:14px;color:var(--ink)}
.header-badge{font-size:10px;font-weight:700;font-family:'DM Mono',monospace;letter-spacing:2px;text-transform:uppercase;color:var(--blue);background:rgba(11,76,255,.08);border:1px solid rgba(11,76,255,.16);padding:4px 10px;border-radius:99px}

.page{max-width:820px;margin:0 auto;padding:24px 20px 80px}

.hero{border-radius:22px;overflow:hidden;box-shadow:0 20px 50px rgba(10,35,90,.20);background:linear-gradient(135deg,#0b4cff 0%,#0aa7ff 60%,#0bd1ff 100%);margin-bottom:20px}
.hero-in{padding:36px 28px;background:radial-gradient(900px 300px at 15% 10%,rgba(255,255,255,.22),transparent 60%),radial-gradient(700px 260px at 90% 30%,rgba(255,255,255,.15),transparent 55%)}
.hero-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28);padding:5px 13px;border-radius:99px;color:#fff;font-size:11px;font-weight:800;margin-bottom:14px}
.hero-badge::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;opacity:.9}
.hero h1{font-size:clamp(22px,4.5vw,34px);font-weight:900;color:#fff;line-height:1.22;letter-spacing:-.01em;margin-bottom:10px}
.hero p{color:rgba(255,255,255,.88);font-size:14px;line-height:1.8;max-width:50ch}
.hero-meta{display:flex;gap:16px;margin-top:18px;flex-wrap:wrap}
.hero-meta-item{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.75);font-size:12px;font-weight:700}
.hero-meta-item::before{content:"✓";width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff}

.card{background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:0 8px 24px rgba(10,35,90,.08)}

.stepper{display:flex;align-items:center;gap:0;margin-bottom:20px;justify-content:center}
.step-item{display:flex;align-items:center;gap:0}
.step-dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;transition:all .25s}
.step-dot.done{background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;box-shadow:0 4px 12px rgba(11,76,255,.30)}
.step-dot.active{background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;box-shadow:0 4px 12px rgba(11,76,255,.30);width:36px;height:36px;font-size:13px}
.step-dot.idle{background:rgba(11,76,255,.08);color:var(--muted)}
.step-label{font-size:10px;font-weight:700;font-family:'DM Mono',monospace;letter-spacing:1px;text-transform:uppercase;margin:0 6px;color:var(--muted);white-space:nowrap}
.step-label.active{color:var(--blue)}
.step-line{width:32px;height:2px;border-radius:99px;transition:background .25s}
.step-line.done{background:var(--blue)}.step-line.idle{background:rgba(11,76,255,.12)}

.form-card{padding:28px 24px}
.form-section-title{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;color:var(--blue);margin-bottom:8px}
.form-title{font-size:22px;font-weight:900;line-height:1.3;color:var(--ink);margin-bottom:4px;letter-spacing:-.01em}
.form-sub{font-size:13px;color:var(--muted);margin-bottom:26px}
.field-label{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:var(--muted);display:block;margin-bottom:8px}
.field-group{margin-bottom:22px}

.radio-grid{display:grid;gap:8px}
.radio-grid.cols-2{grid-template-columns:1fr 1fr}
.radio-grid.cols-3{grid-template-columns:1fr 1fr 1fr}
.radio-grid.cols-4{grid-template-columns:1fr 1fr 1fr 1fr}
.radio-grid.cols-5{grid-template-columns:repeat(5,1fr)}

.radio-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:12px 8px;border-radius:12px;border:1.5px solid rgba(11,76,255,.14);background:#fff;cursor:pointer;transition:all .15s;text-align:center;min-height:56px}
.radio-btn:hover{border-color:rgba(11,76,255,.35);background:rgba(11,76,255,.03)}
.radio-btn.selected{border-color:var(--blue);border-width:2px;background:linear-gradient(135deg,rgba(11,76,255,.08),rgba(10,167,255,.04));box-shadow:0 6px 16px rgba(11,76,255,.12)}
.radio-btn-label{font-size:12px;font-weight:700;color:var(--ink);line-height:1.3}
.radio-btn-sub{font-size:10px;color:var(--muted);line-height:1.3}
.radio-btn.selected .radio-btn-label{color:var(--blue)}

/* 警告バナー（繁忙期） */
.warn-banner{background:linear-gradient(135deg,rgba(249,115,22,.10),rgba(249,115,22,.06));border:1.5px solid rgba(249,115,22,.25);border-radius:12px;padding:13px 16px;margin-bottom:18px;font-size:13px;color:#7a3500;display:none;line-height:1.7}
.warn-banner.show{display:block}

.btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;font-weight:900;font-size:15px;padding:14px 32px;border-radius:13px;border:none;cursor:pointer;box-shadow:0 10px 24px rgba(11,76,255,.28);transition:all .18s;width:100%;margin-top:6px;font-family:'Noto Sans JP',sans-serif}
.btn-primary:hover{box-shadow:0 14px 30px rgba(11,76,255,.36);transform:translateY(-1px)}
.btn-primary:disabled{opacity:.45;cursor:not-allowed;transform:none}
.btn-sub{display:inline-flex;align-items:center;gap:7px;background:#fff;color:var(--blue);font-weight:700;font-size:13px;padding:10px 20px;border-radius:10px;border:1.5px solid rgba(11,76,255,.18);cursor:pointer;transition:all .15s;font-family:'Noto Sans JP',sans-serif}
.btn-sub:hover{background:rgba(11,76,255,.05)}

/* 結果 */
.result-hero{background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);border-radius:18px;padding:28px 24px;margin-bottom:16px;box-shadow:0 16px 40px rgba(11,76,255,.25);position:relative;overflow:hidden}
.result-hero::before{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.15),transparent 70%)}
.result-hero-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:10px}
.result-range{font-size:clamp(26px,5.5vw,42px);font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1.1;margin-bottom:8px}
.result-range span{font-size:.5em;font-weight:700;opacity:.8}
.result-confidence{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28);padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700;color:#fff;margin-top:8px}
.result-condition{margin-top:14px;font-size:12px;color:rgba(255,255,255,.7);font-family:'DM Mono',monospace}

.factors-card{padding:22px;margin-bottom:12px}
.section-title{font-size:15px;font-weight:900;color:var(--ink);display:flex;align-items:center;gap:8px;margin-bottom:16px}
.section-title::before{content:'';width:9px;height:9px;border-radius:3px;background:linear-gradient(135deg,var(--blue),var(--blue2))}
.section-title.green::before{background:linear-gradient(135deg,var(--green),#34d399)}

.factor-row{margin-bottom:12px}
.factor-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.factor-name{font-size:13px;font-weight:700}
.factor-value{font-size:12px;font-weight:800;font-family:'DM Mono',monospace;padding:2px 8px;border-radius:6px}
.factor-value.up{background:rgba(239,68,68,.10);color:#dc2626}
.factor-value.down{background:rgba(16,185,89,.10);color:#059c4a}
.factor-value.neutral{background:rgba(11,76,255,.08);color:var(--blue)}
.factor-bar-track{height:5px;background:rgba(11,76,255,.08);border-radius:99px;overflow:hidden}
.factor-bar-fill{height:100%;border-radius:99px;transition:width .7s cubic-bezier(.22,1,.36,1)}
.factor-bar-fill.up{background:linear-gradient(90deg,#ef4444,#f87171)}
.factor-bar-fill.down{background:linear-gradient(90deg,var(--green),#34d399)}
.factor-bar-fill.neutral{background:linear-gradient(90deg,var(--blue),var(--blue2))}

.saving-row{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:11px;background:rgba(11,76,255,.04);border:1px solid rgba(11,76,255,.09);margin-bottom:8px;gap:10px;flex-wrap:wrap}
.saving-row-text{font-size:13px;color:var(--ink);font-weight:600}
.saving-amount{font-size:14px;font-weight:900;color:var(--green);white-space:nowrap}

.result-note{background:rgba(11,76,255,.04);border:1px solid rgba(11,76,255,.10);border-radius:12px;padding:14px 16px;font-size:12px;color:var(--muted);line-height:1.75;margin-bottom:16px}
.retry-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px;background:#fff;color:var(--blue);font-weight:700;font-size:14px;border:1.5px solid rgba(11,76,255,.18);border-radius:13px;cursor:pointer;transition:all .15s;font-family:'Noto Sans JP',sans-serif;margin-top:4px}
.retry-btn:hover{background:rgba(11,76,255,.05)}

/* 他ツールCTA */
.other-tools{background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 60%,var(--blue3) 100%);border-radius:18px;padding:24px;text-align:center;margin-bottom:16px;box-shadow:0 12px 30px rgba(11,76,255,.22)}
.other-tools p{color:rgba(255,255,255,.8);font-size:13px;margin-bottom:14px}
.other-tools h3{color:#fff;font-size:17px;font-weight:900;margin-bottom:6px}
.other-btn{display:inline-flex;align-items:center;gap:7px;background:#fff;color:var(--blue);font-weight:900;font-size:13px;padding:11px 22px;border-radius:10px;text-decoration:none;box-shadow:0 8px 18px rgba(0,0,0,.10);transition:all .18s;margin:4px}
.other-btn:hover{transform:translateY(-1px)}

/* footer */
.footer{border-top:1px solid var(--line);padding:24px 20px}
.footer-in{max-width:820px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.footer-copy{font-size:11px;color:var(--muted);font-family:'DM Mono',monospace}

@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.fu{animation:fadeUp .38s cubic-bezier(.22,1,.36,1) both}
.fi{animation:fadeIn .25s ease both}
.d1{animation-delay:.06s}.d2{animation-delay:.12s}.d3{animation-delay:.18s}.d4{animation-delay:.24s}

@media(max-width:600px){
  .radio-grid.cols-5{grid-template-columns:1fr 1fr}
  .radio-grid.cols-4{grid-template-columns:1fr 1fr}
  .radio-grid.cols-3{grid-template-columns:1fr 1fr}
  .step-label{display:none}
  .hero-in{padding:28px 18px}
  .form-card{padding:22px 18px}
}
</style>
</head>
<body>

<header class="header">
  <div class="header-in">
    <a href="/tools/" class="logo">
      <div class="logo-icon">🚚</div>
      <span class="logo-name">stjLab Tools</span>
    </a>
    <span class="header-badge">Moving Cost</span>
  </div>
</header>

<div class="page">

  <div class="hero fu">
    <div class="hero-in">
      <div class="hero-badge">無料・匿名・30秒</div>
      <h1>引越し費用を<br>ざっくり計算</h1>
      <p>時期・距離・荷物量を選ぶだけで、引越し費用の相場レンジをすぐ表示します。節約できる条件も一緒にお伝えします。</p>
      <div class="hero-meta">
        <div class="hero-meta-item">住所・氏名不要</div>
        <div class="hero-meta-item">個人情報ゼロ</div>
        <div class="hero-meta-item">節約提案付き</div>
      </div>
    </div>
  </div>

  <!-- ステッパー -->
  <div class="stepper fu d1" id="stepper">
    <div class="step-item">
      <div class="step-dot active" id="dot1">1</div>
      <span class="step-label active" id="lbl1">時期・距離</span>
    </div>
    <div class="step-line idle" id="line1"></div>
    <div class="step-item">
      <div class="step-dot idle" id="dot2">2</div>
      <span class="step-label" id="lbl2">荷物・オプション</span>
    </div>
    <div class="step-line idle" id="line2"></div>
    <div class="step-item">
      <div class="step-dot idle" id="dot3">3</div>
      <span class="step-label" id="lbl3">結果</span>
    </div>
  </div>

  <!-- STEP 1 -->
  <div class="card form-card fu d2" id="step1">
    <p class="form-section-title">Step 01 / 時期・距離</p>
    <h2 class="form-title">引越しの時期と<br>距離を教えてください</h2>
    <p class="form-sub">住所の入力は不要です。おおよその距離感で大丈夫です。</p>

    <div class="warn-banner" id="warn-busy">
      🔶 <strong>繁忙期（2〜4月）</strong>は引越しの依頼が集中し、通常期より費用が高くなる傾向があります（国土交通省資料より）。日程の調整が可能であれば、5月以降が節約につながる可能性があります。
    </div>

    <div class="field-group">
      <label class="field-label">引越しの時期</label>
      <div class="radio-grid cols-2" id="season-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">引越しの月</label>
      <div class="radio-grid cols-4" id="month-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">引越し距離（目安）</label>
      <div class="radio-grid cols-3" id="dist-grid"></div>
    </div>

    <button class="btn-primary" id="btn-step1" disabled onclick="goStep(2)">次へ：荷物を入力 →</button>
  </div>

  <!-- STEP 2 -->
  <div class="card form-card fu" id="step2" style="display:none">
    <p class="form-section-title">Step 02 / 荷物・オプション</p>
    <h2 class="form-title">荷物の量と<br>希望条件を教えてください</h2>
    <p class="form-sub">わからない場合は「標準」を選んでください。</p>

    <div class="field-group">
      <label class="field-label">世帯構成・荷物量</label>
      <div class="radio-grid cols-2" id="load-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">希望する便</label>
      <div class="radio-grid cols-3" id="slot-grid"></div>
    </div>

    <div class="field-group">
      <label class="field-label">引越し日は月末・月初に近いですか？</label>
      <div class="radio-grid cols-2" id="timing-grid"></div>
    </div>

    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="btn-sub" onclick="goStep(1)">← 戻る</button>
      <button class="btn-primary" style="flex:1" onclick="goStep(3)">費用を計算する →</button>
    </div>
  </div>

  <!-- STEP 3：結果 -->
  <div id="step3" style="display:none">

    <div class="result-hero fu">
      <div class="result-hero-tag">引越し費用レンジ（目安）</div>
      <div class="result-range" id="result-range"><span>合計</span> ―</div>
      <div class="result-confidence" id="result-conf">計算中...</div>
      <div class="result-condition" id="result-cond"></div>
    </div>

    <div class="card factors-card fu d1">
      <div class="section-title">費用に影響した要因</div>
      <div id="factors-list"></div>
    </div>

    <div class="card factors-card fu d2">
      <div class="section-title green">節約シミュレーション</div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:14px">条件を変えると、どれだけ安くなる可能性があるか</p>
      <div id="saving-list"></div>
    </div>

    <div class="result-note fu d3">
      📊 <strong>計算の根拠：</strong>SUUMOの引越し費用調査（繁忙期/通常期×距離帯×荷物量）および国土交通省の引越し需要データをベースに算出しています。実際の費用は業者・物件条件により異なります。本ツールの推定値は参考目安であり、保証するものではありません。<br>
      🔒 入力内容はブラウザ内で計算され、サーバーへの送信・保存は一切行いません。
    </div>

    <button class="retry-btn fu d4" onclick="goStep(1)">🔄 条件を変えてもう一度計算する</button>

    <div class="other-tools fu d4" style="margin-top:16px">
      <h3>引越し手続きもまとめて管理しよう</h3>
      <p>転出届・電気・ガス・銀行など20以上の手続きを期限つきで自動リスト化</p>
      <a href="/tools/" class="other-btn">🏠 家賃相場も診断する</a>
      <a href="https://hikkoshi-shirei-to1.stj212527.workers.dev" class="other-btn">📋 引っ越し司令塔を使う</a>
    </div>
  </div>

</div>

<footer class="footer">
  <div class="footer-in">
    <a href="/tools/" class="logo">
      <div class="logo-icon" style="width:24px;height:24px;border-radius:7px;font-size:12px">🚚</div>
      <span class="logo-name" style="font-size:13px">stjLab Tools</span>
    </a>
    <span class="footer-copy">個人開発ツール ／ データはブラウザにのみ保存 ／ © 2026</span>
  </div>
</footer>

<script>
/* ── データ・選択肢 ── */
const SEASON = [
  { key:'busy',   label:'🔶 繁忙期',  sub:'2〜4月' },
  { key:'normal', label:'✅ 通常期',  sub:'5〜1月' },
];
const MONTHS = [
  {key:'m1',label:'1月'},{key:'m2',label:'2月'},{key:'m3',label:'3月'},
  {key:'m4',label:'4月'},{key:'m5',label:'5月'},{key:'m6',label:'6月'},
  {key:'m7',label:'7月'},{key:'m8',label:'8月'},{key:'m9',label:'9月'},
  {key:'m10',label:'10月'},{key:'m11',label:'11月'},{key:'m12',label:'12月'},
];
const DIST = [
  { key:'d1', label:'🏙 同一市内',    sub:'〜15km' },
  { key:'d2', label:'🚗 近距離',      sub:'15〜50km' },
  { key:'d3', label:'🛣 中距離',      sub:'50〜200km' },
  { key:'d4', label:'🗾 長距離',      sub:'200〜500km' },
  { key:'d5', label:'✈ 超長距離',    sub:'500km以上' },
  { key:'d0', label:'❓ わからない',  sub:'中距離で計算' },
];
const LOAD = [
  { key:'l1', label:'👤 単身（少）',  sub:'1K・荷物少なめ' },
  { key:'l2', label:'👤 単身（多）',  sub:'1LDK・荷物多め' },
  { key:'l3', label:'👫 2人暮らし',   sub:'1LDK〜2DK' },
  { key:'l4', label:'👨‍👩‍👦 家族（3人）', sub:'2LDK〜3DK' },
  { key:'l5', label:'👨‍👩‍👧‍👦 家族（4人+）',sub:'3LDK以上' },
  { key:'l0', label:'❓ わからない',  sub:'2人で計算' },
];
const SLOT = [
  { key:'s1', label:'🌅 午前指定',   sub:'基準' },
  { key:'s2', label:'🌇 午後指定',   sub:'やや安め' },
  { key:'s3', label:'🎲 フリー便',   sub:'最大2万円安' },
];
const TIMING = [
  { key:'t1', label:'📅 月末・月初',  sub:'混雑期 やや高め' },
  { key:'t2', label:'📅 月中旬',      sub:'空き多め 安め' },
];

/* ── SUUMO調査ベーステーブル（円）── */
// 出典：SUUMO引越し費用調査 繁忙期/通常期×距離帯×荷物量
const BASE = {
  // [distance][load][season] = [low, high]
  d1:{ l1:{busy:[35000,52000], normal:[28000,44000]}, l2:{busy:[50000,75000], normal:[40000,62000]}, l3:{busy:[60000,90000], normal:[48000,72000]}, l4:{busy:[80000,120000],normal:[65000,98000]}, l5:{busy:[100000,150000],normal:[80000,120000]} },
  d2:{ l1:{busy:[40000,58000], normal:[32000,50000]}, l2:{busy:[58000,85000], normal:[46000,68000]}, l3:{busy:[70000,105000],normal:[56000,84000]}, l4:{busy:[95000,142000],normal:[76000,114000]}, l5:{busy:[120000,180000],normal:[96000,144000]} },
  d3:{ l1:{busy:[48000,68000], normal:[38000,58000]}, l2:{busy:[68000,100000],normal:[55000,82000]}, l3:{busy:[85000,125000],normal:[68000,100000]}, l4:{busy:[115000,170000],normal:[92000,136000]}, l5:{busy:[145000,215000],normal:[116000,172000]} },
  d4:{ l1:{busy:[56000,78000], normal:[46000,66000]}, l2:{busy:[80000,116000],normal:[65000,95000]}, l3:{busy:[100000,148000],normal:[82000,122000]}, l4:{busy:[135000,200000],normal:[110000,162000]}, l5:{busy:[170000,250000],normal:[138000,202000]} },
  d5:{ l1:{busy:[66000,92000], normal:[55000,78000]}, l2:{busy:[95000,138000],normal:[78000,112000]}, l3:{busy:[120000,175000],normal:[98000,144000]}, l4:{busy:[160000,235000],normal:[130000,190000]}, l5:{busy:[200000,295000],normal:[162000,238000]} },
  d0:{ l1:{busy:[48000,68000], normal:[38000,58000]}, l2:{busy:[68000,100000],normal:[55000,82000]}, l3:{busy:[85000,125000],normal:[68000,100000]}, l4:{busy:[115000,170000],normal:[92000,136000]}, l5:{busy:[145000,215000],normal:[116000,172000]} },
};
// l0は l3 と同じ
Object.keys(BASE).forEach(d=>{ BASE[d].l0 = BASE[d].l3; });

/* スロット・タイミング調整 */
const SLOT_ADJ = { s1:[0,0], s2:[-8000,-4000], s3:[-20000,-10000] };
const TIMING_ADJ = { t1:[5000,15000], t2:[-8000,0] };

/* ── 状態 ── */
let sel = { season:'', month:'', dist:'', load:'l1', slot:'s1', timing:'t2' };

/* ── 初期化 ── */
function init(){
  renderRadio('season-grid', SEASON, 'season', onSeasonChange);
  renderRadio('month-grid',  MONTHS, 'month',  checkStep1, true);
  renderRadio('dist-grid',   DIST,   'dist',   checkStep1);
  renderRadio('load-grid',   LOAD,   'load',   ()=>{});
  renderRadio('slot-grid',   SLOT,   'slot',   ()=>{});
  renderRadio('timing-grid', TIMING, 'timing', ()=>{});
  selectOption('load','l1'); selectOption('slot','s1'); selectOption('timing','t2');
}

function renderRadio(gridId, items, key, onChange, small=false){
  const g=document.getElementById(gridId);
  items.forEach(item=>{
    const btn=document.createElement('div');
    btn.className='radio-btn'+(small?' '+'radio-btn--sm':'');
    if(small){ btn.style.minHeight='40px'; btn.style.padding='8px 4px'; }
    btn.id=\`rb-\${key}-\${item.key}\`;
    btn.innerHTML=\`<div class="radio-btn-label" style="\${small?'font-size:11px':''}">\${item.label}</div>\${item.sub&&!small?\`<div class="radio-btn-sub">\${item.sub}</div>\`:''}\`;
    btn.onclick=()=>{ selectOption(key,item.key); onChange(); };
    g.appendChild(btn);
  });
}

function selectOption(key, val){
  const maps={season:SEASON,month:MONTHS,dist:DIST,load:LOAD,slot:SLOT,timing:TIMING};
  (maps[key]||[]).forEach(item=>{
    const b=document.getElementById(\`rb-\${key}-\${item.key}\`);
    if(b) b.classList.toggle('selected', item.key===val);
  });
  sel[key]=val;
}

function onSeasonChange(){
  const isBusy = sel.season==='busy';
  document.getElementById('warn-busy').classList.toggle('show', isBusy);
  checkStep1();
}

function checkStep1(){
  const ok = sel.season && sel.month && sel.dist;
  document.getElementById('btn-step1').disabled = !ok;
}

/* ── ステップ ── */
function goStep(n){
  ['step1','step2','step3'].forEach((id,i)=>{
    document.getElementById(id).style.display=(i+1===n)?'block':'none';
  });
  updateStepper(n);
  if(n===3) calcResult();
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateStepper(n){
  [1,2,3].forEach(i=>{
    const dot=document.getElementById(\`dot\${i}\`);
    const lbl=document.getElementById(\`lbl\${i}\`);
    dot.className='step-dot '+(i<n?'done':i===n?'active':'idle');
    lbl.className='step-label'+(i===n?' active':'');
    dot.textContent = i<n ? '✓' : i;
    if(i<3) document.getElementById(\`line\${i}\`).className='step-line '+(i<n?'done':'idle');
  });
}

/* ── 計算 ── */
function calcResult(){
  const loadKey = sel.load==='l0'?'l3':sel.load;
  const base = BASE[sel.dist]?.[loadKey]?.[sel.season];
  if(!base){ document.getElementById('result-range').textContent='データ不足'; return; }

  const slotAdj   = SLOT_ADJ[sel.slot]   || [0,0];
  const timingAdj = TIMING_ADJ[sel.timing]|| [0,0];

  const low  = Math.round((base[0] + slotAdj[0] + timingAdj[0]) / 1000) * 1000;
  const high = Math.round((base[1] + slotAdj[1] + timingAdj[1]) / 1000) * 1000;
  const safeLow  = Math.max(low, 15000);
  const safeHigh = Math.max(high, safeLow + 10000);

  const spread = (safeHigh - safeLow) / safeLow;
  const conf   = spread<0.3?'高':spread<0.5?'中':'低';
  const confColor = {'高':'rgba(16,185,89,.9)','中':'rgba(249,115,22,.9)','低':'rgba(239,68,68,.9)'};

  document.getElementById('result-range').innerHTML =
    \`<span>合計</span> \${fmt(safeLow)} <span style="font-size:.4em;opacity:.7">〜</span> \${fmt(safeHigh)}\`;
  document.getElementById('result-conf').innerHTML =
    \`<span style="width:6px;height:6px;border-radius:50%;background:\${confColor[conf]};display:inline-block"></span> 信頼度：\${conf}\`;
  document.getElementById('result-cond').textContent =
    \`\${SEASON.find(s=>s.key===sel.season)?.label||''} ／ \${DIST.find(d=>d.key===sel.dist)?.label||''} ／ \${LOAD.find(l=>l.key===sel.load)?.label||''}\`;

  renderFactors(base, slotAdj, timingAdj);
  renderSavings(base, safeLow, safeHigh);
}

function renderFactors(base, slotAdj, timingAdj){
  const isBusy = sel.season==='busy';
  const baseMid = (base[0]+base[1])/2;
  const factors = [
    { name:'距離帯ベース相場', value: \`\${fmt(base[0])}〜\${fmt(base[1])}\`, dir:'neutral', bar:60, desc:\`\${DIST.find(d=>d.key===sel.dist)?.label||''}・\${LOAD.find(l=>l.key===sel.load)?.label||''}の目安\` },
  ];
  if(isBusy) factors.push({ name:'繁忙期（2〜4月）', value:'+10〜30%', dir:'up', bar:55, desc:'3〜4月に依頼集中（国土交通省資料）' });
  else factors.push({ name:'通常期（5〜1月）', value:'標準', dir:'neutral', bar:40, desc:'繁忙期より費用が抑えられる傾向' });

  const slotMid=(slotAdj[0]+slotAdj[1])/2;
  if(slotMid<0) factors.push({ name:\`\${SLOT.find(s=>s.key===sel.slot)?.label}\`, value:\`\${fmt(slotMid)}前後\`, dir:'down', bar:40, desc:'午後・フリー便は費用が下がる傾向' });
  else factors.push({ name:'午前指定便', value:'基準', dir:'neutral', bar:50, desc:'' });

  const timingMid=(timingAdj[0]+timingAdj[1])/2;
  if(timingMid>0) factors.push({ name:'月末・月初', value:\`+\${fmt(timingMid)}前後\`, dir:'up', bar:35, desc:'月末は引越しが集中しやすい' });
  else factors.push({ name:'月中旬', value:\`\${fmt(timingMid)}前後\`, dir:'down', bar:30, desc:'空き枠が多く交渉しやすい傾向' });

  const list=document.getElementById('factors-list');
  list.innerHTML=factors.map(f=>\`
    <div class="factor-row">
      <div class="factor-top">
        <span class="factor-name">\${f.name}</span>
        <span class="factor-value \${f.dir}">\${f.value}</span>
      </div>
      <div class="factor-bar-track"><div class="factor-bar-fill \${f.dir}" style="width:\${f.bar}%"></div></div>
      \${f.desc?\`<div style="font-size:11px;color:var(--muted);margin-top:3px">\${f.desc}</div>\`:''}
    </div>\`).join('');
}

function renderSavings(base, curLow, curHigh){
  const curMid=(curLow+curHigh)/2;
  const savings=[];

  // 繁忙期→通常期
  if(sel.season==='busy'){
    const alt = BASE[sel.dist]?.[sel.load==='l0'?'l3':sel.load]?.normal;
    if(alt){
      const altMid=(alt[0]+alt[1])/2;
      const save=curMid-altMid;
      if(save>3000) savings.push({ text:'5月以降（通常期）に変更', amount:\`\${fmt(Math.round(save/1000)*1000)} ほど安くなる可能性\` });
    }
  }
  // フリー便
  if(sel.slot!=='s3'){
    const adj=SLOT_ADJ.s3;
    const save=-(adj[0]+adj[1])/2;
    if(save>0) savings.push({ text:'フリー便（時間指定なし）に変更', amount:\`最大 \${fmt(20000)} ほど安くなる可能性\` });
  }
  // 月中旬
  if(sel.timing==='t1'){
    const save = 11500;
    savings.push({ text:'月中旬（15〜20日頃）に変更', amount:\`\${fmt(save)} ほど安くなる可能性\` });
  }
  // 荷物を減らす
  if(sel.load==='l2'||sel.load==='l4'||sel.load==='l5'){
    const prevKey = {l2:'l1',l4:'l3',l5:'l4'}[sel.load];
    const alt = BASE[sel.dist]?.[prevKey]?.[sel.season];
    if(alt){
      const altMid=(alt[0]+alt[1])/2;
      const save=curMid-altMid;
      if(save>5000) savings.push({ text:'不用品を処分して荷物を減らす', amount:\`\${fmt(Math.round(save/1000)*1000)} ほど安くなる可能性\` });
    }
  }

  const list=document.getElementById('saving-list');
  if(savings.length===0){
    list.innerHTML='<p style="font-size:13px;color:var(--muted)">現在の条件はすでにコストパフォーマンスが高い設定です。</p>';
    return;
  }
  list.innerHTML=savings.map(s=>\`
    <div class="saving-row">
      <span class="saving-row-text">💡 \${s.text}</span>
      <span class="saving-amount">↓ \${s.amount}</span>
    </div>\`).join('');
}

function fmt(n){ return '¥'+Math.max(0,n).toLocaleString(); }

init();
</script>
</body>
</html>
`;

export default {
  async fetch(request) {
    const url  = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/tools';

    if (path === '/tools' || path === '/tools/index.html') {
      return html(INDEX_HTML);
    }
    if (path === '/tools/rent' || path === '/tools/rent/index.html') {
      return html(RENT_HTML);
    }
    if (path === '/tools/moving' || path === '/tools/moving/index.html') {
      return html(MOVING_HTML);
    }
    if (path.startsWith('/tools')) {
      return Response.redirect(new URL('/tools/', request.url).toString(), 301);
    }
    return new Response('Not Found', { status: 404 });
  },
};

function html(body) {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
