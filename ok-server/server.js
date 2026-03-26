import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // GET /echo?msg=hello -> "hello"
  if (url.pathname === '/echo') {
    const msg = url.searchParams.get('msg') ?? '';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(msg);
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('ok');
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
