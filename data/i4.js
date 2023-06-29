const fs = require("fs")

// 读取原始JSON文件
fs.readFile("output.json", "utf8", (err, data) => {
	if (err) {
		console.error("读取文件时出错:", err)
		return
	}

	try {
		var stringArray = JSON.parse(data)

		// 创建一个对象用于统计字符串长度
		var lengthCount = {}

		// 遍历字符串数组
		for (var i = 0; i < stringArray.length; i++) {
			var str = stringArray[i]

			// 计算汉字长度
			var length = str.length
			if (length > 10) console.log(str)
			// 统计不同长度的字符串数量
			if (lengthCount[length]) {
				lengthCount[length]++
			} else {
				lengthCount[length] = 1
			}
		}
		console.log(lengthCount)
	} catch (err) {
		console.error("解析JSON时出错:", err)
	}
})
