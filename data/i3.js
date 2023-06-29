const fs = require("fs")

// 读取原始JSON文件
fs.readFile("output3.json", "utf8", (err, data) => {
	if (err) {
		console.error("读取文件时出错:", err)
		return
	}

	try {
		const jsonData = JSON.parse(data)

		// 去除字符串数组中的括号和数字
		const resultArray = jsonData.map((str) =>
			str.replace(/[^\u4e00-\u9fa5]/g, "")
		)

		// 将结果写入新的JSON文件
		fs.writeFile("output4.json", JSON.stringify(resultArray), "utf8", (err) => {
			if (err) {
				console.error("写入文件时出错:", err)
				return
			}
			console.log("结果已成功写入到output.json文件中")
		})
	} catch (err) {
		console.error("解析JSON时出错:", err)
	}
})
