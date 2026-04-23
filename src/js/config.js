/**
 * 应用配置常量
 */
export const CONFIG = {
	// 调试开关（避免大量日志拖慢页面）
	DEBUG: false,
	// 便签墙消息
	MESSAGES: [
		'奥莉奥超级大王万岁',
		'保持好心情',
		'多喝水哦',
		'今天辛苦啦',
		'早点休息',
		'记得吃水果',
		'永远相信美好的事情即将发生',
		'保持微笑呀',
		'烦恼悄悄散去',
		'你真的超棒',
		'梦想总会实现',
		'未来可期',
		'记得给自己放松',
		'每天都要元气满满',
		'今天也要好好爱自己',
		'双向温柔',
		'你真的很棒',
		'相信自己',
		'往后皆甜',
		'来日方长',
		'你值得更好的',
		'保持热爱，奔赴山海',
		'做自己就好',
		'珍惜当下',
		'温柔对待世界',
		'烟火浪漫',
		'注意安全哦',
		'要开心呀',
		'好好睡一觉',
		'别太累了',
		'遇见真好',
		'今天也很美好',
		'生活需要仪式感',
		'慢慢变好',
		'心情要像花儿一样',
		'保持善良',
		'记得晒太阳',
		'笑口常开',
		'出去走走吧',
		'做喜欢的事',
		'享受当下',
		'好运会降临的',
		'未来可期',
		'保持热情',
		'温暖常在',
		'平安喜乐',
		'岁岁常欢愉',
		'万事皆可期',
		'一切安好',
		'心想事成',
		'前路浩浩荡荡',
		'健康快乐',
		'顺遂无忧',
		'轻松一点',
		'好好偏爱自己',
		'奔赴喜欢的一切',
		'与美好撞个满怀',
		'步步皆是晴朗',
		'平安喜乐常存',
		'福禄齐全',
		'相逢即是幸运',
		'做温暖的自己',
		'奥莉岁岁安然',
		'咚咚日日欢喜',
		'长景来日方长',
		'烟火皆是浪漫',
		'温柔一路同行',
		'咚咚万事顺意',
		'双向奔赴温柔',
		'往后皆是甜暖',
		'山海皆可期待',
		'遇见同频的你珍惜',
		'你真是个宝藏',
		'你画画真棒',
		'你超厉害的',
		'你就是小太阳',
		'温暖而向阳',
		'董董咚咚',
		'期待美好',
		'奥莉奥有点甜'
	],
	// 卡片颜色（黑暗模式深色系）
	COLORS: [
		'#4a3942', // 深玫瑰紫
		'#2f4858', // 深青蓝
		'#5a4a3a', // 深橙棕
		'#3a4a3a', // 深翠绿
		'#473a5a', // 深紫罗兰
		'#4a4a38', // 深橄榄黄
		'#364852', // 深青灰
		'#52385a'  // 深粉紫
	],

	// 卡片颜色（浅色模式亮色系）
	COLORS_LIGHT: [
		'#ffe0e3', // 粉红
		'#c7f0ff', // 天蓝
		'#ffd8a8', // 橙黄
		'#d9f2d9', // 翠绿
		'#e5d7ff', // 紫罗兰
		'#f9f7d9', // 柠檬黄
		'#d2f0f8', // 青色
		'#ffd4f5'  // 粉紫
	],

	// 卡片尺寸
	CARD: {
		DESKTOP_WIDTH: 220,
		DESKTOP_HEIGHT: 140,
		MOBILE_WIDTH: 140, // 缩小移动端卡片
		MOBILE_HEIGHT: 100,
		BORDER_RADIUS: 12,
		MOBILE_BORDER_RADIUS: 10
	},

	// 间距
	SPACING: {
		DESKTOP_HORIZONTAL: 16,
		DESKTOP_VERTICAL: 20,
		MOBILE_HORIZONTAL: 12,
		MOBILE_VERTICAL: 12
	},

	// 动画时长 (ms)
	ANIMATION: {
		TRANSITION_DURATION: 350,
		INITIAL_SPAWN_DELAY_DESKTOP: 20,
		INITIAL_SPAWN_DELAY_MOBILE: 30,
		SPAWN_INTERVAL_DESKTOP: 250, 
		SPAWN_INTERVAL_MOBILE: 180, 
		RESIZE_DEBOUNCE: 300
	},

	// 卡片数量限制
	LIMITS: {
		MAX_CARDS_DESKTOP: 185, // 增加到185个以形成更大的爱心
		MAX_CARDS_MOBILE: 185,
		INITIAL_CARDS_DESKTOP: 0, // 爱心形状通过自动生成逐步形成
		INITIAL_CARDS_MOBILE: 0
	},

	// 旋转角度范围
	ROTATION: {
		DESKTOP_RANGE: 10,
		MOBILE_RANGE: 6
	},

	// z-index管理
	Z_INDEX: {
		BASE: 1,
		MAXIMIZED: 10000,
		MAX_NORMAL: 9999 // 普通卡片最大z-index
	},

	// 边界约束
	BOUNDARY: {
		OVERFLOW_RATIO: 0.15 // 允许卡片超出屏幕的比例
	},

	// 初始缩放
	SCALE: {
		INITIAL_DESKTOP: 0.7,
		INITIAL_MOBILE: 0.85,
		NORMAL: 1,
		MINIMIZED: 0.1
	},

	// 移动端检测断点
	MOBILE_BREAKPOINT: 768,

	// 性能策略
	PERF: {
		USE_IDLE_SPAWN: true, // 使用 requestIdleCallback 在空闲时生成卡片
		WOW_MODE: true, // 惊艳模式：更快的生成、更高的上限
		INITIAL_BATCH_SIZE_DESKTOP: 4,
		INITIAL_BATCH_SIZE_MOBILE: 3,
		ADAPTIVE_SPAWN: false, // 禁用自适应生成，保持固定速度
		TARGET_FPS: 55,
		FPS_LOWER: 48,
		FPS_UPPER: 58,
		SPAWN_BURST_MAX: 1, // 禁用突发生成，每次只生成1张
		SPAWN_INTERVAL_MIN_DESKTOP: 350,
		SPAWN_INTERVAL_MIN_MOBILE: 350,
		SPAWN_INTERVAL_MAX_DESKTOP: 350,
		SPAWN_INTERVAL_MAX_MOBILE: 350
	},

	// 爱心形状布局
	LAYOUT: {
		USE_HEART_SHAPE: true, // 是否使用爱心形状布局
		EASTER_EGG_MESSAGES: [
			'为自己的人生鲜艳上色',
			'先把爱涂上喜欢的颜色'
		], // 彩蛋：最后两张卡片的固定文案（倒数第二张、最后一张）
		VERTICAL_OFFSET_DESKTOP: 0, // 基于可用高度保持爱心上下间距对称
		VERTICAL_OFFSET_MOBILE: 0, // 移动端同样保持上下居中
		// 爱心形状的参数化坐标点（基于数学公式）
		// 使用归一化坐标 [0, 1]，将在实际使用时根据屏幕大小缩放
		getHeartPositions: () => {
			const rawPositions = []
			const numPoints = 185 // 增加到185个点（约15%增量）

			let minX = Infinity, maxX = -Infinity
			let minY = Infinity, maxY = -Infinity

			for (let i = 0; i < numPoints; i++) {
				const t = (i / numPoints) * 2 * Math.PI
				// 爱心参数方程
				const x = 16 * Math.pow(Math.sin(t), 3)
				const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))

				rawPositions.push({ x, y })
				minX = Math.min(minX, x)
				maxX = Math.max(maxX, x)
				minY = Math.min(minY, y)
				maxY = Math.max(maxY, y)
			}

			const rangeX = maxX - minX || 1
			const rangeY = maxY - minY || 1

			return rawPositions.map(({ x, y }) => ({
				x: (x - minX) / rangeX,
				y: (y - minY) / rangeY
			}))
		}
	}
}
