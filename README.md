# Derui Zhu · 个人学术主页

为 `https://deruizhu.github.io/` 准备的静态个人主页，内容以提供的英文简历为基础，并按用户最新要求调整。参考 Dingfan Chen 的主页和 Minimal Light 的学术主页布局，重新实现 HTML、CSS 与 JavaScript。无需安装依赖，无需后端，也无需 Jekyll 构建。

## 预览与部署

下载的 `deruizhu.github.io.zip` 已将网站文件放在压缩包根目录。解压后直接打开 `index.html` 即可在本地查看；在 HTTPS 上可使用一键复制 BibTeX，本地文件环境若不允许访问剪贴板会自动选择文本，按 Ctrl+C / Command+C 即可复制。

在 GitHub Pages 发布：

1. 使用 GitHub 用户名 `deruizhu` 对应的账号，在 GitHub 新建或打开仓库 **`deruizhu.github.io`**。若使用 GitHub Free，使用公开仓库。若仓库已有内容，先备份或在新分支中检查差异。
2. 将解压后的 `index.html`、`assets/`、`robots.txt`、`sitemap.xml` 和 `.nojekyll` 放入仓库根目录，提交到 `main` 分支。请上传解压后的文件，而不是 ZIP 文件本身；不要再套一层 `dist` 或文件夹。
3. 打开仓库 **Settings → Pages → Build and deployment**，将 Source 设为 **Deploy from a branch**，Branch 设为 **main**，目录设为 **/(root)**，然后保存。
4. 等待 GitHub Pages 部署完成后，访问 **https://deruizhu.github.io/**。

`deruizhu.github.io` 是 GitHub Pages 的用户站点地址。仓库所属账号必须匹配 `deruizhu`；这里不需要填写 Custom domain，也不需要创建 CNAME 文件。

GitHub 官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

当前 Sites 源码仓库使用 `dist/` 作为网站目录。GitHub 下载包已提取该目录的内容，可直接按上面的步骤部署。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 所有正文、个人信息、21 篇论文、引用数据、搜索引擎元信息 |
| `assets/styles.css` | 配色、字体、桌面与手机布局、打印样式 |
| `assets/main.js` | 论文筛选、搜索、BibTeX 弹窗、复制、导航高亮 |
| `assets/derui-zhu.jpg` | 从 RIT 官方个人介绍页取得的公开头像 |
| `assets/publications.bib` | 全部 21 篇论文的基础 BibTeX 条目 |
| `assets/favicon.svg` | 浏览器标签页图标 |
| `.nojekyll` | GitHub Pages 静态文件标记 |
| `robots.txt`、`sitemap.xml` | 针对 `deruizhu.github.io` 的搜索引擎配置 |

## 后续更新

- 修改个人简介、教育、奖项或服务：直接编辑 `index.html` 中对应的 section。页面采用英文，与提供的简历一致。
- 修改联系邮箱：同时更新侧栏、Contact 区和页面顶部的结构化数据。当前采用简历中的 `derui.zhu@rit.edu`。
- 更换头像：使用新照片覆盖 `assets/derui-zhu.jpg`，建议正方形、至少 600×600 像素。
- 修改论文：每篇论文是 `class="publication"` 的一个 `<li>`。`data-year` 用于年份筛选，`data-selected="true"` 用于精选列表。同步修改页面底部 `citation-data` 中对应的 BibTeX 和 `assets/publications.bib`，并更新筛选按钮上的计数。
- 增加新的年份：同时更新 `publication-year` 的选项。
- 页脚日期和 `sitemap.xml` 日期为固定维护日期，请在更新内容时同步修改。

## 展示约定

- 首页标语使用用户指定原文：Engineering efficient, reliable, and private AI-powered software systems. Research 开头与分享摘要同步采用这一定位。
- Research 围绕“高效、可靠且保护隐私的 AI 驱动软件系统”展开，保持 AI 隐私与可靠性、AI 驱动的软件性能两条主线。按五个紧密相关的子课题引用 16 篇论文，包含全部 6 篇一作论文和两篇 Spotlight 工作，用行内会议与年份链接展示研究积累。
- Research 中的会议与年份引用跳转到对应论文；遇到被筛选隐藏的条目，现有交互会自动展开全部论文，目标条目有背景高亮。
- Education 和其中的 Research visits 均不显示日期，简介也不显示学位年份。
- 简介将 Prof. Weiyi Shang 与 Prof. Lei Ma 表述为紧密合作者；保留 Ph.D. 导师 Prof. Jens Grossklags。
- 简介中注明曾在 TUM 的 Prof. Alexander Pretschner 团队担任博士后。
- 不展示独立的 Experience 栏目及其导航入口。
- 不展示 TU Darmstadt 经历、CISPA summer travel grant 或 Outstanding Overseas Chinese Doctoral Student Award。
- ARR Area Chair 显示为 2025, 2026。
- Activities（原 Recent highlights）不展示 CoQuIR；新增 AIPerf（ICSE 2027）组织工作和 2026 年 8 月的 NII Shonan Meeting 参会记录。
- 简介后展示博士生招募和研究合作邀请，使用现有联系邮箱；不添加未经提供的资金、入学批次或申请条件。
- Academic service 同步展示 AIPerf Program Co-Chair · 2027。
- 暂不展示 Students 栏目、学生名单及其导航入口，也不展示教学经历。需要恢复时可从源码历史取回。Invited presentations 保留为独立的折叠内容。

## 内容与来源

- 职位、教育、工作经历、获奖、学术服务和论文范围以用户提供的 `resume_deruiZhu.pdf` 为基础。
- 未将个人住址或国籍加入主页；网站和源码包均不包含简历 PDF，也不提供简历下载入口。
- 仅展示 21 篇已发表/录用论文，不展示 Work under review。默认显示 11 篇精选论文，All publications 显示 21 篇；搜索会自动切换到全部论文。
- 精选范围：以提供的简历为基础，纳入全部 6 篇一作论文、2025–2026 年的 CCF A 类论文，以及 Neural Episodic Control with State Abstraction（ICLR 2023，Spotlight）；按用户要求排除 CoQuIR（ACL 2026）。精选共 11 篇，完整论文列表保持 21 篇。
- PrivAuditor（NeurIPS 2024）标注 Spotlight；页面和 BibTeX 不列具体 track。More Than Just Functional（NeurIPS 2025）不标注 Spotlight。
- CCF 分类核对来源：https://www.ccf.org.cn/Academic_Evaluation/AI/ 、https://www.ccf.org.cn/Academic_Evaluation/NIS/ 、https://www.ccf.org.cn/Academic_Evaluation/TCSE_SS_PDL/
- LLM4JMH 和 More Than Just Functional 的完整作者列表按 ICSE 与 NeurIPS 的正式页面补全，避免沿用简历中的省略。
- BibTeX 提供作者、标题、年份、会议或期刊名称，以及已核实的链接；未填写未核实的 DOI、卷期或页码。尚未核实直接论文链接的条目提供明确标注的 Scholar 检索入口。
- 当前职位使用简历中的 RIT Assistant Professor，未沿用旧 TUM 个人页面的旧职位。
- 头像来源：https://www.rit.edu/computing/directory/dxzvse-derui-zhu
- Google Scholar：https://scholar.google.com/citations?user=iELr97kAAAAJ
- DBLP：https://dblp.org/pid/203/9320
- AIPerf 2027 官方页面（含 Program Co-Chair 任职）：https://conf.researchr.org/home/aiperf-2027
- NII Shonan Meeting 官方名称与链接：https://shonan.nii.ac.jp/ 。参会及月份依据用户说明，按本轮 2026 年上下文记录；未补充具体场次或报告题目。
- Research 组织方式参考：https://charithmendis.com/ 。研究介绍与方向说明为基于本人的论文重新撰写。
- 参考主页：https://dingfanchen.github.io/homepage/
- 布局参考：https://github.com/yaoyao-liu/minimal-light
- LLM4JMH：https://conf.researchr.org/details/icse-2026/icse-2026-research-track/249/LLM4JMH-Studying-the-Use-of-LLMs-for-Generating-Java-Performance-Microbenchmarks
- More Than Just Functional：https://papers.nips.cc/paper_files/paper/2025/hash/9c7354a9db7965601e670d3cd687c785-Abstract-Conference.html

## 已完成的检查

检查了 JavaScript 语法、论文总数与精选数量、页面内部链接、静态文件引用，以及本轮内容调整。当前环境的受管理网页预览服务不可用，因此桌面/移动端实际浏览器视觉和交互尚未验证。代码包含响应式布局、键盘焦点、减少动画偏好支持和无 JavaScript 的论文内容回退。
