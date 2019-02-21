import * as c from "./constants";

const defaultResponse = {
  status: 200,
  status_phrase: 'OK',
  app_time: '2ms',
  time: '10ms',
  size: '512B',
  headers: "HTTP/1.1 200 OK\n" +
    "Server: GitHub.com\n" +
    "Date: Wed, 20 Feb 2019 23:09:08 GMT\n" +
    "Content-Type: text/html; charset=utf-8\n" +
    "Transfer-Encoding: chunked\n" +
    "Status: 200 OK\n" +
    "Vary: X-PJAX\n" +
    "ETag: W/\"cd8eb6ea3e64d1ccc4c56b4f9102d35f\"\n" +
    "Cache-Control: max-age=0, private, must-revalidate\n" +
    "Set-Cookie: user_session=9cvdV2SWdNDQBJuvaIctTjW_cMIeLl7V5RY5Q9cu1Cs7ENKE; path=/; expires=Wed, 06 Mar 2019 23:09:08 -0000; secure; HttpOnly\n" +
    "Set-Cookie: __Host-user_session_same_site=9cvdV2SWdNDQBJuvaIctTjW_cMIeLl7V5RY5Q9cu1Cs7ENKE; path=/; expires=Wed, 06 Mar 2019 23:09:08 -0000; secure; HttpOnly; SameSite=Strict\n" +
    "Set-Cookie: has_recent_activity=1; path=/; expires=Thu, 21 Feb 2019 00:09:08 -0000\n" +
    "Set-Cookie: _gh_sess=c0dFSkJnTkpkVlJZSzRheG83a1BBT0ZVNVpsR0VYa29JSVUvcENQa1IzU2Q0SGdYTHBHUlNRU2NHMWVCSG1jVnUzWFFxU1k1VldqM0NnelRZYlVZek5vL0Y4TXdIWXNKbDlBYmxYL2FjekIvajN1dnlDUTIrVysxdEVuek9VbHd2TjZYL01PYVovZFNqUXkrQm1yM2NXRThJNGhIZ01ZMzhFNWkzYWZxM2Fha0JhdG1hSzdveW5zejhWUTJuVTFZdmEwdTVWeDE0RUVQSXBjbzZtM2JsK3FGK2Y1N1N4VDA2SC9vb0RQUWowdWZFUGhXeVl5MENZZ1hrMHdlVHZvckdDNi8xT2RSM0hIWC9iV3pNVVl4OFhUTXI2UisvZ1Fkck44OUFIeXRNb2lOUHBlL0N6YTdKRWxkRkFyaU1zNmMtLWdQNzJDSDZ1R2N4UFEyMUZuYmNsMGc9PQ%3D%3D--0f93d3b48ec41fc3bce759df57e899c612a48e2a; path=/; secure; HttpOnly\n" +
    "X-Request-Id: d73d309a-a2a7-4505-8015-09d6969c9e81\n" +
    "Strict-Transport-Security: max-age=31536000; includeSubdomains; preload\n" +
    "X-Frame-Options: deny\n" +
    "X-Content-Type-Options: nosniff\n" +
    "X-XSS-Protection: 1; mode=block\n" +
    "Expect-CT: max-age=2592000, report-uri=\"https://api.github.com/_private/browser/errors\"\n" +
    "Content-Security-Policy: default-src 'none'; base-uri 'self'; block-all-mixed-content; connect-src 'self' uploads.github.com www.githubstatus.com collector.githubapp.com api.github.com www.google-analytics.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com wss://live.github.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; frame-src render.githubusercontent.com launch-editor.github.com 'self'; img-src 'self' data: github.githubassets.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com *.githubusercontent.com; manifest-src 'self'; media-src 'none'; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com\n" +
    "Content-Encoding: gzip\n" +
    "X-GitHub-Request-Id: EE90:5336:6A2A5F:CD8443:5C6DDE14",
  body: "{" +
    "  \"foo\": \"bar\"" +
    "}",
  request: "",
};


const defaultState = {
  httpClient: {
    response: null,
  },
  responseEditor: {
    selectedTab: 'BodyTab',
    mode: 'json',
    content: '',
  }
};

const ACTION_HANDLERS = {
  [c.CHANGE_RESPONSE_TAB]: (state, { payload }) => {
    let content, mode = '';
    if (state.httpClient.response) {
      switch (payload) {
        case 'BodyTab':
          content = state.httpClient.response.body;
          mode = 'json';
          break;
        case 'ResponseTab':
          content = state.httpClient.response.headers;
          mode = 'text';
          break;
        case 'RequestTab':
          content = state.httpClient.response.request;
          mode = 'text';
          break;
      }
    }

    return {
      ...state,
      responseEditor: {
        ...state.responseEditor,
        selectedTab: payload,
        content: content,
        mode: mode,
      },
    }
  },
};

export default (state = defaultState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
