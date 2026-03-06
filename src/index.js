/**
 * stj-tools — Cloudflare Worker
 * /tools/        → トップページ
 * /tools/rent/   → 家賃相場診断
 * /tools/moving/ → 引越し費用計算
 */

// ── 静的ファイルを文字列として埋め込む ──
import INDEX_HTML   from './public/index.html';
import RENT_HTML    from './public/rent/index.html';
import MOVING_HTML  from './public/moving/index.html';

export default {
  async fetch(request) {
    const url  = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/tools';

    const routes = {
      '/tools':        [INDEX_HTML,  'text/html; charset=utf-8'],
      '/tools/rent':   [RENT_HTML,   'text/html; charset=utf-8'],
      '/tools/moving': [MOVING_HTML, 'text/html; charset=utf-8'],
    };

    const match = routes[path];
    if (match) {
      return new Response(match[0], {
        headers: {
          'Content-Type': match[1],
          'Cache-Control': 'public, max-age=3600',
          'X-Robots-Tag': 'index, follow',
        },
      });
    }

    // /tools 配下の未定義パスは トップへリダイレクト
    if (path.startsWith('/tools')) {
      return Response.redirect(new URL('/tools/', request.url).toString(), 301);
    }

    return new Response('Not Found', { status: 404 });
  },
};
