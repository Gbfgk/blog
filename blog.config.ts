import type { FeedEntry } from './app/types/feed'

export { zhCN as dateLocale } from 'date-fns/locale/zh-CN'

const basicConfig = {
	title: '陨辉云记',
	subtitle: '陨辉的部落阁',
	// 长 description 利好于 SEO
	description: '小众综合网站，集博客、云服务、网络安全、应用推荐与友链等内容于一体，提供多元化的信息服务。',
	author: {
		name: '纸鹿本鹿',
		avatar: 'https://r.meteor.xin/logo.jpg',
		email: 'hi@zhilu.cyou',
		homepage: 'https://www.meteor.xin/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://www.meteor.xin/logo.jpg',
	language: 'zh-CN',
	timeEstablished: '2019-07-19',
	timezone: 'Asia/Shanghai',
	url: 'https://blog.meteor.xin/',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
			杂谈: { icon: 'ph:chat-bold', color: '#3ba' },
			生活: { icon: 'ph:shooting-star-bold', color: '#f77' },
			代码: { icon: 'ph:code-bold', color: '#77f' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},


}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: '摸鱼处',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Vercel'],
	date: blogConfig.timeEstablished,
	comment: '这是我自己',
}

export default blogConfig
