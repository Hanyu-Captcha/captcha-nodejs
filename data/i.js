const fs = require("fs")

// 读取原始JSON文件
fs.readFile("ci.json", "utf8", (err, data) => {
	if (err) {
		console.error("读取文件时出错:", err)
		return
	}

	try {
		const jsonData = JSON.parse(data)

		// 提取对象数组中的'word'属性并组成新的数组
		const resultArray = jsonData.map((obj) => obj.ci)

		// 将结果写入新的JSON文件
		fs.writeFile("output2.json", JSON.stringify(resultArray), "utf8", (err) => {
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
