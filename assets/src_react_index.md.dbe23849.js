import{_ as s,c as n,o as a,d as l}from"./app.f215d62f.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B","slug":"\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B","link":"#\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B","children":[]},{"level":2,"title":"\u590D\u4E60redux","slug":"\u590D\u4E60redux","link":"#\u590D\u4E60redux","children":[]}],"relativePath":"src/react/index.md","lastUpdated":1672060029000}'),p={name:"src/react/index.md"},o=l(`<h2 id="\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B" tabindex="-1">\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B <a class="header-anchor" href="#\u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u5DE5\u7A0B" aria-hidden="true">#</a></h2><ul><li><em>\u67E5\u770Breate-react-app\u7248\u672C\u547D\u4EE4 reate-react-app -V</em></li><li>\u5728reate-react-app 5.0\u4EE5\u4E0A\u7248\u672C\u4F7F\u7528tailwind\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D tailwindcss postcss autoprefixer</span></span>
<span class="line"><span style="color:#A6ACCD;"> yarn tailwindcss init </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">full </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u540C\u65F6\uFF0Ctailwind.config.js \u6709\u4E00\u4E2A\u5C5E\u6027(purge)\u4FEE\u6539\uFF0C\u5176\u4F59\u914D\u7F6E\u5C5E\u6027\u6CA1\u6709\u6539\u53D8</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0- \xA0</span><span style="color:#F07178;">purge</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/**/*.{js,jsx,ts,tsx}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0+ \xA0</span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/**/*.{js,jsx,ts,tsx}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0   </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728 \u5168\u5C40css \u4E2D\u5F15\u5165 tailwind</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* ./src/index.{css, less, sass, scss} */</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">tailwind base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">tailwind components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">tailwind utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u6839\u7EC4\u4EF6\u5F15\u5165</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ./src/index,tsx</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> ReactDOM </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u590D\u4E60redux" tabindex="-1">\u590D\u4E60redux <a class="header-anchor" href="#\u590D\u4E60redux" aria-hidden="true">#</a></h2><ul><li>Redux \u662F JavaScript \u72B6\u6001\u5BB9\u5668\uFF0C\u63D0\u4F9B\u53EF\u9884\u6D4B\u5316\u7684\u72B6\u6001\u7BA1\u7406\u3002Redux \u548C React \u4E4B\u95F4\u6CA1\u6709\u5173\u7CFB\u3002Redux \u652F\u6301 React\u3001Angular\u3001Ember\u3001jQuery \u751A\u81F3\u7EAF JavaScript</li></ul><ol><li>\u8981\u70B9</li></ol><ul><li>\u5E94\u7528\u4E2D\u6240\u6709\u7684 state \u90FD\u4EE5\u4E00\u4E2A\u5BF9\u8C61\u6811\u7684\u5F62\u5F0F\u50A8\u5B58\u5728\u4E00\u4E2A\u5355\u4E00\u7684 store \u4E2D\u3002 \u60DF\u4E00\u6539\u53D8 state \u7684\u529E\u6CD5\u662F\u89E6\u53D1 action\uFF0C\u4E00\u4E2A\u63CF\u8FF0\u53D1\u751F\u4EC0\u4E48\u7684\u5BF9\u8C61</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> redux </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u521D\u59CB\u5316\u6570\u636E \u653E\u5728reducer\u4E2D</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> initialState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">counter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u4E3A\u4E86\u63CF\u8FF0 action \u5982\u4F55\u6539\u53D8 state \u6811\uFF0C\u4F60\u9700\u8981\u7F16\u5199 reducer \u4F5C\u7528\u5C31\u662F\u63A5\u6536\u65E7\u7684 state \u548C action\uFF0C\u8FD4\u56DE\u65B0\u7684 state\u3002</li><li>\u5728 default \u60C5\u51B5\u4E0B\u8FD4\u56DE\u65E7\u7684 state\u3002\u9047\u5230\u672A\u77E5\u7684 action \u65F6\uFF0C\u4E00\u5B9A\u8981\u8FD4\u56DE\u65E7\u7684 state</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;">//reducer</span></span>
<span class="line"><span style="color:#676E95;">//state\u7ED9\u4E00\u4E2A\u521D\u59CB\u5316\u503C</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reducer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initialState</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">INCREMENT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DECREMENT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ADD_NUMBBER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SUB_NUMBER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2Astore(\u521B\u5EFA\u7684\u65F6\u5019\u9700\u8981\u4F20\u5165\u4E00\u4E2Areducer)</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;">//store(\u521B\u5EFA\u7684\u65F6\u5019\u9700\u8981\u4F20\u5165\u4E00\u4E2Areducer)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> redux</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createStore</span><span style="color:#A6ACCD;">(reducer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//store\u8BA2\u9605 \u53EF\u4EE5\u624B\u52A8\u8BA2\u9605\u66F4\u65B0\uFF0C\u4E5F\u53EF\u4EE5\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u89C6\u56FE\u5C42\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subscribe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">counter:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getState</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u6539\u53D8\u5185\u90E8 state \u60DF\u4E00\u65B9\u6CD5\u662F dispatch \u4E00\u4E2A action,\u5B83\u662F store \u6570\u636E\u7684\u552F\u4E00\u6765\u6E90,\u4E00\u822C\u6765\u8BF4\u4F60\u4F1A\u901A\u8FC7 store.dispatch() \u5C06 action \u4F20\u5230 store\u3002</li><li>action \u53EF\u4EE5\u88AB\u5E8F\u5217\u5316\uFF0C\u7528\u65E5\u8BB0\u8BB0\u5F55\u548C\u50A8\u5B58\u4E0B\u6765\uFF0C\u540E\u671F\u8FD8\u53EF\u4EE5\u4EE5\u56DE\u653E\u7684\u65B9\u5F0F\u6267\u884C</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//actions</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> action1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">INCREMENT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> action2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DECREMENT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> action3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ADD_NUMBBER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> action4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SUB_NUMBER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u6D3E\u53D1action   \u628Aaction\u4F20\u5165reducer\u91CC\u9762 \u5B9E\u73B0initialState\u7684\u4FEE\u6539.\u4E00\u4E2Aaction\u53EF\u4EE5\u591A\u6B21\u6D3E\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(action1)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(action2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(action3)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(action3)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(action4)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,20),e=[o];function c(r,t,D,F,y,i){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
